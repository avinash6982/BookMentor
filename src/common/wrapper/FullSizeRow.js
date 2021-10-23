import React from "react";
import { Container, Row } from "react-bootstrap";

import classes from "./styles.module.css";

export default function FullSizeRow(props) {

    return (
        <div className={classes.heightReducedContainer}>
            <Row className={classes.fullSizeRow}>
                {props.children}
            </Row>
        </div>
    );
}