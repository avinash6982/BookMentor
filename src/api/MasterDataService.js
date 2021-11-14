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

//TODO: how to pass mentorId
export const getMentorAvailablity = mentorId =>
    axios.get(API_URL + 'api/mentors/availability', { withCredentials: true })

//TODO: where to get userID
export const getBookings = userId =>
    axios.post(API_URL + 'api/booking', null, { params: { userId: userId } })





export const postMentor = data =>
    axios.post(API_URL + 'api/mentors', data, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } })

export const updateMentor = (mentorId, data) =>
    axios.patch(API_URL + `api/mentors/${mentorId}`, data, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } })

//TODO: returns 401, unauthorized
export const deleteMentor = mentorId =>
    axios.post(API_URL + `api/mentors/${mentorId}`, { withCredentials: true })

//TODO: where to get userId
export const postBooking = data =>
    axios.post(API_URL + 'api/booking', data, { withCredentials: true })