import React, { useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router";
import { signin } from "../api/Signin";
import { registerUser } from "../api/Signup";
import { useAuth } from "../AuthContext";

import LaunchPageComponent from "../components/launchPage";

export default function LaunchPage() {

    const auth = useAuth()
    let history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const [page, setPage] = useState("signin")
    const [errMessages, setErrMessages] = useState({
        showSigninError: false,
        showAuthErr: false,
        showSignupError: false,
        showEmailError: false
    })
    if (auth.user.info)
        return <Redirect to={{ pathname: from.pathname }} />

    const onSignin = data =>
        signin(data)
            .then(res => res.status === 200 && auth.signin("user", () => history.push("/")))
            .catch(err => err.response.status === 401 ?
                setErrMessages({
                    showAuthErr: true
                }) :
                setErrMessages({
                    showSigninError: true
                })
            )

    const onSignup = data => {
        setErrMessages({})
        registerUser(data)
            .then(() => setPage("signin"))
            .catch(err => err.response.status === 409 ?
                setErrMessages({
                    showEmailError: true
                }) :
                setErrMessages({
                    showSignupError: true
                })
            )
    }

    return (
        <LaunchPageComponent
            page={page}
            setPage={setPage}
            onSignin={onSignin}
            onSignup={onSignup}
            errMessages={errMessages} />
    );
}