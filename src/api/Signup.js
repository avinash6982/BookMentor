import axios from 'axios';

import { API_URL } from '../common/constants/ApiUrl';

export const registerUser = user =>
    axios.post(API_URL, { ...user })