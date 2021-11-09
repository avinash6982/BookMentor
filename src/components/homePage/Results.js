import React from "react";
import { Container, Row, } from "react-bootstrap";
import { useQueryClient } from "react-query";

import Profile from "./ProfileCard";

import classes from "./styles.module.css";

const Results = ({
    openBookingMenu
}) => {

    const queryClient = useQueryClient()
    const mentors = queryClient.getQueriesData("mentors")[0][1]

    return (
        <Container className={classes.resultsContainer}>
            <Row>
                {
                    Object.values(mentors)
                        .map(item =>
                            <Profile
                                key={item._id}
                                mentor={item}
                                openBookingMenu={openBookingMenu} />)
                }
            </Row>
        </Container>
    );
}

export default Results