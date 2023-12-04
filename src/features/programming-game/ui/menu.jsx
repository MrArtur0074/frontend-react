import React from 'react'
import './menu.css'
import arrow from '../../../assets/programming-game/arrow.png'

export default function MenuGame(props) {
  const [activeMenu, setActiveMenu] = React.useState('left')
  const [moves, dispatch] = props.move

  const viewMoves = moves.move.map((element, index) => {
    console.log(defineClass(element))
    return (
      <div key={index} className={defineClass(element)}>
        <img
          style={{cursor: 'pointer'}}
          src={arrow}
          onClick={() => dispatch({type: 'removeMove', value: index, menu: 'left'})}
        />
      </div>
    )
  })

  const viewFunctions = moves.function.map((element, index) => {
    console.log(defineClass(element))
    return (
      <div key={index} className={defineClass(element)} data-index={index}>
        <img
          style={{cursor: 'pointer'}}
          src={arrow}
          onClick={() => dispatch({type: 'removeMove', value: index, menu: 'right'})}
        />
      </div>
    )
  })

  function defineClass(element) {
    switch (element) {
      case 'up':
        return 'move-up'
      case 'right':
        return 'move-right'
      case 'down':
        return 'move-down'
      case 'left':
        return 'move-left'
      default:
        return 'move-up'
    }
  }

  return (
    <div>
      <div className="moves-block">
        <div className="move-up">
          <img src={arrow} onClick={() => dispatch({type: 'addMove', value: 'up', menu: activeMenu})} />
        </div>
        <div className="move-right">
          <img src={arrow} onClick={() => dispatch({type: 'addMove', value: 'right', menu: activeMenu})} />
        </div>
        <div className="move-down">
          <img src={arrow} onClick={() => dispatch({type: 'addMove', value: 'down', menu: activeMenu})} />
        </div>
        <div className="move-left">
          <img src={arrow} onClick={() => dispatch({type: 'addMove', value: 'left', menu: activeMenu})} />
        </div>
      </div>
      <div className="menu-game">
        <div
          className={activeMenu == 'left' ? 'move leftMenu active' : 'move leftMenu'}
          onClick={() => setActiveMenu('left')}
        >
          <div className="title">Действия: </div>
          <div className="field">{viewMoves}</div>
        </div>
        <div
          className={activeMenu == 'right' ? 'move rightMenu active' : 'move rightMenu'}
          onClick={() => setActiveMenu('right')}
        >
          <div className="title">Функции: </div>
          <div className="field">{viewFunctions}</div>
        </div>
      </div>
    </div>
  )
}
