import React from "react";
import { Modal, Col, Row } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";
import CustomCalendar from "../../common/calendar";

import classes from "./styles.module.css";

const Schedule = ({
    onSubmit,
    handleClose,
    show
}) => {

    return (
        <Modal centered show={show} dialogClassName={classes.modalContainer} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Schedule Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <CustomCalendar />
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