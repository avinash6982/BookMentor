import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import CustomButton from "../../common/buttons/CustomButton";

import classes from "./styles.module.css";

const ResultsHeader = () => {

    return (
        <Container className={classes.container} fluid>
            <Container>
                <Row>
                    <Col className={classes.contentVerticalCenter}>
                        <p className="textLarge">
                            Book Mentors and Rapid Learn
                        </p>
                    </Col>
                    <Col>
                        <CustomButton
                            variant="default"
                            text="Filter"
                            icon="filter"
                            styles={{float: "right"}}
                            onClick={() => console.log("fitler button")}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ResultsHeader