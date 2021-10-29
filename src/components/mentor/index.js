import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router";

import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";
import ContentsList from "./ContentsList";

import classes from "./styles.module.css";

const MentorComponent = () => {

    const history = useHistory()

    return (
        <Container className={classes.container}>
            <span className={classes.backButton} onClick={() => history.goBack()}>
                <FontAwesomeIcon title="arrow-left" color="#D98C00" size={30} />
            </span>
            <Container className={classes.profileContainer}>
                <Row className={classes.profileContentsRow}>
                    <Col md={3}>
                        <Image style={{ width: "100%", height: "auto" }} src="https://via.placeholder.com/150" rounded />
                        <Container className={classes.introContainer}>
                            <p className="textLarge">Roy Mathew</p>
                            <p className="textMedium">Front End Developer: 7 years</p>
                            <p className="textMedium">Avg Mentor Rating: 3/5 </p>
                            <p className="textSmall">Total classes: 400+</p>
                        </Container>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <ContentsList />
                            <ContentsList />
                            <ContentsList />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    ButtonRow
                </Row>
            </Container>
        </Container>
    );
}

export default MentorComponent