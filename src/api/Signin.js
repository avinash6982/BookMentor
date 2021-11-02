import axios from 'axios';

import { API_URL } from '../common/constants/ApiUrl';

export const signin = user =>
    axios.post(API_URL + 'api/auth/login', { ...user })