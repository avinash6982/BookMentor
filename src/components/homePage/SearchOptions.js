import React from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";

import classes from "./styles.module.css"

const SearchBar = () => {

    return (
        <Form.Group className={classes.inputContainer}>
            <FontAwesomeIcon
                onClick={() => console.log("search")}
                title="search"
                size="30"
                color="#2A4F96" />
            <Form.Control
                className={classes.searchBar}
                type="text"
                placeholder="Search by name, Course" />
        </Form.Group>
    );
}

const DropDown = () => {

    return (
        <Dropdown align="end" className={classes.selectContainer}>
            <Dropdown.Toggle className={classes.select} variant="default" id="dropdown-basic">
                Choose Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

const SearchOptions = () => {

    return (
        <Container className={classes.container}>
            <Row>
                <Col md={5}>
                    <SearchBar />
                </Col>
                <Col md={2}>
                    <div className={classes.text}>
                        OR
                    </div>
                </Col>
                <Col md={5}>
                    <DropDown />
                </Col>
            </Row>
        </Container>
    );
}

export default SearchOptions