import React, { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";
import classes from "./styles.module.css";

const AddMentorForm = ({
    state,
    updateState,
    categories,
    courses
}) =>
    <Form>
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
                Name :
            </Form.Label>
            <Col sm="8">
                <Form.Control
                    value={state.name}
                    onChange={e => updateState("name", e.target.value)}
                    className={classes.inputField}
                    type="text"
                    placeholder="Name" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
                Category :
            </Form.Label>
            <Col sm="8" >
                <Form.Select
                    onChange={e => updateState("category", e.target.value)}
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
                <Form.Select
                    onChange={e => updateState("course", e.target.value)}
                    className={classes.inputField}>
                    <option>Select</option>
                    {
                        Object.values(courses)
                            .map(item => <option value={item._id} key={item._id}>{item.name}</option>)
                    }
                </Form.Select>
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
                Short Description :
            </Form.Label>
            <Col sm="8">
                <Form.Control
                    onChange={e => updateState("shortDescription", e.target.value)}
                    className={classes.inputField}
                    type="text"
                    placeholder="Description" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
                Long Description :
            </Form.Label>
            <Col sm="8">
                <Form.Control
                    onChange={e => updateState("longDescription", e.target.value)}
                    className={classes.inputField}
                    type="text"
                    placeholder="Description" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
                Image :
            </Form.Label>
            <Col sm="8">
                <Form.Control
                    onChange={e => updateState("pic", e.target.files[0])}
                    className={classes.inputField}
                    type="file" />
            </Col>
        </Form.Group>
    </Form>

const AddMentor = ({
    addMentor,
    show,
    handleClose,
    categories,
    courses
}) => {

    const [state, setState] = useState({
        name: "",
        category: "",
        course: "",
        role: "",
        shortDescription: "",
        longDescription: "",
        pic: ""
    })

    const updateState = (label, value) =>
        setState(previousState => ({
            ...previousState,
            [label]: value

        }))

    const onSubmit = () => {

        addMentor(state)
            .then(res => res.status === 200 && handleClose())
            .catch(err => console.log(err.response))
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
                    categories={categories}
                    courses={courses} />
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