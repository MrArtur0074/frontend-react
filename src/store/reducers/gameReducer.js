import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  stoneGame: {
    finishModal: false,
    score: 0,
    gameData: false,
    answers: false
  }
}

export const gameReducer = createSlice({
  name: 'game',
  initialState,
  reducers: {
    openModal: state => ({
      ...state,
      stoneGame: {
        ...state.stoneGame,
        finishModal: true
      }
    }),
    closeModal: state => ({
      ...state,
      stoneGame: {
        ...state.stoneGame,
        finishModal: false
      }
    }),
    setScore: (state, action) => ({
      ...state,
      stoneGame: {
        ...state.stoneGame,
        score: action.payload.score
      }
    }),
    setData: (state, action) => ({
      ...state,
      stoneGame: {
        ...state.stoneGame,
        gameData: action.payload.data
      }
    }),
    setAnswers: (state, action) => ({
      ...state,
      stoneGame: {
        ...state.stoneGame,
        answers: action.payload
      }
    })
  }
})

export const {openModal, closeModal, setScore, setData, setAnswers} = gameReducer.actions

export default gameReducer.reducer
