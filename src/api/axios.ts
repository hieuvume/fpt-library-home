import { getAccessToken } from '@/utils/auth'
import Axios, { AxiosError, AxiosResponse } from 'axios'
import { Notify, Report } from 'notiflix'

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
          if (error.response.status === 403) {
            Report.failure('Error', error.response.data.message, 'Ok', () => {
              window.location.href = '/'
            })
            return Promise.reject(error.response.data)
          }
          if (typeof error.response.data.message === 'string' && error.response.status !== 401) {
            Notify.failure(error.response.data.message)
          }
          if (Array.isArray(error.response.data.message)) {
            Notify.failure(error.response.data.message[0].message)
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