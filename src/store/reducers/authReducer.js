import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  authData: {
    accessToken: null,
    isLoading: false,
    error: null
  },
  profileData: {
    profile: null,
    isLoading: false,
    error: null
  }
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: true
      }
    }),
    loginSuccess: (state, action) => ({
      ...state,
      authData: {
        ...state.authData,
        accessToken: action.payload,
        isLoading: false,
        error: null
      }
    }),
    loginFailure: (state, action) => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: false,
        error: action.payload
      }
    }),
    loadProfileStart: state => ({
      ...state,
      profileData: {
        ...state.profileData,
        isLoading: true
      }
    }),
    loadProfileSuccess: (state, action) => ({
      ...state,
      profileData: {
        ...state.profileData,
        profile: action.payload,
        isLoading: false,
        error: null
      }
    }),
    loadProfileFailture: (state, action) => ({
      ...state,
      profileData: {
        ...state.profileData,
        isLoading: false,
        error: action.payload
      }
    }),
    logoutSuccess: () => initialState
  }
})

export const {
  loadProfileStart,
  loadProfileSuccess,
  loadProfileFailture,
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess
} = authReducer.actions

export default authReducer.reducer
