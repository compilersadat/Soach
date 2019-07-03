import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {

    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBFormInline,
    MDBIcon,
    MDBCard,
    MDBCardHeader,
    MDBCardBody
} from "mdbreact";
import maths from '../../assets/dash.png'
import ChartsPage from "./ChartsPage";

class Dashboard extends Component {
    render() {
        return (
            <section className="mb-5">
                <section className="blue-gradient mb-5" >
                    <MDBContainer style={{paddingTop:"5rem"}}>
                        <h1 className="h1  text-white pt-5"> My Dashboard</h1>
                        <p className="text-white pb-5 pl-2">This Keeps track of your child progress.</p>
                    </MDBContainer>
                </section>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="4  ">
                            <MDBCard className="z-depth-2  p-3 text-white ripe-malinka-gradient" onClick={this.handleClick}>

                                <h5 className="mt-2" style={{fontWeight:"bold"}}><MDBIcon icon="file "></MDBIcon> &ensp;My Courses</h5>
                                <p className="text-white text-right font-weight-bold pb-0 mb-0"><MDBIcon icon="star "></MDBIcon>&ensp;1 premium</p>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 ">
                            <MDBCard className="z-depth-2  p-3 text-white peach-gradient" onClick={this.handleClick}>

                                <h5 className="mt-2" style={{fontWeight:"bold"}}><MDBIcon icon="file "></MDBIcon> &ensp;Tests attempt By Child</h5>
                                <p className="text-white text-right font-weight-bold pb-0 mb-0"><MDBIcon icon="question-mark "></MDBIcon>&ensp;1 </p>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4 ">
                            <MDBCard className="z-depth-2  p-3 text-white tempting-azure-gradient" onClick={this.handleClick}>

                                <h5 className="mt-2" style={{fontWeight:"bold"}}><MDBIcon icon="file "></MDBIcon> &ensp;Tests attempt By Child</h5>
                                <p className="text-white text-right font-weight-bold pb-0 mb-0"><MDBIcon icon="question-mark "></MDBIcon>&ensp;1 </p>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="8" className="mt-4 hoverable" style={{height:"350px"}}>
                            <ChartsPage/>
                        </MDBCol>
                        <MDBCol md="4" className="mt-4">
                            <MDBCard>
                                <MDBCardHeader className="indigo text-white text-center">
                                    Quick Numbers
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <dl className="row">
                                        <dt className="col-sm-6">Title</dt>
                                        <dd className="col-sm-6">Number</dd>

                                        <dt className="col-sm-6">Title</dt>
                                        <dd className="col-sm-6">Number</dd>
                                        <dt className="col-sm-6">Title</dt>
                                        <dd className="col-sm-6">Number</dd>
                                        <dt className="col-sm-6">Title</dt>
                                        <dd className="col-sm-6">Number</dd>
                                        <dt className="col-sm-6">Title</dt>
                                        <dd className="col-sm-6">Number</dd>
                                        <dt className="col-sm-6">Title</dt>
                                        <dd className="col-sm-6">Number</dd>


                                    </dl>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            )
    }
}

export default Dashboard;
