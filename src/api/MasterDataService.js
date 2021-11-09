import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

export const getMentors = () =>
    axios.get(API_URL + 'api/mentors', { withCredentials: true, headers: { responseType: 'arraybuffer' } })

export const getCategories = () =>
    axios.get(API_URL + 'api/categories', { withCredentials: true })

export const getCourses = () =>
    axios.get(API_URL + "api/courses", { withCredentials: true })

export const postMentor = data =>
    axios.post(
        API_URL + 'api/mentors',
        data,
        {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })