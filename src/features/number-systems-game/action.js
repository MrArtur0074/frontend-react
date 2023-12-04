import Phaser from 'phaser'
import Endpoints from '../../api/endpoints.js'
import {axiosInstance} from '../../api/instance'
import {runStoneAnswers, runUserModal} from '../../store/actions/actionGame.js'

const width = window.screen.width < 640 ? window.screen.width : 640
const height = window.screen.height < 640 ? window.screen.height : 640

export function col(timer, scene) {
  let seconds = 60
  timer.setText('TIME:' + seconds)
  let timeGame = setInterval(function timeoftimer() {
    if (seconds <= 0) {
      clearInterval(timeGame)
      setEndData(scene)
      scene.imgAnswers.forEach(element => {
        element.destroy()
      })

      scene.textAnswers.forEach(element => {
        element.destroy()
      })
      return null
    }
    seconds--
    timer.setText('TIME:' + seconds)
  }, 1000)
  return {
    timeGame: timeGame,
    seconds: seconds
  }
}

export async function generateBinary(imgAnswers, textAnswers, scene) {
  if (!scene.data) scene.data = await loadingData()

  scene.answers = scene.data.game[scene.level - 1]
  scene.examplesText.setText(scene.data.values[scene.level - 1].element)
  scene.progress.setText(`${scene.level}/${scene.data.game.length}`)
  scene.system.setText(`Система счисления: ${scene.data.values[scene.level - 1].notationAnswer}`)

  const answersCount = scene.data.game[scene.level - 1].length

  for (let i = 0; i < answersCount; i++) {
    if (width > 600)
      imgAnswers[i] = scene.add
        .image((width / answersCount) * i + width / answersCount / 2, height / 2 + 40, 'purple')
        .setScale(1)
    else
      imgAnswers[i] = scene.add
        .image((width / 2) * Math.floor(i % 2) + width / 4, height / 3 + 40 + 140 * Math.floor(i / 2), 'purple')
        .setScale(1)
    console.log((width / 2) * Math.floor(i / 2) + width / 4, height / 2 + 40 + 40 * Math.floor(i / 2))
    textAnswers[i] = scene.add.text(width / 2, height / 3, scene.answers[i], {font: 'bold 28px Courier'})
    Phaser.Display.Align.In.Center(textAnswers[i], imgAnswers[i])
    imgAnswers[i].setInteractive()
    imgAnswers[i].on('pointerdown', function () {
      scene.userAnswers.push(scene.answers[i])
      scene.level++
      imgAnswers.forEach(element => {
        element.destroy()
      })
      textAnswers.forEach(element => {
        element.destroy()
      })

      if (scene.level > scene.data.game.length) {
        clearInterval(scene.colculator.timeGame)
        setEndData(scene)
      } else {
        scene.activeGame = 'noactive'
      }
    })
  }
}

async function setEndData(scene) {
  const data = await loadingData('end', {
    gameId: 4,
    answers: scene.userAnswers
  })
  await runStoneAnswers(data)
  runUserModal(true)
}

export async function loadingData(type = 'start', data = null) {
  let response = null
  switch (type) {
    case 'start':
      // eslint-disable-next-line no-case-declarations
      response = await axiosInstance.get(Endpoints.GAME_SYSTEM_NUMBER.GENERATE)
      console.log(response.data)
      return response.data
    case 'end':
      response = await axiosInstance.post(Endpoints.GAME_SYSTEM_NUMBER.UPDATE, data)
      return response.data
    default:
      return null
  }
}

export function newPlayerGame(scene) {
  scene.level = 1
  scene.data = null
  scene.colculator = col(scene.timer, scene)
  scene.activeGame = 'noactive'
  scene.userAnswers = []
}
