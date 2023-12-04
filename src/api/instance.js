import axios from 'axios'
import {store} from '../store/store'
import Endpoints from './endpoints'
import {getAccessToken} from '../store/actions/actionCreators.js'

export const axiosInstance = axios.create()

const urlsSkipAuth = [Endpoints.AUTH.LOGIN]

axiosInstance.interceptors.request.use(
  async config => {
    if (config.url && urlsSkipAuth.includes(config.url)) return config

    const accessToken = await store.dispatch(getAccessToken())

    if (accessToken) {
      const authorization = `Bearer ${accessToken}`

      config.headers = {
        ...config.headers,
        authorization: authorization
      }
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
