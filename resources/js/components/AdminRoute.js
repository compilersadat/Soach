import React from "react";
import { Route, Switch } from "react-router-dom";

import AdminHome from "../pages/admin/Home";
import AdminClass from "./admin/Class/AddClass";
import AdminSubject from "./admin/Subject/AddSubject";
import AdminTest from "./admin/practiceTest/AddTest";
import AdminQuestion from "./admin/practiceTest/AddQuestion";
class AdminRoutes extends React.Component {
    render() {
        return (
            <Switch>

                <Route exact path="/admin/" component={AdminHome} />
                <Route exact path="/admin/classes" component={AdminClass} />
                <Route exact path="/admin/subjects" component={AdminSubject} />
                <Route exact path="/admin/test" component={AdminTest} />
                <Route exact path="/admin/questions" component={AdminQuestion} />

                <Route
                    render={function () {
                        return <h1>Not Found</h1>;
                    }}
                />
            </Switch>
        );
    }
}

export default AdminRoutes;
