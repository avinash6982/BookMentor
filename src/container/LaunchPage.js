import React from "react";

import LaunchPageComponent from "../components/launchPage";

export default function LaunchPage({ setUser }) {

    const credentials = {
        username: "user",
        password: "user"
    }

    const onSignin = (login) =>
        (credentials.username === login.username && credentials.password === login.password) ?
            setUser("user") :
            console.log("login failed")

    return (
        <LaunchPageComponent onSignin={onSignin} />
    );
}