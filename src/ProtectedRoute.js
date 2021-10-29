import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./AuthContext";

export const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {

    let auth = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                if (auth.user) {
                    return <Component {...props} />;
                } else {
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