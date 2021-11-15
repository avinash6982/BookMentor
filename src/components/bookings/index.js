import React from "react";
import { Container, Row } from "react-bootstrap";

import Heading from "./Heading";
import BookingItem from "./BookingItem";

import classes from "./styles.module.css";
import DataFetchWrapper from "../../common/wrapper/DataFetchWrapper";

const BookingsComponent = ({ status }) => {

    return (
        <Container className={classes.container}>
            <Row>
                <Heading />
                <DataFetchWrapper status={status}>
                    <BookingItem />
                </DataFetchWrapper>
            </Row>
        </Container>
    );
}

export default BookingsComponent