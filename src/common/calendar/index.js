import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

import "./styles.css"

const CustomCalendar = ({ date, setDate }) => {

    const [value, onChange] = useState(date || new Date());
    useEffect(() => setDate({ date: value }), [value])

    return (
        <div>
            <Calendar
                calendarType="ISO 8601"
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default CustomCalendar