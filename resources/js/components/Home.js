import React, { Component } from "react";
import BGs from "../assets/home.png";
import visual from "../assets/visual.svg";
import conecp from "../assets/concept1.png";
import concside from "../assets/cocside.png";
import practice from "../assets/practice.svg";
import parent from "../assets/pm.png";
import pm from "../assets/points.png";
import father from "../assets/father.png";
import downloadbg from "../assets/downloadbg.png";
import {
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCard,
    MDBBtn,
    MDBContainer,
    MDBNavLink,
    MDBAnimation,
    MDBIframe,
    MDBFooter
} from "mdbreact";
import Plogin from "../assets/child.png";

class Home extends Component{
    render() {
        return(
            <section>

                            <section className="vh-100" style={{backgroundImage: `url(${BGs})`,backgroundSize:"cover"}}>
                                <MDBContainer className="pt-5 mt-5">
                                    <MDBRow className="">
                                        <MDBCol md="6" className="pt-5 mt-5">
                                            <MDBAnimation type="fadeIn">
                                                <h1 className="text-white h1 h1-responsive pt-5">Soach</h1>
                                                <h2 className="text-white h2 h2-responsive ">Ignite Your Imagination.</h2>
                                                <MDBBtn color="pink" className="btn-md mt-2" style={{borderRadius :"1.5rem" ,fontSize:"13px"}}>Get Started</MDBBtn>
                                            </MDBAnimation>
                                        </MDBCol>
                                        <MDBCol md="6" className="d-none d-md-block">
                                            <MDBAnimation type="fadeIn">
                                                <img src={Plogin} className="img-fluid"/>
                                            </MDBAnimation>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </section>
                            <section className="my-5">
                                <MDBRow className="m-0 p-0">

                                    <MDBCol md="6" className="text-left p-5 mt-5">
                                        <MDBContainer className="p-5">
                                            <h2 className="h2 h2-responsive indigo-text"><strong>Ignite your Imagination & thinking through visual</strong></h2>
                                            <p className="text-justify  pt-2 text-black-50"><strong>Psychologists through research suggest that visuals help or to remember information for a long period of time .Research outcomes corroborate that our brain is mainly an image processors & not a word processor. Ask a kid what he learnt 3 days ago in school and probably the kid could be able to recall only half of what he learnt . Ask him the names of Avengers which he watched 2 months ago and he would enthusiastically blabber it out! Visuals combined with good story (narrative) helps a person remember information for a lifetime!</strong> </p>
                                            <MDBBtn className="btn-md mt-2 btn-outline-pink z-depth-0" style={{borderRadius :"1.5rem" ,fontSize:"13px"}}><strong>Know More</strong></MDBBtn>

                                            <MDBBtn color="pink" className="btn-md mt-2 z-depth-0" style={{borderRadius :"1.5rem" ,fontSize:"13px"}}><strong>Enroll</strong></MDBBtn>

                                        </MDBContainer>
                                    </MDBCol>
                                    <MDBCol md="6" className="text-center p-5">
                                        <MDBAnimation type="fadeIn">
                                            <img src={visual} className="img-fluid"/>
                                        </MDBAnimation>
                                    </MDBCol>
                                </MDBRow>


                            </section>
                            <section style={{backgroundImage: `url(${conecp})`,backgroundSize:"cover"}} className="p-5">
                                <MDBRow>

                                    <MDBCol md="6 " className="text-center">
                                        <MDBContainer className=" my-5">
                                            <MDBAnimation type="fadeIn">
                                                <img src={concside} className="img-fluid"/>
                                            </MDBAnimation>
                                        </MDBContainer>

                                    </MDBCol>
                                    <MDBCol md="5">
                                        <MDBContainer className="py-5 my-5">
                                            <h2 className="h2 h2-responsive text-white mb-0"><strong>Concepts in details</strong></h2>
                                            <h5 className="text-justify  p-0 text-white"><strong>In soch every concept is explained in detail.</strong></h5>
                                            <p className="text-justify  pt-2 text-white-50"><strong>Practical application of the concept is taught using visuals which help students connect what they are
                                                learning with their day-to-day life. This methodology helps them to comprehend the practical usage of different concepts and apply in real life ensures better retention , better recall & application of concepts in real life.
                                            </strong></p>
                                        </MDBContainer>
                                    </MDBCol>
                                </MDBRow>

                            </section>
                            <section className="my-5">
                                <MDBRow className="m-0 p-0">

                                    <MDBCol md="6" className="text-left p-5 mt-5">
                                        <MDBContainer className="p-5">
                                            <h2 className="h2 h2-responsive indigo-text"><strong>Practice malceth a man!</strong></h2>
                                            <p className="text-justify  pt-2 text-black-50"><strong>For every topic, some questions are solved by faculty & more than 50+ questions are given in practice exercises called ‘Brain Gym’ to enhance the brain muscles of students. These practice questions cover different types / possibilities of questions which can come in an exam and malles then studentrt exam-ready! </strong></p>
                                            <MDBBtn className="btn-md mt-2 btn-outline-pink z-depth-0" style={{borderRadius :"1.5rem" ,fontSize:"13px"}}><strong>Know More</strong></MDBBtn>

                                            <MDBBtn color="pink" className="btn-md mt-2 z-depth-0" style={{borderRadius :"1.5rem" ,fontSize:"13px"}}><strong>Enroll</strong></MDBBtn>

                                        </MDBContainer>
                                    </MDBCol>
                                    <MDBCol md="5" className="text-center p-5">
                                        <MDBAnimation type="fadeIn">
                                            <img src={practice} className="img-fluid"/>
                                        </MDBAnimation>
                                    </MDBCol>
                                </MDBRow>


                            </section>
                            <section style={{backgroundImage: `url(${parent})`,backgroundSize:"cover"}} className="p-5">
                                <MDBRow>

                                    <MDBCol md="6 " className="text-center">
                                        <MDBContainer className="py-2">
                                            <MDBAnimation type="fadeIn">
                                                <img src={father} className="img-fluid py-5-" />
                                            </MDBAnimation>
                                        </MDBContainer>

                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBContainer className="py-5 my-5">
                                            <h2 className="h2 h2-responsive text-white mb-0"><strong>Parent Monitoring </strong></h2>

                                            <h5 className="text-justify  p-0 text-white"><strong>Parents are given an app to track the following</strong></h5>
                                            <MDBAnimation type="fadeIn">
                                                <img src={pm} className="img-fluid py-5-" width="50%"/>
                                            </MDBAnimation>
                                            <p className="text-justify  pt-2 text-white"><strong>Parent Monitoring app insures that the parent is able to keep tab on the progress of his child. </strong></p>
                                        </MDBContainer>
                                    </MDBCol>

                                </MDBRow>

                            </section>
                            <section>
                                <MDBCol md="12" className="text-center p-5 my-5">
                                    <MDBContainer className="p-5">
                                        <h2 className="h2 h2-responsive indigo-text"><strong>All India Mock tests  </strong></h2>
                                        <h5 className="h5 h5-responsive dark-grey-text">(AIM-test) @-(Bulls eye)</h5>
                                        <p className="text-center  pt-2 text-black-50"><strong>All India mock tests are administered at the end of each Chapter which ensures that the student is exam ready and knows his standing in a huge sample size.</strong></p>
                                        <MDBBtn className="btn-md mt-2 btn-outline-pink z-depth-0" style={{borderRadius :"1.5rem" ,fontSize:"13px"}}><strong>Contact Us</strong></MDBBtn>

                                        <MDBBtn color="pink" className="btn-md mt-2 z-depth-0" style={{borderRadius :"1.5rem" ,fontSize:"13px"}}><strong>Enroll</strong></MDBBtn>

                                    </MDBContainer>
                                </MDBCol>
                            </section>
                            <section className="pink py-5 my-5 text-center">
                                <h2 className="h2 h2-responsive white-text mt-5"><strong>Sample Videos </strong></h2>
                                <h5 className="h5 h5-responsive text-white-50 mb-5">Lorum empsum</h5>
                                <MDBRow className="p-0 m-0 justify-content-center" >

                                    <MDBCol md="8">
                                        <MDBRow className="text-left">
                                            <MDBCol md="6">
                                                <MDBContainer className="">
                                                    <h2 className="h2 h2-responsive mb-0 white-text"><strong>Maths</strong></h2>
                                                    <p className="text-white-50">(AIM-test) @-(Bulls eye)</p>
                                                    <MDBCard >

                                                        <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />

                                                    </MDBCard>
                                                </MDBContainer>

                                            </MDBCol>
                                            <MDBCol md="6">
                                                <MDBContainer className="">
                                                    <h2 className="h2 h2-responsive mb-0 white-text"><strong>Science</strong></h2>
                                                    <p className="text-white-50">(AIM-test) @-(Bulls eye)</p>
                                                    <MDBCard >

                                                        <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />

                                                    </MDBCard>
                                                </MDBContainer>

                                            </MDBCol>
                                        </MDBRow>


                                    </MDBCol>

                                </MDBRow>
                            </section>

                            <section>
                                <MDBCol md="12" className="text-center p-5 my-5">
                                    <MDBContainer className="p-5">
                                        <h2 className="h2 h2-responsive indigo-text "><strong>Learning Options</strong> </h2>
                                        <h5 className="h5 h5-responsive dark-grey-text mb-5">Soch Provides Multiple Learning Options</h5>
                                        <MDBRow className="justify-content-center">
                                            <MDBCol md="2 " className="text-center p-3 hoverable m-2">
                                                <MDBIcon icon="globe" className="fa-3x pink-text pb-3"></MDBIcon>
                                                <h4 className="h4 h4-responsive text-indigo"><strong>Website</strong></h4>
                                            </MDBCol>
                                            <MDBCol md="2 " className="text-center p-3 hoverable m-2">
                                                <MDBIcon fab icon="android" className="fa-3x pink-text pb-3"></MDBIcon>
                                                <h4 className="h4 h4-responsive text-indigo"><strong>Android App</strong></h4>
                                            </MDBCol>
                                            <MDBCol md="2 " className="text-center p-3 hoverable m-2">
                                                <MDBIcon icon="tablet-alt" className="fa-3x pink-text pb-3"></MDBIcon>
                                                <h4 className="h4 h4-responsive text-indigo"><strong>Tablet</strong></h4>
                                            </MDBCol>
                                            <MDBCol md="2 " className="text-center p-3 hoverable m-2">
                                                <MDBIcon icon="sd-card" className="fa-3x pink-text pb-3"></MDBIcon>
                                                <h4 className="h4 h4-responsive text-indigo"><strong>Sd Card</strong></h4>
                                            </MDBCol>
                                            <MDBCol md="2 " className="text-center p-3 hoverable m-2">
                                                <MDBIcon fab icon="usb" className="fa-3x pink-text pb-3"></MDBIcon>
                                                <h4 className="h4 h4-responsive text-indigo"><strong>Pen drive</strong></h4>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBContainer>
                                </MDBCol>
                            </section>

                            <section className="" style={{backgroundImage: `url(${downloadbg})`,backgroundSize:"cover"}}>
                                <MDBCol md="12" className="text-center p-5 my-5">
                                    <MDBContainer className="p-5">
                                        <h2 className="h2 h2-responsive white-text"><strong>Download</strong> the app for Free Now.</h2>
                                        <MDBBtn className="btn-md mt-2 btn-pink " style={{borderRadius :"1.5rem" ,fontSize:"13px"}}><strong>Download</strong></MDBBtn>


                                    </MDBContainer>
                                </MDBCol>
                            </section>

                        <MDBFooter color="indigo">
                            <p className="footer-copyright mb-0 py-3 text-center">
                                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                            </p>
                        </MDBFooter>


            </section>

        );
    }
}

export default Home;
