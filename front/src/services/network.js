import axios from 'axios'
import MyContext from './mycontext'
import { useContext } from 'react';

const { setError } = useContext(MyContext);

const config = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
}

const httpClient = axios.create(config)

const authInterceptor = config => {
  return config
}

const logsInterceptor = config => {
  return config
}

httpClient.interceptors.request.use(authInterceptor)
httpClient.interceptors.request.use(logsInterceptor)

/** Adding the response interceptors */
httpClient.interceptors.response.use(
  response => {
    /** TODO: Add any response interceptors */
    return response.data
  },
  error => {
    /** TODO: Do something with response error */
    if (error.response) {
        setError(error.response)
    }
    return Promise.reject(error)
  }
)


function getUsers () {

}

function getUser () {

}

export { httpClient, getUsers, getUser }