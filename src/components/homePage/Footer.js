import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import classes from "./styles.module.css";

const Footer = () => {

    return (
        <Container className={classes.footerContainer} fluid>
            <Container>
                <Row>
                    <Col sm={4}>
                        <p className={classes.footerLogo}>FastClass</p>
                    </Col>
                    <Col sm={4}>
                        <p> Contact us </p>
                        <p> Terms </p>
                    </Col>
                    <Col sm={4}>
                        <p> Opportunities </p>
                        <p> Pricing </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer