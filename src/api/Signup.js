import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

export const registerUser = user =>
    axios.post(API_URL + 'api/auth/register', { ...user })