import axios from 'axios'
import { getToken } from './token'
import { history } from './history'

//instantiate
const http = axios.create({
    // login url 
  baseURL: 'http://localhost:50000',
  timeout: 5000
})
// req handle
http.interceptors.request.use((config)=> {

  const token = getToken()
  if (token) {
    config.headers.Authorization= token;
    
  }
    return config
  }, (error)=> {
   
    return Promise.reject(error)
})

//res is to the first req the backend recieve
http.interceptors.response.use((response)=> {

    return response
  }, (error)=> {
    if(error.response.status === 401){
      console.log('error.response.status', error.response.status)
      history.push('/')
      
    }

    return Promise.reject(error)
})

export { http }