import React from "react";
import { Col } from "react-bootstrap";

import FullSizeRow from "../../common/wrapper/FullSizeRow";
import ContentWrapper from "../../common/wrapper/ContentWrapper";
import Signin from "./Signin";

import classes from "./styles.module.css";

export default function LaunchPageComponent({ onSignin }) {

    return (
        <FullSizeRow>
            <Col lg={6} className={`${classes.columnCenter} ${classes.columnRightBorder}`}>
                <ContentWrapper show={true}>
                    <h1 className={classes.heading}>
                        FastClass
                    </h1>
                </ContentWrapper>
            </Col>
            <Col lg={6} className={classes.columnCenter}>
                <ContentWrapper show={true}>
                    <Signin onSignin={onSignin} />
                </ContentWrapper>
            </Col>
        </FullSizeRow>
    );
}