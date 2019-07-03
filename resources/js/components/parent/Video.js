import React, { Component } from "react";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBCard, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, MDBFormInline, MDBIcon } from "mdbreact";
import subject from '../../assets/subjects.png';
import maths from '../../assets/maths.png'
import IframePage from "./IframePage";

class Video extends Component {

    render() {

        return (
            <section>
                <section >
                    <IframePage/>
                </section>
                <section className="py-5" style={{ backgroundImage: `url(${maths})`,backgroundSize:"cover",}}>

                    <MDBCol md="12" className="py-5 px-5" >
                        <h3 className="h3 h3-responsive indigo-text">Lecture Description:</h3>
                        <p className="p-0 m-0 pl-4 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                    </MDBCol>

                    <MDBContainer>
                        <MDBCol md="12" className="mb-2">
                            <MDBCard className=" p-4 hoverable" onClick={this.handleClick} style={{borderLeft:"2px solid blue"}}>
                                <h4 className="h4 h4-responsive text-info">1) Lecture Title</h4>
                                <p className="p-0 m-0 pl-4 text-info">Lorem Ipsum is simply dummy text of the printing and typesetting  </p>
                                <p className="p-0 m-0 pl-4 font-weight-bold text-info"><MDBIcon icon="clock" ></MDBIcon> 5:30 min </p>

                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="12" className="mb-2">
                            <MDBCard className=" p-4 hoverable">
                                <h4 className="h4 h4-responsive">1) Lecture Title</h4>
                                <p className="p-0 m-0 pl-4 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting  </p>
                                <p className="p-0 m-0 pl-4 font-weight-bold grey-text"><MDBIcon icon="clock" ></MDBIcon> 5:30 min </p>

                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="12" className="mb-2">
                            <MDBCard className=" p-4 hoverable">
                                <h4 className="h4 h4-responsive">1) Lecture Title</h4>
                                <p className="p-0 m-0 pl-4 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting  </p>
                                <p className="p-0 m-0 pl-4 font-weight-bold grey-text"><MDBIcon icon="clock" ></MDBIcon> 5:30 min </p>

                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="12" className="mb-2">
                            <MDBCard className=" p-4 hoverable">
                                <h4 className="h4 h4-responsive">1) Lecture Title</h4>
                                <p className="p-0 m-0 pl-4 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting  </p>
                                <p className="p-0 m-0 pl-4 font-weight-bold grey-text"><MDBIcon icon="clock" ></MDBIcon> 5:30 min </p>

                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="12" className="mb-2">
                            <MDBCard className=" p-4 hoverable">
                                <h4 className="h4 h4-responsive">1) Lecture Title</h4>
                                <p className="p-0 m-0 pl-4 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting  </p>
                                <p className="p-0 m-0 pl-4 font-weight-bold grey-text"><MDBIcon icon="clock" ></MDBIcon> 5:30 min </p>

                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="12" className="mb-2">
                            <MDBCard className=" p-4 hoverable">
                                <h4 className="h4 h4-responsive">1) Lecture Title</h4>
                                <p className="p-0 m-0 pl-4 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting  </p>
                                <p className="p-0 m-0 pl-4 font-weight-bold grey-text"><MDBIcon icon="clock" ></MDBIcon> 5:30 min </p>

                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="12" className="mb-2">
                            <MDBCard className=" p-4 hoverable">
                                <h4 className="h4 h4-responsive">1) Lecture Title</h4>
                                <p className="p-0 m-0 pl-4 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting  </p>
                                <p className="p-0 m-0 pl-4 font-weight-bold grey-text"><MDBIcon icon="clock" ></MDBIcon> 5:30 min </p>

                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="12" className="mb-2">
                            <MDBCard className=" p-4 hoverable hoverable">
                                <h4 className="h4 h4-responsive">1) Lecture Title</h4>
                                <p className="p-0 m-0 pl-4 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting  </p>
                                <p className="p-0 m-0 pl-4 font-weight-bold grey-text"><MDBIcon icon="clock" ></MDBIcon> 5:30 min </p>

                            </MDBCard>
                        </MDBCol>
                    </MDBContainer>
                </section>
            </section>
        )
    }
}

export default Video;
