import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useQuery } from "react-query";
import { getCategories } from "../../api/MasterDataService";

import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";
import DataFetchWrapper from "../../common/wrapper/DataFetchWrapper";

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

    const { data, status } = useQuery("categories", getCategories)

    return (
        <Container className={classes.selectContainer}>
            <DataFetchWrapper status={status}>
                <Form.Select onChange={e => console.log(e.target.value)} className={classes.select}>
                    {
                        data && Object.values(data)
                            .map(item => <option key={item._id}>{item.name}</option>)
                    }

                </Form.Select>
            </DataFetchWrapper>
        </Container>
    );
}

const SearchOptions = () => {

    return (
        <Container className={classes.searchOptionsContainer}>
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