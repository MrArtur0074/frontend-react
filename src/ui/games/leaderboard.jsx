import {Table, Center, createStyles} from '@mantine/core'
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import Endpoints from '../../api/endpoints'
import {axiosInstance} from '../../api/instance'

const useStyles = createStyles(theme => ({
  table: {
    width: '100%',
    overflow: 'scroll',

    [theme.fn.smallerThan('sm')]: {
      fontSize: '12px !important'
    }
  }
}))

export function LeaderBoard() {
  const [leaderBoard, setLeaderBoard] = useState([])
  const [table, setTable] = useState('')
  const language = useSelector(state => state.language.language.pages.games)

  const {classes} = useStyles()

  useEffect(() => {
    async function loadingData() {
      const response = await axiosInstance.get(Endpoints.LEADER_BOARD)
      setLeaderBoard(response.data)
    }

    loadingData()
  }, [])

  useEffect(() => {
    const data = Object.values(leaderBoard)
    data.sort((a, b) => b.score - a.score)
    const rows = data.map((element, index) => (
      <tr key={element.id}>
        <td>
          <Center>{index + 1}</Center>
        </td>
        <td>{element.firstName + ' ' + element.lastName}</td>
        <td>{element.games[3] ? element.games[3] : 0}</td>
        <td>{element.games[4] ? element.games[4] : 0}</td>
        <td>{element.games[5] ? element.games[5] : 0}</td>
        <td>{element.games[5] ? element.games[6] : 0}</td>
        <td>{element.score ? element.score : 0}</td>
      </tr>
    ))
    setTable(rows)
  }, [leaderBoard])

  return (
    <Table withColumnBorders className={classes.table} striped>
      <thead>
        <tr>
          <th>№</th>
          <th>{language.leaderboard.name}</th>
          <th>{language.leaderboard.game1}</th>
          <th>{language.leaderboard.game2}</th>
          <th>{language.leaderboard.game3}</th>
          <th>{language.leaderboard.game4}</th>
          <th>{language.leaderboard.score}</th>
        </tr>
      </thead>
      <tbody>
        {table ? (
          table
        ) : (
          <tr>
            <td>1</td>
            <td>Пользователь</td>
            <td>Игра 1</td>
            <td>Игра 2</td>
            <td>Игра 3</td>
            <td>Игра 4</td>
            <td>Общее количество очков</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}
