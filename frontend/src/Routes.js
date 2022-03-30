import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

import Settings from "./containers/Settings";

import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      {/* Home page - default */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* User Lifecycle Management */}
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/settings">
        <Settings />
      </Route>

      {/* Notes */}
      <Route exact path="/notes/new">
        <NewNote />
      </Route>
      <Route exact path="/notes/:id">
        <Notes />
      </Route>

      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
