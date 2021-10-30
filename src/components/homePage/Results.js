import React from "react";
import { useHistory } from "react-router";
import { Col, Container, Row, Card } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";

import classes from "./styles.module.css";

const profiles = [0, 1, 2, 3, 4, 5, 6]

const Results = () => {

    const history = useHistory()

    const Profile = () =>
        <Col sm={6}>
            <Card className={classes.profileContainer}>
                <Row>
                    <Col md={4}>
                        <Row>
                            <Card.Img className={classes.profileImage} variant="top" src="https://via.placeholder.com/150" />
                        </Row>
                        <Row>
                            <Card.Body>
                                <Card.Title onClick={() => history.push("/mentor?id=22")} className={classes.profileName}>
                                    {/* <Link to="/mentor?id=22"> */}
                                    Rajesh Moorthy
                                    {/* </Link> */}
                                </Card.Title>
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
                                <CustomButton
                                    variant="primary"
                                    text="Book"
                                    onClick={() => console.log("book")}
                                    styles={{ float: "right" }} />
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col >

    return (
        <Container className={classes.resultsContainer}>
            <Row>
                {
                    Object.values(profiles)
                        .map(item => <Profile key={item} />)
                }
                <Profile />
                <Profile />
                <Profile />
            </Row>
        </Container>
    );
}

export default Results