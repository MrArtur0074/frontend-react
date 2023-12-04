import Phaser from 'phaser'
import Background from './assets/backgrounds/win.jpg'

const menuButtonStyle = {
  font: '20px',
  backgroundColor: 'rgba(0,0,0,0.5)',
  fill: '#fff',
  align: 'center'
}
export default class Win extends Phaser.Scene {
  constructor() {
    super({key: 'WinScene'})
  }
  preload() {
    this.load.image('win', Background)
  }
  create() {
    this.add.image(470, 320, 'win')
    const menuButton = this.add.text(390, 400, 'Go Back to Menu', menuButtonStyle)

    menuButton.setInteractive()

    menuButton.on('pointerover', () => {
      menuButton.setStyle({fill: '#000', backgroundColor: '#fff'})
    })
    menuButton.on('pointerout', () => {
      menuButton.setStyle(menuButtonStyle)
    })
    menuButton.on('pointerdown', () => {
      this.scene.start('MenuScene')
    })
  }
}
