import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

import "./App.scss";
import "typeface-roboto";

import Dashboard from "./App/Dashboard/Dashboard";
import PreAuth from "./App/PreAuth/PreAuth";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NotificationContainer />
        <Switch>
          <PublicRoute exact path="(/|/login|/register)" component={PreAuth} />
          <PrivateRoute path="(/dashboard|/)" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
