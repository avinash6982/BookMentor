import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./AuthContext";
import LoadingScreen from "./common/loading";

export const UserRoute = ({
    component: Component,
    id,
    ...rest
}) => {

    let auth = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                if (auth.user.isLoading)
                    return <LoadingScreen />
                else if (auth.user.userType === "user")
                    return <Component id={id} {...props} />
                else if (auth.user.userType === "admin")
                    return (
                        <Redirect
                            to={{
                                pathname: "/admin",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/welcome",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};