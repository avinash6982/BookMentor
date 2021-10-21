import React from "react";
import { Row } from "react-bootstrap";

import classes from "./styles.module.css";

export default function FullSizeRow(props) {

    return (
        <Row className={classes.fullSizeRow}>
            {props.children}
        </Row>
    );
}