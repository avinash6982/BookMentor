import React from "react";
import { Col } from "react-bootstrap";

import FullSizeRow from "../../common/wrapper/FullSizeRow";
import Signin from "./Signin";

import classes from "./styles.module.css";

export default function LaunchPageComponent() {

    return (
        <FullSizeRow>
            <Col lg={6} className={classes.columnCenter}>
                <h1 className={classes.heading}>
                    FastClass
                </h1>
            </Col>
            <Col lg={6} className={classes.columnCenter}>
                <Signin />
            </Col>
        </FullSizeRow>
    );
}