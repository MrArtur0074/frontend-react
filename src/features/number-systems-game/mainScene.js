import Phaser from 'phaser'
import {generateBinary, col} from './action'
import {runStoneData} from '../../store/actions/actionGame'
import Purple from '../../assets/stones-game/game/purple.png'

const width = window.screen.width < 640 ? window.screen.width : 640
const height = window.screen.height < 640 ? window.screen.height : 640

export class MainScene extends Phaser.Scene {
  constructor() {
    super({key: 'MainScene'})
    this.level = 1
    this.activeGame = 'noactive'
  }
  preload() {
    console.log(Purple)
    this.load.image('purple', Purple)
  }

  create() {
    this.timer = this.add.text(width - 10, 10, '0', {font: 'bold 28px Courier', fill: '#fff'}).setOrigin(1, 0)
    if (width > 600)
      this.examplesText = this.add
        .text(width / 2, height / 4 + 40, '4', {font: 'bold 36px Courier'})
        .setOrigin(0.5, 0.5)
    else
      this.examplesText = this.add
        .text(width / 2, height / 4 - 20, '4', {font: 'bold 36px Courier'})
        .setOrigin(0.5, 0.5)
    if (width > 600)
      this.system = this.add
        .text(width / 2, height / 2 + 200, '', {font: 'bold 28px Courier', fill: '#fff'})
        .setOrigin(0.5, 0.5)
    else
      this.system = this.add
        .text(width / 2, height / 2 + 200, '', {font: 'bold 22px Courier', fill: '#fff'})
        .setOrigin(0.5, 0.5)
    this.progress = this.add.text(30, 10, '1/20', {font: 'bold 28px Courier', fill: '#fff'})
    this.data = null
    this.imgAnswers = []
    this.textAnswers = []
    this.colculator = col(this.timer, this)
    this.userAnswers = []
    runStoneData({data: {scene: this}})
  }

  update() {
    if (this.activeGame == 'noactive') {
      this.activeGame = 'active'
      console.log('started')
      this.loadBinary = generateBinary(this.imgAnswers, this.textAnswers, this)
    }
  }
}
