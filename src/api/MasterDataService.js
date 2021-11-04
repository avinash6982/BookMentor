import axios from 'axios';

import { API_URL } from '../common/constants/ApiUrl';

export const mentors = () =>
    axios.get(API_URL + 'api/mentors', { withCredentials: true })