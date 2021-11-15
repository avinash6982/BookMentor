import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

export const getUser = async () =>
    await axios.get(API_URL + 'api/user', { withCredentials: true })
        .then(res => res.data)

export const getMentors = async () =>
    await axios.get(API_URL + 'api/mentors', { withCredentials: true, headers: { responseType: 'arraybuffer' } })
        .then(res => res.data.data)

export const getCategories = async () =>
    await axios.get(API_URL + 'api/categories', { withCredentials: true })
        .then(res => res.data.data)

export const getCourses = async () =>
    await axios.get(API_URL + "api/courses", { withCredentials: true })
        .then(res => res.data.data)

//TODO: how to pass mentorId
export const getMentorAvailablity = async mentorId =>
    await axios.get(API_URL + 'api/mentors/availability', { withCredentials: true })

//TODO: params not working, returns 400
export const getBookings = async userId =>
    await axios.post(API_URL + `api/bookings`, null, { params: { userId: userId } })





export const postMentor = async data =>
    await axios.post(API_URL + 'api/mentors', data, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } })

export const updateMentor = async (mentorId, data) =>
    await axios.patch(API_URL + `api/mentors/${mentorId}`, data, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } })

//TODO: returns 401, unauthorized
export const deleteMentor = async mentorId =>
    await axios.post(API_URL + `api/mentors/${mentorId}`, { withCredentials: true })

export const postBooking = async data =>
    await axios.post(API_URL + 'api/bookings', data, { withCredentials: true })