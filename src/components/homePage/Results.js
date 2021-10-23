import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

import classes from "./styles.module.css";

const profiles = [0, 1, 2, 3, 4, 5, 6]

const Profile = () =>
    <Col md={6} className={classes.column}>
        <Card className={classes.profileContainer}>
            <Row>
                <Col md={4}>
                    <Row>
                        <Card.Img className={classes.profileImage} variant="top" src="https://via.placeholder.com/150" />
                    </Row>
                    <Row>
                        <Card.Body>
                            <Card.Title className={classes.profileName}>Rajesh Moorthy</Card.Title>
                            <Card.Text className={classes.points}>
                                Front-end developer: 7 years
                            </Card.Text>
                            <Card.Text className={classes.points}>
                                Avg Mentor Rating: 3/5
                            </Card.Text>
                        </Card.Body>
                    </Row>
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title className={classes.profileObjectives}>What will you learn</Card.Title>
                        <ul className={classes.listParent}>
                            <li>
                                <p className={classes.points}>
                                    Full stack basics
                                </p>
                            </li>
                            <li>
                                <p className={classes.points}>
                                    50 common questions
                                </p>
                            </li>
                            <li>
                                <p className={classes.points}>
                                    Mock interview
                                </p>
                            </li>
                            <li>
                                <p className={classes.points}>
                                    Additional materials
                                </p>
                            </li>
                        </ul>
                        <Card.Text className={classes.profileDesc}>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                        <div className={classes.buttonContainer}>
                            <Button className={classes.profileAction} variant="primary">Book</Button>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </Col>

const Results = () => {

    return (
        <Container fluid className={classes.container}>
            <Row>
                {
                    Object.values(profiles)
                        .map(item => <Profile />)
                }
            </Row>
        </Container>
    );
}

export default Results