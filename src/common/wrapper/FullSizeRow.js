import React from "react";
import { Row } from "react-bootstrap";

import classes from "./styles.module.css";

const FullSizeRow = props => {

    return (
        <div className={classes.heightReducedContainer}>
            <Row className={classes.fullSizeRow}>
                {props.children}
            </Row>
        </div>
    );
}

export default FullSizeRow