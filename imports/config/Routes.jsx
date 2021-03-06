import React from "react";
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from "react-router";
import App from "../ui/containers/App";
import Welcome from "../ui/components/Welcome";
import NowPlayingContainer from "../ui/containers/NowPlayingContainer";

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="/now-playing" component={NowPlayingContainer} />
    </Route>
  </Router>
);

export default Routes;
