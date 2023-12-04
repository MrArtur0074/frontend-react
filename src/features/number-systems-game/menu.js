import Phaser from 'phaser'
import {gameScore} from '../../utils/game-score'
import Play from '../../assets/stones-game/menu/play.png'
import Setting from '../../assets/stones-game/menu/setting.png'
import Arrow from '../../assets/stones-game/menu/arrow.png'
import Score from '../../assets/stones-game/menu/score-table.png'
import PlayMobile from '../../assets/stones-game/menu/play-mobile.png'
import SettingMobile from '../../assets/stones-game/menu/setting-mobile.png'
import ScoreMobile from '../../assets/stones-game/menu/score-table-mobile.png'
import ArrowMobile from '../../assets/stones-game/menu/arrow-mobile.png'
import MetaversRounded from '../../assets/stones-game/MetaversRounded.otf'

const width = window.screen.width < 640 ? window.screen.width : 640

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({key: 'MenuScene'})
  }

  preload() {
    this.load.image('play', Play)
    this.load.image('setting', Setting)
    this.load.image('arrow', Arrow)
    this.load.image('score', Score)
    this.load.image('playMobile', PlayMobile)
    this.load.image('settingMobile', SettingMobile)
    this.load.image('scoreMobile', ScoreMobile)
    this.load.image('arrowMobile', ArrowMobile)
    this.load.bitmapFont('MetaversRounded', MetaversRounded, MetaversRounded)
  }

  create() {
    /* const logo = this.add.text(width / 2, 100, 'Игра про C3', {font: '48px Arial', fill: '#fff'})
    logo.setOrigin(0.5, 0.5)*/

    this.play = this.add
      .image((width / 3) * 1.5, 400, 'play')
      .setOrigin(0.5, 0.5)
      .setScale(0.4)
      .setInteractive()

    this.setting = this.add
      .image((width / 3) * 2.5, 400, 'setting')
      .setOrigin(0.5, 0.5)
      .setScale(0.4)
      .setInteractive()

    this.arrow = this.add
      .image((width / 3) * 0.5, 400, 'arrow')
      .setOrigin(0.5, 0.5)
      .setScale(0.4)
      .setInteractive()

    this.scoreText = this.add
      .image((width / 3) * 1.5, 150, 'score')
      .setOrigin(0.5, 0.5)
      .setScale(0.6)
      .setInteractive()

    const score = this.add.text(width / 2, 200, 'Лучший счет: 0', {font: '32px MetaversRounded', fill: '#fff'})
    score.setOrigin(0.5, 0.5)

    this.play.on('pointerdown', this.onPlay, this)
    Phaser.Display.Align.In.Center(this.scoreText, score)

    this.setting.on('pointerdown', this.onOptions, this)

    this.arrow.on('pointerdown', this.onBack, this)

    setTimeout(() => gameScore(score, 4), 100)
  }

  onPlay() {
    this.scene.start('MainScene')
  }

  onOptions() {
    this.scene.start('OptionsMenu')
  }

  onBack() {
    window.location.href = '/games'
  }
}
