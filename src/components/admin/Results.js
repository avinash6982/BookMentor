import React from "react";
import { useHistory } from "react-router";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useQueryClient } from "react-query";

import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";
import DataFetchWrapper from "../../common/wrapper/DataFetchWrapper";

import classes from "./styles.module.css";

const Profile = ({ mentor, removeMentor }) => {

    const history = useHistory()

    return (
        <Col sm={12} md={6} lg={3}>
            <Card className={classes.profileContainer}>
                <span className={classes.cardActions}>
                    <FontAwesomeIcon
                        onClick={() => console.log("edit profile")}
                        tooltip="edit"
                        paddingRight="1rem"
                        title="pencil" />
                    <FontAwesomeIcon
                        onClick={() => removeMentor(mentor._id)}
                        tooltip="delete"
                        title="trash" />
                </span>
                <Row className={classes.ProfileImageContainer}>
                    <Card.Img className={classes.profileImage} variant="top" src={`${process.env.REACT_APP_API_URL}${mentor.pic}`} />
                </Row>
                <Row>
                    <Card.Body>
                        <Card.Title onClick={() => history.push("/mentor?id=22")} className={classes.profileName}>
                            {mentor.name}
                        </Card.Title>
                        <Card.Text className={classes.points}>
                            {mentor.category}
                        </Card.Text>
                        <Card.Text className={classes.points}>
                            {mentor.course}
                        </Card.Text>
                        <Card.Text className={classes.points}>
                            {mentor.role}
                        </Card.Text>
                        <Card.Text className={classes.points}>
                            {mentor.shortDescription}
                        </Card.Text>
                        <Card.Text className={classes.points}>
                            {mentor.longDescription}
                        </Card.Text>
                    </Card.Body>
                </Row>
            </Card>
        </Col >
    );
}

const Results = ({ removeMentor }) => {

    const queryClient = useQueryClient()
    let queryResult = queryClient.getQueryState()

    return (
        <Container>
            <DataFetchWrapper status={queryResult.status}>
                <Row>
                    {
                        queryResult.data &&
                        Object.values(queryResult.data)
                            .map(item =>
                                <Profile key={item._id} mentor={item} removeMentor={removeMentor} />)
                    }
                </Row>
            </DataFetchWrapper>
        </Container>
    );
}

export default Results