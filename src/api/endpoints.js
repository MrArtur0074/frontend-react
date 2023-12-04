const PATH = 'http://localhost:1337/api'

const Endpoints = {
  PATH: PATH,
  AUTH: {
    LOGIN: `${PATH}/auth/local`,
    REFRESH: `${PATH}/refresh`,
    LOGOUT: `${PATH}/logout`,
    PROFILE: `${PATH}/users/me`,
    REGISTER: `${PATH}/auth/local/register`
  },
  GAME_STONE: {
    GENERATE: `${PATH}/scoregame/3`,
    UPDATE: `${PATH}/scoregame/3`
  },
  GAME_SYSTEM_NUMBER: {
    GENERATE: `${PATH}/scoregame/4`,
    UPDATE: `${PATH}/scoregame/4`
  },
  LEADER_BOARD: `${PATH}/scoregame`
}

export default Endpoints
