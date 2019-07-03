import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './admin/Navbar';
import AdminRoutes from "./AdminRoute";
import NavbarPage from "./NavbarPage";
import Routes from "./Routes";


export default class Admin extends Component{
    render() {
        return(
            <div>
                <Router>
                    <div>
                        <Navbar/>

                        <main>
                            <AdminRoutes/>

                        </main>
                    </div>
                </Router>
            </div>

            )
    }
}
if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
