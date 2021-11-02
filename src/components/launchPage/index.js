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
    onSignup,
    errMessages
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
                                <Signin
                                    onSignin={onSignin}
                                    setPage={setPage}
                                    signinErr={errMessages.showSigninError} /> :
                                <Signup
                                    onSignup={onSignup}
                                    setPage={setPage}
                                    signupErr={errMessages.showSignupError} />
                        }
                    </TransitionWrapper>
                </Col>
            </Row>
        </div>
    );
}

export default LaunchPageComponent