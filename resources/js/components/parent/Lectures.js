import React, { Component } from "react";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBCard, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, MDBFormInline, MDBIcon } from "mdbreact";
import subject from '../../assets/subjects.png';
import maths from '../../assets/maths.png'

class Lectures extends Component {
    state={
        redirect:false

    }

    handleClick = () => {
        // some action...
        // then redirect

        this.setState({redirect: true});
    }
    render() {
        if (this.state.redirect) {
            console.log(this.state.redirect);
            return <Redirect push to="/parent/video" />;
        }
        return (
            <section>
                <section style={{height:"500px", backgroundImage: `url(${subject})`,backgroundSize:"cover",}}>
                    <MDBContainer style={{paddingTop:"12rem"}}>
                        <h1 className="h1 h1-responsive indigo-text">Maths Course</h1>

                        <p className="p-0 m-0 font-weight-bold mb-3">Class V &ensp;<MDBIcon icon="clock" ></MDBIcon> 2:30 hrs &ensp;<MDBIcon icon="file " ></MDBIcon>  20 lectures </p>
                        <MDBBtn color="indigo btn-md " type="submit" style={{fontWeight:"bold" ,fontSize:"13px"}}>
                            <MDBIcon icon="plane"></MDBIcon> Subscribe
                        </MDBBtn>
                    </MDBContainer>
                </section>
                <section className="py-5" style={{ backgroundImage: `url(${maths})`,backgroundSize:"cover",}}>

                        <MDBCol md="12" className="py-5 px-5" >
                            <h3 className="h3 h3-responsive indigo-text">Course Description:</h3>
                            <p className="p-0 m-0 pl-4 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </p>

                        </MDBCol>

                <MDBContainer>
                    <MDBCol md="12" className="mb-2">
                        <MDBCard className=" p-4 hoverable" onClick={this.handleClick}>
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

export default Lectures;
