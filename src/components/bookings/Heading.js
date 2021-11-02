import React from "react";
import { Container } from "react-bootstrap";

import classes from "./styles.module.css";

const Heading = () =>
    <Container className={classes.headingContainer}>
        <p className={`textLarge ${classes.headingText}`}>
            Bookings
        </p>
    </Container>

export default Heading