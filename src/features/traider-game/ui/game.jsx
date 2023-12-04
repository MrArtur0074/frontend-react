import React from 'react'
import {config} from '../config.js'
import Phaser from 'phaser'

export function TraiderGame() {
  React.useEffect(() => {
    new Phaser.Game(config)
  }, [])

  return <div id="phaser" />
}
