import React, { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";
import classes from "./styles.module.css";

const AddMentorForm = ({
    state,
    updateState,
    addDescription,
    categories
}) =>
    <Form>
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
                Name :
            </Form.Label>
            <Col sm="8">
                <Form.Control
                    value={state.mentorName}
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
                    value={state.role}
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
                <Form.Select
                    onChange={e => updateState("courseType", e.target.value)}
                    className={classes.inputField}>
                    <option>Select</option>
                    {
                        Object.values(categories)
                            .map(item => <option value={item._id} key={item._id}>{item.name}</option>)
                    }
                </Form.Select>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
                Course name :
            </Form.Label>
            <Col sm="8">
                <Form.Control
                    value={state.courseName}
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
                    onChange={e => updateState("mentorId", e.target.value)}
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
                    defaultValue="0"
                    min="0"
                    max="5"
                    step="1"
                    onChange={e => updateState("rating", e.target.value)} />
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
                    placeholder="Number of classes" />
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
                    onChange={e => addDescription(e.target.value)}
                    className={classes.inputField}
                    type="text"
                    placeholder="Description" />
            </Col>
        </Form.Group>
    </Form>

const AddMentor = ({
    addUser,
    show,
    handleClose,
    categories
}) => {

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
        descriptionLong: []
    })

    const updateState = (label, value) =>
        setState(previousState => ({
            ...previousState,
            [label]: value

        }))

    const addDescription = value =>
        setState(previousState => ({
            ...previousState,
            descriptionLong: [value]
        }))

    const onSubmit = () => {

        addUser(state)
            // .then(res => console.log(res))
            // .catch(err => console.log(err))
        handleClose()
    }

    return (
        <Modal show={show} dialogClassName={classes.modalContainer} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Mentor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddMentorForm
                    state={state}
                    updateState={updateState}
                    addDescription={addDescription}
                    categories={categories} />
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

export default AddMentor