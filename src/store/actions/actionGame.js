import {openModal, closeModal, setScore, setData, setAnswers} from '../reducers/gameReducer'
import {store} from '../store'

export const userModal = modal => dispatch => {
  try {
    switch (modal) {
      case false:
        dispatch(closeModal())
        break
      default:
        dispatch(openModal())
        break
    }
  } catch (e) {
    console.error(e)
  }
}

export const stoneScore = score => async dispatch => {
  try {
    await dispatch(setScore(score))
    dispatch(openModal())
  } catch (e) {
    console.error(e)
  }
}

export const stoneData = data => async dispatch => {
  try {
    await dispatch(setData(data))
  } catch (e) {
    console.error(e)
  }
}

const stoneAnswers = answers => async dispatch => {
  try {
    await dispatch(setAnswers(answers))
  } catch (e) {
    console.error(e)
  }
}

export const runStoneScore = score => {
  store.dispatch(stoneScore(score))
}

export const runUserModal = modal => {
  store.dispatch(userModal(modal))
}

export const runStoneData = data => {
  store.dispatch(stoneData(data))
}

export const runStoneAnswers = answers => {
  store.dispatch(stoneAnswers(answers))
}
