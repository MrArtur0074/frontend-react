import Phaser from 'phaser'
import {startGame, endGame} from './actions.js'
import Cookie from '../../assets/stones-game/img.png'
import User from '../../assets/stones-game/game/user.png'
import Green from '../../assets/stones-game/game/green.png'
import Red from '../../assets/stones-game/game/red.png'
import Purple from '../../assets/stones-game/game/purple.png'
import Black from '../../assets/stones-game/game/black.png'
import Grey from '../../assets/stones-game/game/grey.png'
import Time from '../../assets/stones-game/game/time.png'
import {runStoneData} from '../../store/actions/actionGame.js'

const width = window.screen.width < 640 ? window.screen.width : 640
const height = window.screen.height < 640 ? window.screen.height : 640

export class MainScene extends Phaser.Scene {
  constructor() {
    super({key: 'MainScene'})
    this.timeGame = 300
  }

  preload() {
    console.log(Red)
    this.load.image('cookie', Cookie)
    this.load.image('user', User)
    this.load.image('red', Red)
    this.load.image('green', Green)
    this.load.image('purple', Purple)
    this.load.image('black', Black)
    this.load.image('grey', Grey)
    this.load.image('time', Time)
  }

  create() {
    runStoneData({data: {scene: this}})
    this.imageScore = this.add.image(70, 40, 'time', '').setScale(0.5).setOrigin(0.5)
    this.imageTime = this.add
      .image(width - 70, 40, 'time', '')
      .setScale(0.5)
      .setOrigin(0.5)
    this.score = this.add
      .text(10, 10, '0', {
        font: 'bold 25px Courier',
        fill: '#FFFFFF',
        wordWrap: {width: 50},
        align: 'center'
      })
      .setOrigin(0.5)
    this.cookie = this.add.image(width / 2, height / 3 - 40, 'black', '')
    this.startImg = this.add.image(width / 2, height / 2.5 + 65, 'grey', '').setOrigin(0.5)
    this.cookieText = this.add
      .text(0, 0, '0', {font: 'bold 28px Courier', fill: '#FFFFFF', align: 'center'})
      .setOrigin(0.5)
    this.startText = this.add
      .text(width / 2, height / 2.5 + 65, '0', {font: 'bold 28px Courier', fill: '#FFFFFF', align: 'center'})
      .setOrigin(0.5)
    this.timeText = this.add.text(width - 180, 10, `${this.timeGame}`, {
      font: 'bold 25px Courier',
      fill: '#ffffff',
      align: 'center'
    })
    this.actionGame = true
    this.score.setText(['0'])
    Phaser.Display.Align.In.Center(this.cookieText, this.cookie)
    Phaser.Display.Align.In.Center(this.startText, this.startImg)
    Phaser.Display.Align.In.Center(this.score, this.imageScore)
    Phaser.Display.Align.In.Center(this.timeText, this.imageTime)
    this.cookieText.y = this.cookieText.y - 5
    this.cookieText.x = this.cookieText.x + 5
    this.startText.y = this.startText.y - 5
    this.startText.x = this.startText.x + 5

    this.imagesAnswers = ['red', 'green', 'purple']

    const timer = setInterval(() => {
      this.timeGame--
      this.timeText.setText(`${this.timeGame}`)
      if (this.timeGame <= 0) {
        this.actionGame = false
        endGame(this, true)
        clearInterval(timer)
      }
    }, 1000)

    startGame(this)
  }
}
