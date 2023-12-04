import {Modal, Button} from '@mantine/core'
import {useSelector} from 'react-redux'
import {runUserModal} from '../../../store/actions/actionGame'
import {useNavigate} from 'react-router-dom'
import {newPlayerGame} from '../actions'

export default function WinForm() {
  const opened = useSelector(state => state.game.stoneGame.finishModal)
  const score = useSelector(state => state.game.stoneGame.score)
  const dataGame = useSelector(state => state.game.stoneGame?.gameData)

  let navigate = useNavigate()

  function newGame() {
    if (dataGame?.scene) {
      newPlayerGame(dataGame.scene)
      runUserModal(false)
    }
  }

  return (
    <Modal
      opened={opened}
      onClose={async () => {
        await runUserModal(false)
        navigate('/games')
      }}
      title="Игра окончена!"
    >
      <div>{score}</div>
      <div style={{margin: '40px auto 10px auto', width: '150px'}}>
        <Button onClick={newGame} color="green" size="md">
          Начать заново
        </Button>
      </div>
    </Modal>
  )
}
