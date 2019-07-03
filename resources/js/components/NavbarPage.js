import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon ,MDBBtn} from "mdbreact";
import {Redirect, Switch as Router} from "react-router-dom";
import Routes from "./Routes";


export default class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
                <MDBNavbar color="indigo darken-4 mb-5" dark expand="md" fixed="top" scrolling>
                    <MDBNavbarBrand className="p-2">
                        <p>logo</p>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="/">
                                    <MDBIcon icon="home"></MDBIcon>&ensp;Home
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="/parent/cart">
                                    <MDBIcon icon="shopping-cart"></MDBIcon>&ensp;My Cart
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="/parent/dashboard">
                                    <MDBIcon icon="tachometer-alt"></MDBIcon>&ensp;Dashboard
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="/parent/child-registration">
                                    <MDBIcon icon="user"></MDBIcon>&ensp;Register My Child
                                </MDBNavLink>
                            </MDBNavItem>

                        </MDBNavbarNav>

                        <MDBNavbarNav right>

                            <MDBNavItem>

                                <MDBNavLink className="waves-effect waves-light" to="/parent/login">
                                    <MDBBtn color="pink" className="btn-sm " style={{borderRadius :"1.5rem" ,fontWeight:"bold" ,fontSize:"13px"}}>Parent Login</MDBBtn>
                                </MDBNavLink>
                            </MDBNavItem>




                        </MDBNavbarNav>
                    </MDBCollapse>

                </MDBNavbar>


        );
    }
}

