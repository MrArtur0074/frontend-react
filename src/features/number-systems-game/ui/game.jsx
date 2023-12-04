import React from 'react'
import {config} from '../config.js'
import Phaser from 'phaser'
import WinForm from './win-form.jsx'

export function NumberSystemsGame() {
  React.useEffect(() => {
    new Phaser.Game(config)
  }, [])

  return (
    <div className="gameContent">
      <div id="phaser" />
      <WinForm />
    </div>
  )
}
