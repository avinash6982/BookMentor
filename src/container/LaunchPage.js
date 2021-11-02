import React, { useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router";
import { registerUser } from "../api/Signup";
import { useAuth } from "../AuthContext";

import LaunchPageComponent from "../components/launchPage";

export default function LaunchPage() {

    const auth = useAuth()
    let history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const [page, setPage] = useState("signin")
    if (auth.user.info)
        return <Redirect to={{ pathname: from.pathname }} />

    const credentials = {
        username: "user",
        password: "user"
    }

    const onSignin = login =>
        (credentials.username === login.username && credentials.password === login.password) ?
            auth.signin(
                JSON.stringify({ user: "user" }),
                () => {
                    history.replace(from)
                }
            ) :
            console.log("login failed")

    const onSignup = data =>
        registerUser(data)
            .then(res => console.log(res))
            .catch(err => console.log(err.response))

    return (
        <LaunchPageComponent
            page={page}
            setPage={setPage}
            onSignin={onSignin}
            onSignup={onSignup} />
    );
}