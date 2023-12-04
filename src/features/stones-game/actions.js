import Phaser from 'phaser'
import {randomNumbers} from './lib.js'
import Endpoints from '../../api/endpoints.js'
import {axiosInstance} from '../../api/instance'
import {runStoneScore} from '../../store/actions/actionGame'
import {showNotification} from '@mantine/notifications'

let circleAnswers,
  ceilCookie,
  startCookie,
  answers,
  userMoves = [],
  computerMoves = [],
  isPlayer = true,
  computer
const circle = [],
  textCircle = [],
  width = window.screen.width < 640 ? window.screen.width : 640

async function loadingData(type = 'start', data = null) {
  try {
    let response = null
    switch (type) {
      case 'start':
        // eslint-disable-next-line no-case-declarations
        response = await axiosInstance.get(Endpoints.GAME_STONE.GENERATE)
        return response.data
      case 'next':
        response = await axiosInstance.post(Endpoints.GAME_STONE.UPDATE, data)
        return response.data
      default:
        return null
    }
  } catch (e) {
    console.log(e)
    return {
      error: 'Произошла ошибка при подключении к серверу'
    }
  }
}

export async function endGame(scene, closeGame = false) {
  isPlayer = true
  clearInterval(computer)
  const response = await loadingData('next', {user: userMoves, comp: computerMoves, gameId: 3, endGame: closeGame})
  if (response.answer == 'success') {
    let stateGame = {
      score: response.score,
      ceilCookie: response.startData.ceilCookie,
      circleAnswers: response.startData.circleAnswers,
      startCookie: response.startData.startCookie,
      scene: scene
    }

    startGame(scene, stateGame)

    if (response.playerWin) {
      showNotification({
        title: 'Победа',
        message: 'Поздравляю! Ваше количество очков увеличилось на 50.',
        autoClose: 3000,
        color: 'green'
      })
    } else {
      showNotification({
        title: 'Поражение',
        message: 'Ваше количество очков не изменилось. 🤥',
        autoClose: 3000,
        color: 'red'
      })
    }
  }

  if (closeGame && response.text) runStoneScore({score: response?.text})
}

function move(answer, scene, person = 'player') {
  if (scene.actionGame) {
    if (person === 'player') {
      isPlayer = false
      userMoves.push(answer)
    } else {
      isPlayer = true
      computerMoves.push(answer)
    }
    startCookie += answer
    scene.startText.setText(startCookie)

    if (startCookie >= ceilCookie) {
      scene.actionGame = false

      circle.forEach(item => {
        item.destroy()
      })

      textCircle.forEach(item => {
        item.destroy()
      })
      endGame(scene, false)
    }
  }
}

function computerMove(scene) {
  let moveComp = false
  for (let i = 0; i < circleAnswers.length; i++)
    if (answers[startCookie + circleAnswers[i]] === 'fail' || startCookie + circleAnswers[i] >= ceilCookie) {
      move(circleAnswers[i], scene, 'computer')
      moveComp = true
      break
    }

  if (!moveComp) {
    let rand = randomNumbers(0, circleAnswers.length - 1)[0]
    move(circleAnswers[rand], scene, 'computer')
  }
}

function drawCircle(scene, i) {
  circle[i] = scene.add
    .image(
      // width / circleAnswers.length + circleRadius * 2 * i + (circleRadius / 2) * i - circleRadius,
      (width / (circleAnswers.length + 1)) * (i + 1),
      475,
      scene.imagesAnswers[i]
    )
    .setOrigin(0.5)

  textCircle[i] = scene.add
    .text(0, 0, '+' + circleAnswers[i], {font: 'bold 28px Courier', fill: '#FFFFFF', align: 'center'})
    .setOrigin(0.5)

  Phaser.Display.Align.In.Center(textCircle[i], circle[i])
  textCircle[i].y = textCircle[i].y - 5
  textCircle[i].x = textCircle[i].x + 5

  circle[i].setInteractive()
  circle[i].on('pointerdown', function () {
    if (isPlayer) {
      move(circleAnswers[i], scene)
      computer = setTimeout(computerMove, 1000, scene)
    }
  })
}

function calculatePositions(circleAnswers, ceilCookie) {
  let pos = []
  for (let i = ceilCookie - 1; i >= 0; i--) {
    let pointState = 'fail'
    for (let j = 0; j < circleAnswers.length; j++) {
      let step = circleAnswers[j] + i
      if (step >= ceilCookie || pos[step] === 'fail') pointState = 'success'
    }
    pos[i] = pointState
  }

  return pos
}

export async function startGame(scene, data = false) {
  const gameData = data ? data : await loadingData()
  circleAnswers = gameData.circleAnswers
  ceilCookie = gameData.ceilCookie

  startCookie = gameData.startCookie

  answers = calculatePositions(circleAnswers, ceilCookie)

  scene.startText.setText(startCookie)
  scene.cookieText.setText(ceilCookie)

  if (gameData.score) scene.score.setText([gameData.score])

  scene.actionGame = true

  userMoves = []
  computerMoves = []
  isPlayer = true

  for (let i = 0; i < circleAnswers.length; i++) {
    // Нужно будет посчитать выравнивание
    drawCircle(scene, i)
  }
}

export function newPlayerGame(scene) {
  scene.timeGame = 300

  const timer = setInterval(() => {
    scene.timeGame--
    scene.timeText.setText(`${scene.timeGame}`)
    if (scene.timeGame <= 0) {
      scene.actionGame = false
      endGame(scene, true)
      clearInterval(timer)
    }
  }, 1000)

  scene.score.setText('0')

  startGame(scene)
}
