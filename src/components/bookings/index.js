import React from "react";
import { Container, Row } from "react-bootstrap";

import classes from "./styles.module.css";

const BookingsComponent = () => {

    return (
        <Container className={classes.container}>
            <Row>
                <p className="textLarge">
                    Bookings
                </p>
            </Row>
        </Container>
    );
}

export default BookingsComponent