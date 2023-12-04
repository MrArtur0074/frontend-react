import Endpoints from '../api/endpoints'
import {axiosInstance} from '../api/instance'

export const gameScore = async (textScore, id) => {
  const response = await axiosInstance.post(`${Endpoints.PATH}/scoregame/`, {gameId: id})
  textScore.setText('Лучший счет: ' + response.data.score)
}
