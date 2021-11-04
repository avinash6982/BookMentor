import React from "react";
import { useHistory } from "react-router";
import { Col, Container, Row, Card } from "react-bootstrap";

import classes from "./styles.module.css";

const profiles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Results = () => {

    const history = useHistory()

    const Profile = () =>
        <Col sm={3}>
            <Card className={classes.profileContainer}>
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
            </Card>
        </Col >

    return (
        <Container>
            <Row>
                {
                    Object.values(profiles)
                        .map(item => <Profile key={item} />)
                }
            </Row>
        </Container>
    );
}

export default Results