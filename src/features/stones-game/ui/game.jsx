import React from 'react'
import {config} from '../config.js'
import Phaser from 'phaser'
// import {useSelector} from 'react-redux'
import WinForm from './win-form.jsx'

export function StonesGame() {
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
