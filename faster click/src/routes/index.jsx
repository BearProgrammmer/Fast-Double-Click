import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Timer from "../pages/Timer";

const Router = () => (
  <Switch>
    <Route path="/timer" component={() => <Timer />} />
    <Route path="/register" component={() => <Register />} />
  </Switch>
);

export default Router;
