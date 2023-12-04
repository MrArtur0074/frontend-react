import Phaser from 'phaser'
import Background from './assets/backgrounds/menu.jpg'

const width = window.screen.width < 940 ? window.screen.width / 2 : 470
const height = window.screen.height < 470 ? window.screen.height : 470

const StartButtonStyle = {
  font: '50px',
  backgroundColor: 'rgba(255,255,255,0.3)',
  fill: '#fff',
  align: 'center'
}
const GuideButtonStyle = {
  font: '18px',
  backgroundColor: 'rgba(255,255,255,0.3)',
  fill: '#fff',
  align: 'center'
}

export default class Menu extends Phaser.Scene {
  constructor() {
    super({key: 'MenuScene'})
  }
  preload() {
    this.load.image('background', Background)
  }
  create() {
    this.add.image(470, 320, 'background')
    const startButton = this.add.text(width / 2, height / 2, 'START', StartButtonStyle)
    startButton.setOrigin(0.5, 0.5)
    const guideButton = this.add.text(width / 2, height / 1.5, 'How to play?', GuideButtonStyle)
    guideButton.setOrigin(0.5, 0.5)
    startButton.setInteractive()
    guideButton.setInteractive()
    startButton.on('pointerover', () => {
      this.startOnHover(startButton)
    })
    startButton.on('pointerout', () => {
      startButton.setStyle(StartButtonStyle)
    })
    startButton.on('pointerdown', () => {
      this.scene.start('MainScene')
    })
    guideButton.on('pointerover', () => {
      this.startOnHover(guideButton)
    })
    guideButton.on('pointerout', () => {
      guideButton.setStyle(GuideButtonStyle)
    })
    guideButton.on('pointerdown', () => {
      this.scene.start('guideScene')
    })
  }

  startOnHover(button) {
    button.setStyle({fill: '#000', backgroundColor: '#fff'})
  }
}
