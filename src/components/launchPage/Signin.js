import React from "react";
import { Form, Button } from "react-bootstrap";
import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";

import classes from "./styles.module.css";

export default function Signin() {

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control className={classes.inputField} type="text" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control className={classes.inputField} type="password" placeholder="Password" />
            </Form.Group>

            <div className={classes.signinContainer}>
                <Button variant="primary" className={classes.signinButton} type="submit">
                    Submit
                    <FontAwesomeIcon title="arrow-right" marginLeft="10px" />
                </Button>
            </div>
        </Form>
    );
}