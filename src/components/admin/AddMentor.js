import React, { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";
import classes from "./styles.module.css";

const AddMentorForm = () => {

    const [state, setState] = useState({
        mentorName: "",
        image: "",
        role: "",
        courseType: "",
        courseName: "",
        mentorId: 0,
        rating: 0,
        numberOfClasses: 0,
        descriptionShort: "",
        descriptionLong: ""
    })

    const updateState = (label, value) =>
        setState(previousState => ({
            ...previousState,
            [label]: value

        }))

    console.log(state)

    return (
        <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Name :
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        onChange={e => updateState("mentorName", e.target.value)}
                        className={classes.inputField}
                        type="text"
                        placeholder="Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Image :
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        onChange={e => updateState("image", e.target.value)}
                        className={classes.inputField}
                        type="file"
                        placeholder="Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Role :
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        onChange={e => updateState("role", e.target.value)}
                        className={classes.inputField}
                        type="text"
                        placeholder="Role" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Course type :
                </Form.Label>
                <Col sm="8" >
                    <Form.Control
                        onChange={e => updateState("courseType", e.target.value)}
                        className={classes.inputField}
                        type="text"
                        placeholder="Course type" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Course name :
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        onChange={e => updateState("courseName", e.target.value)}
                        className={classes.inputField}
                        type="text"
                        placeholder="Course name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Mentor id :
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        onChange={e => updateState("rating", e.target.value)}
                        className={classes.inputField}
                        type="text"
                        placeholder="Mentor id" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Rating :
                </Form.Label>
                <Col sm="8">
                    <Form.Range
                        min="0"
                        max="5"
                        step="1"
                        onChange={e => updateState("numberOfClasses", e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Number of classes :
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        onChange={e => updateState("numberOfClasses", e.target.value)}
                        className={classes.inputField}
                        type="number"
                        placeholder="Name of classes" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Intro :
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        onChange={e => updateState("descriptionShort", e.target.value)}
                        className={classes.inputField}
                        type="text"
                        placeholder="Description" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Descriptions :
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        onChange={e => updateState("descriptionLong", e.target.value)}
                        className={classes.inputField}
                        type="text"
                        placeholder="Description" />
                </Col>
            </Form.Group>
        </Form >
    );
}

const AddMentor = ({
    show,
    handleClose
}) =>
    <Modal show={show} dialogClassName={classes.modalContainer} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Mentor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddMentorForm />
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
                onClick={handleClose} />
        </Modal.Footer>
    </Modal>

export default AddMentor