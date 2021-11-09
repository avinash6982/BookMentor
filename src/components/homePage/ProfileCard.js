import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { useHistory } from "react-router";

import CustomButton from "../../common/buttons/CustomButton";

import classes from "./styles.module.css";

const ProfileCard = ({
    mentor,
    openBookingMenu
}) => {

    const history = useHistory()

    return (
        <Col sm={12} md={6}>
            <Card className={classes.profileContainer}>
                <Row>
                    <Col md={4}>
                        <Row className={classes.profileImageContainer}>
                            <Card.Img className={classes.profileImage} variant="top" src={`${process.env.REACT_APP_API_URL}${mentor.pic}`} />
                        </Row>
                        <Row>
                            <Card.Body>
                                <Card.Title onClick={() => history.push(`/mentor?id=${mentor._id}`)} className={classes.profileName}>
                                    {mentor.name}
                                </Card.Title>
                                <Card.Text className={classes.points}>
                                    {mentor.role}
                                </Card.Text>
                                <Card.Text className={classes.points}>
                                    {mentor.category}
                                </Card.Text>
                                <Card.Text className={classes.points}>
                                    {mentor.course}
                                </Card.Text>
                            </Card.Body>
                        </Row>
                    </Col>
                    <Col md={8} style={{ position: "relative" }}>
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
                                {mentor.shortDescription}
                            </Card.Text>
                            <Card.Text className={classes.profileDesc}>
                                {mentor.longDescription}
                            </Card.Text>
                            <div className={classes.buttonContainer}>
                                <CustomButton
                                    variant="primary"
                                    text="Book"
                                    onClick={() => openBookingMenu()}
                                    styles={{ float: "right" }} />
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col >
    );
}

export default ProfileCard