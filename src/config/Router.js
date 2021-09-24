import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../containers/Login';
import Signup from "../containers/Signup";
import Profile from "../containers/Profile";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </Router>
    )
}

export default AppRouter;