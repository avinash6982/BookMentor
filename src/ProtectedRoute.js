import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./AuthContext";
import LoadingScreen from "./common/loading";

export const ProtectedRoute = ({
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
                else if (auth.user.info) {
                    return <Component id={id} {...props} />;
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