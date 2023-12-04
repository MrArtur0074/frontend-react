import {levels} from './action'
import Phaser from 'phaser'

const width = window.screen.width < 640 ? window.screen.width : 640
const height = window.screen.height < 640 ? window.screen.height : 640

export function generateBinary(imgAnswers, textAnswers, dataGame, answers) {
  for (let i = 0; i < levels[this.level - 1].answers; i++) {
    imgAnswers[i] = this.add
      .image(
        (width / levels[this.level - 1].answers) * i + width / levels[this.level - 1].answers / 2,
        height / 2 + 40,
        this.beer[i]
      )
      .setScale(0.6)
    textAnswers[i] = this.add.text(width / 2, height / 3, '', {font: 'bold 28px Courier'})
    textAnswers[i].setText(answers[i])
    Phaser.Display.Align.In.Center(textAnswers[i], imgAnswers[i])
    imgAnswers[i].setInteractive()
    imgAnswers[i].on('pointerdown', function () {
      console.log(i, dataGame.answer)
      if (answers[i] === dataGame.answer) {
        console.log('good')
      } else {
        console.log('haha')
      }
    })
  }
}
