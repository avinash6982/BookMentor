import axios from 'axios';

import { API_URL } from '../common/constants/ApiUrl';

export const signin = user =>
    axios.post(API_URL + 'api/auth/login', user)
        .then(res => {
            
            axios.defaults.xsrfHeaderName = res.config.xsrfHeaderName
            axios.defaults.xsrfCookieName = res.config.xsrfCookieName
            return res
        })
        .catch(err => err)