import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

import LaunchPage from "./container/LaunchPage";
import Home from "./container/Home";
import Mentor from "./container/Mentor";

import { ProtectedRoute } from "./ProtectedRoute";

function useQuery() {

    return new URLSearchParams(useLocation().search);
}

export default function Routes() {

    let query = useQuery();

    return (
        <Switch>
            <ProtectedRoute exact path="/mentor" component={Mentor} id={query.get("id")} />
            <ProtectedRoute exact path="/" component={Home} />
            <Route path="/welcome" component={LaunchPage} />
            <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
    )
}