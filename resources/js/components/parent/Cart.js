import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBCard, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, MDBFormInline, MDBIcon } from "mdbreact";
import subject from '../../assets/subjects.png';
import maths from '../../assets/maths.png'
import CartItems from "./CartItems";

class Cart extends Component {
    render() {
        return (
            <section className="mt-5 pt-4">
                <section className="blue-gradient p-5">
                    <MDBContainer>
                        <h1 className="h1 h1-responsive text-white">My Cart</h1>

                    </MDBContainer>
                </section>
                <section className="py-5" >



                    <MDBContainer>
                        <MDBCol md="12" className="mb-2">
                            <MDBCard className="z-depth-1 p-4">
                                <CartItems/>

                                <MDBBtn color="indigo" className="btn-md " style={{borderRadius :"1.5rem" ,fontWeight:"bold" ,fontSize:"13px"}}><MDBIcon icon="arrow-right"></MDBIcon>&ensp;Proceed To Check Out</MDBBtn>

                            </MDBCard>

                        </MDBCol>

                    </MDBContainer>
                </section>
            </section>
        )
    }
}

export default Cart;
