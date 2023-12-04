import {combineReducers} from 'redux'
import authReducer from './authReducer'
import {languageReducer} from './languageReducer'
import gameReducer from './gameReducer'

export const rootReducer = combineReducers({
  language: languageReducer,
  auth: authReducer,
  game: gameReducer
})
