import React from "react";
import { Col } from "react-bootstrap";

import classes from "./styles.module.css";

const ContentsList = () =>
    <Col sm={4} className={classes.listContainer}>
        <p className={`textMedium ${classes.headingItems}`}>What will you learn</p>
        <ul className={classes.listParent}>
            <li>
                <p className="textSmall">
                    Full stack basics
                </p>
            </li>
            <li>
                <p className="textSmall">
                    50 common questions
                </p>
            </li>
            <li>
                <p className="textSmall">
                    Mock interview
                </p>
            </li>
            <li>
                <p className="textSmall">
                    Additional materials
                </p>
            </li>
        </ul>
    </Col>

export default ContentsList