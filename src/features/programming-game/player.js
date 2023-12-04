import Phaser from 'phaser'
import Knight from './assets/knight/knight.png'
import KnightAtlas from './assets/knight/knight_atlas.json'
import KnightAnim from './assets/knight/knight_anim.json'

export default class Player extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    let {scene, x, y, texture, frame} = data
    super(scene.matter.world, x, y, texture, frame)
    this.scene.add.existing(this)
    const {Body, Bodies} = Phaser.Physics.Matter.Matter
    let playerCollider = Bodies.circle(this.x, this.y, 8, {isSensor: false, label: 'collider'})
    let playerSensor = Bodies.circle(this.x, this.y, 24, {isSensor: true, label: 'sensor'})
    const compoundBody = Body.create({
      parts: [playerCollider, playerSensor],
      frictionAir: 0.35
    })
    this.setExistingBody(compoundBody)
    this.setFixedRotation()
    this.direction = 'stop'
  }
  static preload(scene) {
    scene.load.atlas('knight', Knight, KnightAtlas)
    scene.load.animation('knight_anim', KnightAnim)
  }
  update() {
    const speed = 2.5
    let playerVelocity = new Phaser.Math.Vector2()

    if (this.direction === 'up') {
      playerVelocity.y = -1
    } else if (this.direction === 'down') {
      playerVelocity.y = 1
    } else if (this.direction === 'right') {
      playerVelocity.x = 1
    } else if (this.direction === 'left') {
      playerVelocity.x = -1
    } else {
      playerVelocity.x = 0
      playerVelocity.y = 0
    }

    playerVelocity.scale(speed)
    playerVelocity.normalize()
    this.setVelocity(playerVelocity.x, playerVelocity.y)

    if (Math.abs(this.body.velocity.x) > 0.1 || Math.abs(this.body.velocity?.y) > 0.1) {
      this.anims.play('walk', true)
    } else {
      this.anims.play('idle', true)
    }
  }
}
