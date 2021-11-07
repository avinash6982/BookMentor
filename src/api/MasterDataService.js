import axios from 'axios';

import { API_URL } from '../common/constants/ApiUrl';

export const getMentors = () =>
    axios.get(API_URL + 'api/mentors', { withCredentials: true })

export const getCategories = () =>
    axios.get(API_URL + 'api/categories', { withCredentials: true })