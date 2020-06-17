import axios from 'axios'
import constants from './config';

axios.defaults.withCredentials = true;

async function register (body) {
  try {
    const { data } = await axios.post(`${constants.baseUrl}/v1/auth/register`, body);
    return Promise.resolve(data);
  } catch(err) {
    return Promise.reject(err) 
  }
}

async function getUsers () {
  try {
    const { data } = await axios.get(`${constants.baseUrl}/v1/users`);
    return Promise.resolve(data.results);
  } catch(err) {
    return Promise.reject(err) 
  }
}

async function getUser (userId) {
  try {
    const { data } = await axios.get(`${constants.baseUrl}/v1/users/${userId}`);
    return Promise.resolve(data);
  } catch(err) {
    return Promise.reject(err) 
  }
}

// Using the cookie if it is set
async function getCurrentUser () {
  try {
    const { data } = await axios.get(`${constants.baseUrl}/v1/auth/current`);
    return Promise.resolve(data);
  } catch(err) {
    return Promise.reject(false) 
  }
}

// Using the cookie if it is set
async function updateFirstname({id, firstname}) {
  try {
    const body = {firstname}
    const { data } = await axios.patch(`${constants.baseUrl}/v1/users/${id}`, body);
    return Promise.resolve(data);
  } catch(err) {
    return Promise.reject(err) 
  }
}



export { register, getUsers, getUser, getCurrentUser, updateFirstname }