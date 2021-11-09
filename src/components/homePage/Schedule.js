import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";

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
                <h1>Unda</h1>
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