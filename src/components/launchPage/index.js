import React from "react";
import { Col, Row } from "react-bootstrap";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import Signin from "./Signin";
import Signup from "./Signup";

import classes from "./styles.module.css";

const LaunchPageComponent = ({
    page,
    setPage,
    onSignin,
    onSignup
}) => {

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
                        {
                            page === "signin" ?
                                <Signin onSignin={onSignin} setPage={setPage} /> :
                                <Signup onSignup={onSignup} setPage={setPage} />
                        }
                    </TransitionWrapper>
                </Col>
            </Row>
        </div>
    );
}

export default LaunchPageComponent