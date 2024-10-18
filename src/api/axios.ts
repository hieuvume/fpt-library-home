import { getAccessToken } from '@/utils/auth'
import Axios, { AxiosError, AxiosResponse } from 'axios'
import { Report } from 'notiflix'

export function setupAxios(axios) {
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config) => {
      const auth = getAccessToken()
      if (auth) {
        config.headers.Authorization = `Bearer ${auth.access_token}`
      }

      return config
    },
    (err) => Promise.reject(err)
  )
  axios.interceptors.response.use(
    function (response: AxiosResponse) {
      if (response && response.data) {
        return Promise.resolve(response.data)
      }
      return Promise.resolve(response)
    },
    function (error: AxiosError<any>) {
      if (error.response && error.response.data) {
        if (error.response.data.message) {
          if (typeof error.response.data.message === 'string') {
            Report.failure('Error', error.response.data.message, 'OK')
          }
          if (Array.isArray(error.response.data.message)) {
            Report.failure('Error', error.response.data.message[0], 'OK')
          }
        }
        if (error.response.data.errors && error.response.data.errors.length > 0) {
          return Promise.reject({
            message: error.response.data.errors[0].msg,
            errors: error.response.data.errors,
          })
        }
        return Promise.reject(error.response.data)
      }
      return Promise.reject(error.response)
    }
  )
}

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

setupAxios(api)

export default api