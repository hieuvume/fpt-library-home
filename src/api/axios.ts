import { getAccessToken } from '@/utils/auth'
import Axios from 'axios'

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
    function (response) {
      if (response && response.data) {
        return response.data
      }
      return response
    },
    function (error) {
      if (error.response && error.response.data) {
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