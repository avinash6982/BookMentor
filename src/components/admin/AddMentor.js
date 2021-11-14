import React, { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { useQueryClient } from "react-query";

import CustomButton from "../../common/buttons/CustomButton";
import DataFetchWrapper from "../../common/wrapper/DataFetchWrapper";

import classes from "./styles.module.css";
import { timeSlotsArr } from "../../common/constants/values";

const AddMentorForm = ({
    state,
    updateState,
}) => {

    const queryClient = useQueryClient()
    const fetchCourses = queryClient.getQueryState("courses")
    const fetchCategories = queryClient.getQueryState("categories")

    return (
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
                    <DataFetchWrapper status={fetchCategories.status}>
                        {
                            fetchCategories.data &&
                            <Form.Select
                                onChange={e => updateState("category", e.target.value)}
                                className={classes.inputField}>
                                <option>Select</option>
                                {
                                    Object.values(fetchCategories.data)
                                        .map(item => <option value={item._id} key={item._id}>{item.name}</option>)
                                }
                            </Form.Select>
                        }
                    </DataFetchWrapper>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Course name :
                </Form.Label>
                <Col sm="8">
                    <DataFetchWrapper status={fetchCourses.status}>
                        {
                            fetchCourses.data &&
                            <Form.Select
                                onChange={e => updateState("course", e.target.value)}
                                className={classes.inputField}>
                                <option>Select</option>
                                {
                                    Object.values(fetchCourses.data)
                                        .map(item => <option value={item._id} key={item._id}>{item.name}</option>)
                                }
                            </Form.Select>
                        }
                    </DataFetchWrapper>
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
                    Start time (hrs) :
                </Form.Label>
                <Col sm="8">
                    <Form.Select
                        onChange={e => updateState("startTime", e.target.value)}
                        className={classes.inputField}>
                        {
                            Object.values(timeSlotsArr)
                                .map(item => <option key={item}>{item}</option>)
                        }
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    End time (hrs) :
                </Form.Label>
                <Col sm="8">
                    <Form.Select
                        onChange={e => updateState("endTime", e.target.value)}
                        className={classes.inputField}>
                        {
                            Object.values(timeSlotsArr)
                                .map(item => <option key={item}>{item}</option>)
                        }
                    </Form.Select>
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
    );
}

const AddMentor = ({
    addMentor,
    show,
    handleClose
}) => {

    const [state, setState] = useState({
        name: "",
        category: "",
        course: "",
        role: "",
        shortDescription: "",
        longDescription: "",
        startTime: "",
        endTime: "",
        pic: ""
    })

    const updateState = (label, value) =>
        setState(previousState => ({
            ...previousState,
            [label]: value

        }))

    const onSubmit = () =>
        addMentor.mutate(state)

    return (
        <Modal show={show} dialogClassName={classes.modalContainer} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Mentor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddMentorForm
                    state={state}
                    updateState={updateState} />
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