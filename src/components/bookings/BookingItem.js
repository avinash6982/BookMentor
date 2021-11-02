import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { useHistory } from "react-router";

import CustomButton from "../../common/buttons/CustomButton";
import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";

import classes from "./styles.module.css";

const BookingItem = () => {

    const history = useHistory()

    return (
        <Col sm={6}>
            <Card className={classes.profileContainer}>
                <span className={classes.externalLink}>
                    <FontAwesomeIcon
                        title="external-link"
                        size={25}
                        color="#2A4F96"
                        tooltip="open in new tab" />
                </span>
                <Row>
                    <Col md={4}>
                        <Row>
                            <Card.Img className={classes.profileImage} variant="top" src="https://via.placeholder.com/150" />
                        </Row>
                        <Row>
                            <Card.Body>
                                <Card.Title onClick={() => history.push("/mentor?id=22")} className="textLarge">
                                    Rajesh Moorthy
                                </Card.Title>
                                <Card.Text className="textSmall">
                                    Front-end developer: 7 years
                                </Card.Text>
                            </Card.Body>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title className="textMedium">What will you learn</Card.Title>
                            <ul className={classes.listParent}>
                                <li>
                                    <p className="textXSmall">
                                        Full stack basics
                                    </p>
                                </li>
                                <li>
                                    <p className="textXSmall">
                                        50 common questions
                                    </p>
                                </li>
                                <li>
                                    <p className="textXSmall">
                                        Mock interview
                                    </p>
                                </li>
                                <li>
                                    <p className="textXSmall">
                                        Additional materials
                                    </p>
                                </li>
                            </ul>
                            <Card.Title className="textMedium">Booked Slot</Card.Title>
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
        </Col>
    );
}

export default BookingItem