import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import PLogin from "./parent/Login";
import Classes from "./parent/Classes";
import Subject from "./parent/Subjects";
import Lectures from "./parent/Lectures";
import Cart from "./parent/Cart";
import Register from "./parent/Register";
import Dashboard from "./parent/Dashboard";
import ChildRegister from "./parent/ChildRegister";
import Video from "./parent/Video";
import AdminHome from "../pages/admin/Home"
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/parent/login" component={PLogin} />
        <Route exact path="/parent/classes" component={Classes} />
        <Route exact path="/parent/subjects" component={Subject} />
          <Route exact path="/parent/lectures" component={Lectures} />
          <Route exact path="/parent/cart" component={Cart} />
          <Route exact path="/parent/register" component={Register} />
          <Route exact path="/parent/dashboard" component={Dashboard} />
          <Route exact path="/parent/child-registration" component={ChildRegister} />
          <Route exact path="/parent/video" component={Video} />
          <Route exact path="/admin/home" component={AdminHome} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
