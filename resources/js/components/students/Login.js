import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon,MDBModalFooter} from 'mdbreact';
import Log from "../../assets/login.png";
import BGs from "../../assets/bg1.png";
const Login = () => {
    return (
        <div className="container-fluid indigo darken-4 pt-5 vh-100">
            <MDBRow className=" ">
                <MDBCol md="1"></MDBCol>
                    <MDBCol md="4" className="mt-5 pt-5">
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">Sign In</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Type your Soch Roll Number"
                                        icon="envelope"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Type your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                    />

                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn color="indigo btn-md " type="submit" style={{borderRadius :"1.5rem" ,fontWeight:"bold" ,fontSize:"13px"}}>
                                        <MDBIcon icon="sign-in-alt"></MDBIcon> Login
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                        <MDBModalFooter>
                            <div className="font-weight-bold">
                                <MDBBtn color="info btn-md " type="submit" style={{borderRadius :"1.5rem" ,fontWeight:"bold" ,fontSize:"13px"}}>
                                    <MDBIcon icon="arrow-left"></MDBIcon> Go Back
                                </MDBBtn>

                            </div>
                        </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="7" className="text-right " >
                    <img src={Log} className="img-fluid"/>
                </MDBCol>
            </MDBRow>
        </div>
    );
};

export default Login;
