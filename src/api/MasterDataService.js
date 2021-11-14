import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

export const getMentors = () =>
    axios.get(API_URL + 'api/mentors', { withCredentials: true, headers: { responseType: 'arraybuffer' } })
        .then(res => res.data.data)

export const getCategories = () =>
    axios.get(API_URL + 'api/categories', { withCredentials: true })
        .then(res => res.data.data)

export const getCourses = () =>
    axios.get(API_URL + "api/courses", { withCredentials: true })
        .then(res => res.data.data)

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

export const deleteMentor = mentorId =>
    axios.post(API_URL + `api/mentors/${mentorId}`, { withCredentials: true })

export const postBooking = data =>
    axios.post(API_URL + 'api/booking', data, { withCredentials: true })

export const getMentorAvailablity = mentorId =>
    axios.get(API_URL, { withCredentials: true })