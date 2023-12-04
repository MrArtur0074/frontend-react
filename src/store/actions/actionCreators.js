import {
  loginStart,
  loginSuccess,
  loginFailure,
  loadProfileStart,
  loadProfileSuccess,
  logoutSuccess
} from '../reducers/authReducer'
import api from '../../api/index.js'
import {store} from '../store'
import localForage from 'localforage'
import {isTokenExpired} from '../../utils/jwt'
import {history} from '../../utils/history'

export const loginUser = data => async dispatch => {
  try {
    dispatch(loginStart())
    const res = await api.auth.login(data)
    dispatch(loginSuccess(res.data.jwt))
    await localForage.setItem('jwt', res.data.jwt)
    console.log(await localForage.getItem('jwt'))
    dispatch(getProfile())
  } catch (e) {
    dispatch(loginFailure(e.message))
  }
}

export const getProfile = () => async dispatch => {
  try {
    dispatch(loadProfileStart())
    const res = await api.auth.getMyProfile()
    dispatch(loadProfileSuccess(res.data))
  } catch (e) {
    console.log(e)

    dispatch(loadProfileSuccess(e.message))
  }
}

// eslint-disable-next-line no-unused-vars
export const getAccessToken = () => dispatch => {
  try {
    const accessToken = store.getState().auth.authData.accessToken

    return accessToken
  } catch (e) {
    console.error(e)

    return null
  }
}

// eslint-disable-next-line no-unused-vars
export const setToken = () => async dispatch => {
  try {
    const accessToken = await localForage.getItem('jwt')

    if (!isTokenExpired(accessToken)) {
      dispatch(loginSuccess(accessToken))
      dispatch(getProfile())
    } else await localForage.setItem('jwt', '')
  } catch (e) {
    console.error(e)
  }
}

// eslint-disable-next-line no-unused-vars
export const logoutUser = () => async dispatch => {
  try {
    await localForage.setItem('jwt', '')
    dispatch(logoutSuccess())
    history.push('/')
  } catch (e) {
    console.error(e)
  }
}
