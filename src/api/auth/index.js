import {axiosInstance} from '../instance.js'
import Endpoints from '../endpoints'

export const login = params => axiosInstance.post(Endpoints.AUTH.LOGIN, params)

export const getMyProfile = () => axiosInstance.get(Endpoints.AUTH.PROFILE)
