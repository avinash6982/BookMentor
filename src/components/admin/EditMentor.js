import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { useQueryClient } from "react-query";

import CustomButton from "../../common/buttons/CustomButton";
import DataFetchWrapper from "../../common/wrapper/DataFetchWrapper";

import classes from "./styles.module.css";
import { timeSlotsArr } from "../../common/constants/values";

const EditMentorForm = ({ data, handleClose, onSubmit }) => {

    const [state, setState] = useState({ ...data })
    const updateState = (label, value) =>
        setState(previousState => ({
            ...previousState,
            [label]: value
        }))

    const queryClient = useQueryClient()
    const fetchCourses = queryClient.getQueryState("courses")
    const fetchCategories = queryClient.getQueryState("categories")

    return (<>
        <Modal.Body>
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
                                    value={state.category}
                                    onChange={e => updateState("category", e.target.value)}
                                    className={classes.inputField}>
                                    <option disabled>Select</option>
                                    {
                                        Object.values(fetchCategories.data)
                                            .map(item =>
                                                <option
                                                    value={item._id}
                                                    key={item._id}>
                                                    {item.name}
                                                </option>)
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
                                    value={state.course}
                                    onChange={e => updateState("course", e.target.value)}
                                    className={classes.inputField}>
                                    <option disabled>Select</option>
                                    {
                                        Object.values(fetchCourses.data)
                                            .map(item =>
                                                <option
                                                    value={item._id}
                                                    key={item._id}>
                                                    {item.name}
                                                </option>)
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
                            value={state.shortDescription}
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
                            value={state.longDescription}
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
                            value={state.startTime}
                            onChange={e => updateState("startTime", e.target.value)}
                            className={classes.inputField}>
                            {
                                Object.values(timeSlotsArr)
                                    .map(item =>
                                        <option
                                            key={item}>
                                            {item}
                                        </option>)
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
                            value={state.endTime}
                            onChange={e => updateState("endTime", e.target.value)}
                            className={classes.inputField}>
                            {
                                Object.values(timeSlotsArr)
                                    .map(item =>
                                        <option
                                            key={item}>
                                            {item}
                                        </option>)
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
                            accept=".jpg, .png"
                            title={state.pic && state.pic}
                            onChange={e => updateState("pic", e.target.files[0])}
                            className={classes.inputField}
                            type="file" />
                        {/* {
                            state.pic &&
                            <Form.Label>
                                Current file: {state.pic}
                            </Form.Label>
                        } */}
                    </Col>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <CustomButton
                variant="secondary"
                styles={{ float: "right" }}
                text="Cancel"
                onClick={handleClose} />
            <CustomButton
                variant="primary"
                styles={{ float: "right" }}
                text="Save"
                onClick={() => onSubmit(state)} />
        </Modal.Footer>
    </>);
}

const EditMentor = ({
    data,
    updateMentor,
    show,
    handleClose
}) => {

    return (
        <Modal show={show} dialogClassName={classes.modalContainer} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit mentor info</Modal.Title>
            </Modal.Header>
            <EditMentorForm
                data={data}
                handleClose={handleClose}
                onSubmit={updateMentor} />
        </Modal>
    );
}

export default EditMentor