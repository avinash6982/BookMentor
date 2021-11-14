export const bookingDataResolver = data => {

    let date = data.date
    date.setHours(data.time)
    date.setMinutes(0)
    date.setSeconds(0)
    return { ...data }
}