import axios from 'axios'
import Environment from './Environment'

const getEndpointData = (endpoint: string = '', fields = '', flags = {}) => {
  const {first, skip} = {first: 10, skip: 0, ...flags}
  return axios.get(`${Environment.API_HOST}/endpoints/${endpoint}?fields=${fields}&first=${first}&skip=${skip}`)
}

export default {
  getEndpointData
}
