import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";

import classes from "./styles.module.css";

export default function Signin() {

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    //function to safe update component state
    const updateState = (label, data) =>
        setState(previousState => ({
            ...previousState,
            [label]: data
        }))

    const [passwordVisible, setPasswordVisible] = useState(false)

    const signinHandler = () => {

        console.log("signin")
    }

    return (
        <Form>
            <Form.Group className={`mb-3 ${classes.inputContainer}`}>
                <FontAwesomeIcon
                    title="user"
                    size="30"
                    color="rgba(44, 128, 255, 0.747)" />
                <Form.Control
                    onChange={e => updateState("username", e.target.value)}
                    className={classes.inputField}
                    type="text"
                    placeholder="Email" />
            </Form.Group>

            <Form.Group className={`mb-3 ${classes.inputContainer}`}>
                <FontAwesomeIcon
                    title={passwordVisible ? "eye" : "eye-slash"}
                    size="30"
                    color="rgba(44, 128, 255, 0.747)"
                    onMouseEnter={() => setPasswordVisible(true)}
                    onMouseOut={() => setPasswordVisible(false)} />
                <Form.Control
                    onChange={e => updateState("password", e.target.value)}
                    className={classes.inputField}
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password" />
            </Form.Group>

            <div className={classes.signinContainer}>
                <Button variant="primary" className={classes.signinButton} type="submit">
                    Login
                    <FontAwesomeIcon title="arrow-right" marginLeft="10px" />
                </Button>
            </div>
        </Form>
    );
}