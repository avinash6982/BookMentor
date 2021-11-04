import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

import LaunchPage from "./container/LaunchPage";
import Home from "./container/Home";
import Mentor from "./container/Mentor";
import Bookings from "./container/Bookings";

import { ProtectedRoute } from "./ProtectedRoute";
import Admin from "./container/admin";

function useQuery() {

    return new URLSearchParams(useLocation().search);
}

export default function Routes() {

    let query = useQuery();

    return (
        <Switch>
            <ProtectedRoute exact path="/bookings" component={Bookings} />
            <ProtectedRoute exact path="/mentor" component={Mentor} id={query.get("id")} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/admin" component={Admin} />
            <Route path="/welcome" component={LaunchPage} />
            <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
    )
}