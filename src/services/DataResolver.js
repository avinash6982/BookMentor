export const bookingDataResolver = (data, userId, mentorId) => {

    let date = data.date
    date.setHours(data.time)
    date.setMinutes(0)
    date.setSeconds(0)
    return {
        userId: userId,
        mentorId: mentorId,
        date: date
    }
}