import React from "react";
import { Col } from "react-bootstrap";

import FullSizeRow from "../../common/wrapper/FullSizeRow";
import Fade from "../../common/wrapper/Fade";
import Signin from "./Signin";

import classes from "./styles.module.css";

export default function LaunchPageComponent() {

    return (
        <FullSizeRow>
            <Col lg={6} className={classes.columnCenter}>
                <Fade show={true}>
                    <h1 className={classes.heading}>
                        FastClass
                    </h1>
                </Fade>
            </Col>
            <Col lg={6} className={classes.columnCenter}>
                <Fade show={true}>
                    <Signin />
                </Fade>
            </Col>
        </FullSizeRow>
    );
}