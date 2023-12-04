import React from 'react'
import {config} from '../config.js'
import Phaser from 'phaser'
import MenuGame from './menu'

export function ProgrammingGame() {
  const [moves, dispatch] = React.useReducer(reducer, {
    move: [],
    function: []
  })

  const games = {
    width: '50%'
  }

  const containerGame = {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '100%',
    width: '940px'
  }

  function reducer(state, action) {
    let array = state
    switch (action.type) {
      case 'addMove':
        switch (action.menu) {
          case 'left':
            return {
              ...state,
              move: [...state.move, action.value]
            }
          case 'right':
            return {
              ...state,
              function: [...state.function, action.value]
            }
          default:
            return state
        }
      case 'removeMove':
        switch (action.menu) {
          case 'left':
            array.move.splice(action.value, 1)
            return {
              ...array
            }
          case 'right':
            array.function.splice(action.value, 1)
            return {
              ...array
            }
          default:
            return state
        }
      default:
        return state
    }
  }

  React.useEffect(() => {
    new Phaser.Game(config)
  }, [])

  return (
    <div style={containerGame}>
      <div style={games} id="phaser" />
      <div style={games}>
        <MenuGame move={[moves, dispatch]} />
      </div>
    </div>
  )
}
