import React from "react";
import { Container, Row } from "react-bootstrap";

import Heading from "./Heading";
import BookingItem from "./BookingItem";

import classes from "./styles.module.css";

const BookingsComponent = () => {

    return (
        <Container className={classes.container}>
            <Row>
                <Heading />
                <BookingItem />
                <BookingItem />
            </Row>
        </Container>
    );
}

export default BookingsComponent