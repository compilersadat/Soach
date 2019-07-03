import React, { Component } from "react";
import maths from "../../assets/maths.png";
import BGs from "../../assets/background1.png";
import {  MDBRow, MDBCol, MDBIcon,MDBCard ,MDBBtn} from "mdbreact";
import {Redirect} from "react-router-dom";
class Subjects extends Component{
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
            return <Redirect push to="/parent/lectures" />;
        }
        return(
            <div className="container mt-4">
                <MDBRow className="justify-text-center my-5">


                    <MDBCol md="12 " className="text-center">
                        <h2 className="indigo-text h2"><b>Subjects For Classe V</b></h2>
                        <MDBRow>
                            <MDBCol md="4 mt-4 ">
                                <MDBCard className="z-depth-2 text-center p-3 text-white peach-gradient" onClick={this.handleClick}>
                                    <MDBIcon icon="calculator " size="2x"></MDBIcon>
                                    <h4 className="mt-2" style={{fontWeight:"bold"}}>Maths</h4>
                                    <p>50 lect 5 hrs  <MDBIcon icon="rupee-sign"> 500</MDBIcon></p>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4 mt-4 ">
                                <MDBCard className="z-depth-2 text-center p-3 text-white purple-gradient" >
                                    <MDBIcon icon="flask " size="2x"></MDBIcon>
                                    <h4 className="mt-2" style={{fontWeight:"bold"}}>Science</h4>
                                    <p>50 lect 5 hrs  <MDBIcon icon="rupee-sign"> 500</MDBIcon></p>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4 mt-4 ">
                                <MDBCard className="z-depth-2 text-center p-3 text-white sunny-morning-gradient" >
                                    <MDBIcon icon="history " size="2x"></MDBIcon>
                                    <h4 className="mt-2" style={{fontWeight:"bold"}}>History</h4>
                                    <p>50 lect 5 hrs  <MDBIcon icon="rupee-sign"> 500</MDBIcon></p>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4 mt-4 ">
                                <MDBCard className="z-depth-2 text-center p-3 text-white ripe-malinka-gradient" >
                                    <MDBIcon icon="globe " size="2x"></MDBIcon>
                                    <h4 className="mt-2" style={{fontWeight:"bold"}}>Geography</h4>
                                    <p>50 lect 5 hrs  <MDBIcon icon="rupee-sign"> 500</MDBIcon></p>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4 mt-4 ">
                                <MDBCard className="z-depth-2 text-center p-3 text-white near-moon-gradient" >
                                    <MDBIcon icon="calculator " size="2x"></MDBIcon>
                                    <h4 className="mt-2" style={{fontWeight:"bold"}}>Maths</h4>
                                    <p>50 lect 5 hrs  <MDBIcon icon="rupee-sign"> 500</MDBIcon></p>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4 mt-4 ">
                                <MDBCard className="z-depth-2 text-center p-3 text-white deep-blue-gradient" >
                                    <MDBIcon icon="calculator " size="2x"></MDBIcon>
                                    <h4 className="mt-2" style={{fontWeight:"bold"}}>Maths</h4>
                                    <p>50 lect 5 hrs  <MDBIcon icon="rupee-sign"> 500</MDBIcon></p>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol md="4 mt-4 ">
                                <MDBCard className="z-depth-2 text-center p-3 text-white warm-flame-gradient" >
                                    <MDBIcon icon="calculator " size="2x"></MDBIcon>
                                    <h4 className="mt-2" style={{fontWeight:"bold"}}>Maths</h4>
                                    <p>50 lect 5 hrs  <MDBIcon icon="rupee-sign"> 500</MDBIcon></p>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4 mt-4 ">
                                <MDBCard className="z-depth-2 text-center p-3 text-white night-fade-gradient" >
                                    <MDBIcon icon="calculator " size="2x"></MDBIcon>
                                    <h4 className="mt-2" style={{fontWeight:"bold"}}>Maths</h4>
                                    <p>50 lect 5 hrs  <MDBIcon icon="rupee-sign"> 500</MDBIcon></p>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4 mt-4 ">
                                <MDBCard className="z-depth-2 text-center p-3 text-white spring-warmth-gradient" >
                                    <MDBIcon icon="calculator " size="2x"></MDBIcon>
                                    <h4 className="mt-2" style={{fontWeight:"bold"}}>Maths</h4>
                                    <p>50 lect 5 hrs  <MDBIcon icon="rupee-sign"> 500</MDBIcon></p>
                                </MDBCard>
                            </MDBCol>

                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="12" className="mt-4">
                        <MDBBtn color="pink btn-md " type="submit" style={{borderRadius :"1.5rem" ,fontWeight:"bold" ,fontSize:"13px"}}>
                            Subscribe All for <MDBIcon icon="rupee-sign"> 5000</MDBIcon>
                        </MDBBtn>
                        <MDBBtn color="indigo" style={{borderRadius :"1.5rem" ,fontWeight:"bold" ,fontSize:"13px"}}><MDBIcon icon="arrow-left"></MDBIcon>&ensp;Go Back</MDBBtn>

                    </MDBCol>


                </MDBRow>
            </div>
        );
    }
}

export default Subjects;
