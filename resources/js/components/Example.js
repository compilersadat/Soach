import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { BrowserRouter as Router } from "react-router-dom";
import NavbarPage from "./NavbarPage";
import Home from "./Home";
import Routes from "./Routes";


export default class Example extends Component {
    render() {
        return (
          <div>
              <Router>
                  <div>

                  <NavbarPage/>
                  <main>
                      <Routes/>

                  </main>
                  </div>
              </Router>
          </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
