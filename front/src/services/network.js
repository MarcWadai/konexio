import axios from 'axios'
// import { useContext } from 'react';

// const { setError } = useContext(MyContext);

const config = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
}


async function register (body) {
  try {
    const { data } = await axios.post(`/v1/auth/register`, body);
    console.log('data', data);
  } catch(err) {
    console.error(err) 
  }
}

function getUsers () {

}

function getUser (userId) {

}

export { register, getUsers, getUser }