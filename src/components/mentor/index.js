import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router";

import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";
import ContentsList from "./ContentsList";
import CustomButton from "../../common/buttons/CustomButton";

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
                        <Row className={classes.listsRow}>
                            <ContentsList />
                            <ContentsList />
                            <ContentsList />
                        </Row>
                        <Row className={classes.description}>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </Row>
                        <Row className={classes.buttonRow}>
                            <CustomButton
                                variant="primary"
                                styles={{ position: "absolute", right: "3rem", width: "10rem" }}
                                text="Schedule" />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default MentorComponent