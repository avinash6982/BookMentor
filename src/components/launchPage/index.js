import React from "react";
import { Col, Row } from "react-bootstrap";

import FullSizeRow from "../../common/wrapper/FullSizeRow";
import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import Signin from "./Signin";

import classes from "./styles.module.css";

export default function LaunchPageComponent({ onSignin }) {

    return (
        <div className={classes.launchPageWrapper}>
            <Row className={classes.launchPageRow}>
                <Col lg={6} className={`${classes.columnCenter} ${classes.columnRightBorder}`}>
                    <TransitionWrapper show={true}>
                        <h1 className={classes.heading}>
                            FastClass
                        </h1>
                    </TransitionWrapper>
                </Col>
                <Col lg={6} className={classes.columnCenter}>
                    <TransitionWrapper show={true}>
                        <Signin onSignin={onSignin} />
                    </TransitionWrapper>
                </Col>
            </Row>
        </div>
    );
}