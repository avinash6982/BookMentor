import React, { useState } from "react";
import { Modal, Col, Row } from "react-bootstrap";
import { useQueryClient } from "react-query";

import CustomButton from "../../common/buttons/CustomButton";
import CustomCalendar from "../../common/calendar";
import { getTimeSlots } from "../../services/validators/TimeConverter";

import classes from "./styles.module.css";

const TimeSelector = ({ time, setTime, timeSlots }) => {

    const [active, setActive] = useState(time || 0)
    const onSelectTime = id => {
        setActive(id)
        setTime(timeSlots[id][0])
    }

    return (
        <>
            {
                Object.keys(timeSlots)
                    .map(item =>
                        <Row
                            onClick={() => onSelectTime(item)}
                            key={item}
                            className={item === active.toString() ? classes.timeItemActive : classes.timeItem}>
                            {timeSlots[item][1]}
                        </Row>)
            }
        </>
    );
}

const Schedule = ({
    onSubmit,
    handleClose,
    scheduleMenu
}) => {

    const timeSlots = getTimeSlots(scheduleMenu.mentor.startTime, scheduleMenu.mentor.endTime)
    const [bookingData, setBookingData] = useState({
        userId: "",
        mentorId: "",
        date: new Date(),
        time: timeSlots[0] ? timeSlots[0][0] : ""
    })
    const updateBookingData = data =>
        setBookingData(previousState => ({
            ...previousState,
            ...data
        }))

    return (
        <Modal size="lg" centered show={scheduleMenu.show} dialogClassName={classes.modalContainer} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Schedule Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6} className={classes.centeredContainer}>
                        <CustomCalendar date={bookingData.date} setDate={updateBookingData} />
                    </Col>
                    <Col sm={6} className={classes.centeredContainer}>
                        <TimeSelector time={bookingData.time} setTime={updateBookingData} timeSlots={timeSlots} />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <CustomButton
                    variant="secondary"
                    styles={{ float: "right" }}
                    text="cancel"
                    onClick={handleClose} />
                <CustomButton
                    variant="primary"
                    styles={{ float: "right" }}
                    text="Add"
                    onClick={() => onSubmit()} />
            </Modal.Footer>
        </Modal>
    );
}

export default Schedule