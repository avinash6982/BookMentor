import React, { useState } from "react";
import { Form, } from "react-bootstrap";
import CustomButton from "../../common/buttons/CustomButton";
import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";

import classes from "./styles.module.css";

const Signin = ({
    onSignin,
    setPage
}) => {

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

        onSignin({ ...state })
    }

    return (
        <Form>
            <Form.Group className={`mb-3 ${classes.inputContainer}`}>
                <FontAwesomeIcon
                    title="user"
                    size="30"
                    color="#699EEE" />
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
                    color="#699EEE"
                    onMouseEnter={() => setPasswordVisible(true)}
                    onMouseOut={() => setPasswordVisible(false)} />
                <Form.Control
                    onChange={e => updateState("password", e.target.value)}
                    className={classes.inputField}
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password" />
            </Form.Group>

            <div className={classes.signinContainer}>
                <CustomButton
                    variant="primary"
                    styles={{ float: "right" }}
                    text="signin"
                    icon="arrow-right"
                    onClick={signinHandler} />
            </div>

            <div className={classes.signupContainer}>
                <CustomButton
                    variant="default"
                    styles={{ width: "100%" }}
                    text="Create an account"
                    onClick={() => setPage("signup")} />
            </div>

            <div className={classes.signinOptions}>
                <a href="/" className={classes.links}>Forgot password</a>
                <a href="/" className={classes.links}>
                    Help
                    <FontAwesomeIcon color="#2A4F96" title="question-circle" marginLeft="5px" />
                </a>
            </div>
        </Form>
    );
}

export default Signin