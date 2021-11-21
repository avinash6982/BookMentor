import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";

import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";
import CustomButton from "../../common/buttons/CustomButton";

import classes from "./styles.module.css";

const SearchBar = ({
    setFilterText
}) => {

    const [searchText, setSearchText] = useState("")

    return (
        <Form.Group className={classes.inputContainer}>
            <FontAwesomeIcon
                onClick={() => setFilterText(searchText)}
                title="search"
                size="30"
                color="#2A4F96" />
            <Form.Control
                onKeyPress={e => e.charCode === 13 && setFilterText(searchText)}
                onChange={e => setSearchText(e.target.value.toLowerCase())}
                className={classes.searchBar}
                type="text"
                placeholder="Search by mentor name" />
        </Form.Group>
    );
}

const ResultsHeader = ({
    setFilterText,
    setAddMentorVisible
}) => {

    return (
        <Container className={classes.resultsHeaderContainer} fluid>
            <Container>
                <Row>
                    <Col sm={4} className={classes.contentVerticalCenter}>
                        <p style={{ marginBottom: "0px" }} className="textLarge">
                            Manage mentors
                        </p>
                    </Col>

                    <Col sm={4} className={classes.resultsHeader}>
                        <SearchBar setFilterText={setFilterText} />
                    </Col>

                    <Col sm={4} className={classes.resultsHeader}>
                        <CustomButton
                            variant="default"
                            text="Add"
                            icon="plus"
                            styles={{ float: "right" }}
                            onClick={() => setAddMentorVisible(true)} />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ResultsHeader