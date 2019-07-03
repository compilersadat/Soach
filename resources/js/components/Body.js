import React, { Component } from "react";
import NavbarPage from "./NavbarPage";
import BG from "../assets/blue-curve.svg";
import BGs from "../assets/background1.png";
import {  MDBRow, MDBCol, MDBIcon,MDBCard ,MDBBtn} from "mdbreact";
class Body extends Component{
  render() {
      return(
          <div className="container ">
            <MDBRow className="justify-text-center my-5">

                <MDBCol md="4" className="d-none d-md-block pt-5 text-center">
                <img src={BGs} className="img-fluid"/>
                </MDBCol>
                <MDBCol md="8 " className="text-center">
                    <h2 className="indigo-text"><b>I Am In Class ...</b></h2>
                    <MDBRow>
                        <MDBCol md="4 mt-5 ">
                            <MDBCard className="z-depth-2 text-center p-3 text-white" style={{backgroundImage: `url(${BG})`,backgroundSize:"cover"}}>
                                <h3 style={{fontWeight:"bold"}}>Class I</h3>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 mt-5 ">
                            <MDBCard className="z-depth-2 text-center p-3 text-white" style={{backgroundImage: `url(${BG})`,backgroundSize:"cover"}}>
                                <h3 style={{fontWeight:"bold"}}>Class II</h3>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 mt-5 ">
                            <MDBCard className="z-depth-2 text-center p-3 text-white" style={{backgroundImage: `url(${BG})`,backgroundSize:"cover"}}>
                                <h3 style={{fontWeight:"bold"}}>Class III</h3>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 mt-5 ">
                            <MDBCard className="z-depth-2 text-center p-3 text-white" style={{backgroundImage: `url(${BG})`,backgroundSize:"cover"}}>
                                <h3 style={{fontWeight:"bold"}}>Class IV</h3>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 mt-5 ">
                            <MDBCard className="z-depth-2 text-center p-3 text-white" style={{backgroundImage: `url(${BG})`,backgroundSize:"cover"}}>
                                <h3 style={{fontWeight:"bold"}}>Class V</h3>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 mt-5 ">
                            <MDBCard className="z-depth-2 text-center p-3 text-white" style={{backgroundImage: `url(${BG})`,backgroundSize:"cover"}}>
                                <h3 style={{fontWeight:"bold"}}>Class VI</h3>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 mt-5 ">
                            <MDBCard className="z-depth-2 text-center p-3 text-white" style={{backgroundImage: `url(${BG})`,backgroundSize:"cover"}}>
                                <h3 style={{fontWeight:"bold"}}>Class VII</h3>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 mt-5 ">
                            <MDBCard className="z-depth-2 text-center p-3 text-white" style={{backgroundImage: `url(${BG})`,backgroundSize:"cover"}}>
                                <h3 style={{fontWeight:"bold"}}>Class VIII</h3>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 mt-5 ">
                            <MDBCard className="z-depth-2 text-center p-3 text-white" style={{backgroundImage: `url(${BG})`,backgroundSize:"cover"}}>
                                <h3 style={{fontWeight:"bold"}}>Class IX</h3>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 mt-5 ">
                            <MDBBtn color="indigo" style={{borderRadius :"1.5rem" ,fontWeight:"bold" ,fontSize:"13px"}}><MDBIcon icon="arrow-left"></MDBIcon>&ensp;Go Back</MDBBtn>
                        </MDBCol>

                    </MDBRow>
                </MDBCol>

            </MDBRow>
          </div>
      );
  }
}

export default Body;
