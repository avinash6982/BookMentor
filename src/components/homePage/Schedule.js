import React from "react";
import { Modal, Col, Row } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";
import CustomCalendar from "../../common/calendar";

import classes from "./styles.module.css";

const TimeSelector = () => {

    const timeSlots = {
        0: {_id: 1, time: "7AM - 8AM"},
        1: {_id: 2, time: "8AM - 9AM"},
        2: {_id: 3, time: "9AM - 10AM"},
        3: {_id: 4, time: "10AM - 11AM"},
        4: {_id: 5, time: "11AM - 12AM"},
    }

    return (
        <>
            <Row className={classes.timeItem}>Unda</Row>
            <Row className={classes.timeItem}>Unda</Row>
            <Row className={classes.timeItem}>Unda</Row>
            <Row className={classes.timeItem}>Unda</Row>
            <Row className={classes.timeItemActive}>Unda</Row>
        </>
    );
}

const Schedule = ({
    onSubmit,
    handleClose,
    show
}) => {

    return (
        <Modal size="lg" centered show={show} dialogClassName={classes.modalContainer} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Schedule Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6} className={classes.centeredContainer}>
                        <CustomCalendar />
                    </Col>
                    <Col sm={6} className={classes.centeredContainer}>
                        <TimeSelector />
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