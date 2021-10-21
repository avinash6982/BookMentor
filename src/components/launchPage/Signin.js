import React from "react";
import { Form, Button } from "react-bootstrap";

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

            <Button variant="primary" className={classes.signinButton} type="submit">
                Submit
            </Button>
        </Form>
    );
}