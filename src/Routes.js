import {
    Switch,
    Route
} from "react-router-dom";

import LaunchPage from "./container/LaunchPage";
import Home from "./container/Home";

import { ProtectedRoute } from "./ProtectedRoute";

export default function Routes() {

    return (
        <Switch>
            <Route path="/welcome" component={LaunchPage} />
            <ProtectedRoute exact path="/" component={Home} />
            <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
    )
}