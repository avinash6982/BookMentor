import React from "react";
import { Redirect, useHistory, useLocation } from "react-router";
import { useAuth } from "../AuthContext";

import LaunchPageComponent from "../components/launchPage";

export default function LaunchPage() {

    const auth = useAuth()
    let history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
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

    return (
        <LaunchPageComponent onSignin={onSignin} />
    );
}