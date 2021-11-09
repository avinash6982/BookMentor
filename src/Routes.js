import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

import LaunchPage from "./container/LaunchPage";
import Home from "./container/Home";
import Mentor from "./container/Mentor";
import Bookings from "./container/Bookings";

import { UserRoute } from "./UserRoute";
import Admin from "./container/Admin";
import { AdminRoute } from "./AdminRoute";

function useQuery() {

    return new URLSearchParams(useLocation().search);
}

export default function Routes() {

    let query = useQuery();

    return (
        <Switch>
            <UserRoute exact path="/bookings" component={Bookings} />
            <UserRoute exact path="/mentor" component={Mentor} id={query.get("id")} />
            <UserRoute exact path="/" component={Home} />
            <AdminRoute exact path="/admin" component={Admin} />
            <Route path="/welcome" component={LaunchPage} />
            <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
    )
}