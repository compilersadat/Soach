import React, {Component} from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBModalFooter,
    MDBNavLink,
    MDBAlert, MDBAnimation
} from 'mdbreact';
import Log from "../../assets/login.png";
import BGs from "../../assets/bg1.png";
import Plogin from "../../assets/plogin.png";
import axios from 'axios'

import { Redirect } from "react-router-dom";

class Login extends Component{

    componentDidMount() {

    }

    state={
     redirect:false,
     email:'',
     password:'',
     msg:'',
     alertstatus:false,
 }
    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        //console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });

    }
    onSubmit = (e) => {
        // some action...
        // then redirect
        e.preventDefault();
        const { email, password } = this.state;
       axios.post('/api/parent-login',{email,password}).then(
           (result)=>{
               if(result.data.status=="success"){
                        sessionStorage.setItem('token',result.data.data.token);
                        this.setState({redirect:true})
                  // console.log(sessionStorage.getItem('token'))

               }
               else{
                   this.setState({msg:result.data.message,alertstatus:true})
               }
           }
       )
    }


    render() {
        if(sessionStorage.getItem('token')!==""){
            return <Redirect push to="/parent/classes" />;
        }
        if (this.state.redirect) {
            console.log(this.state.redirect);
            return <Redirect push to="/parent/classes" />;
        }
        return (
            <div className="container-fluid darken-4 pt-5 vh-100" style={{backgroundImage: `url(${Plogin})`,backgroundSize:"cover"}}>
                <MDBRow className=" ">
                    <MDBCol md="1"></MDBCol>
                    <MDBCol md="4" className="mt-5 pt-5 ">
                        <MDBCard className=" hoverable">
                            <MDBCardBody>
                                <MDBAnimation type="fadeIn" >
                                    <MDBAlert color="danger " className={this.state.alertstatus ? "d-block" : "d-none"} >
                                        {this.state.msg}
                                    </MDBAlert>
                                </MDBAnimation>
                                <form onSubmit={this.onSubmit}>
                                <p className="h4 text-center py-4">Parents Sign In </p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Type your email"
                                        icon="envelope"
                                        color="indigo"
                                        name="email"
                                        group
                                        type="email"
                                        onChange={this.onChange}
                                        required
                                    />
                                    <MDBInput
                                        label="Type your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        name="password"
                                        validate
                                        onChange={this.onChange}
                                        required
                                    />

                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn color="indigo btn-md " type="submit"  style={{borderRadius :"1.5rem" ,fontWeight:"bold" ,fontSize:"13px"}}>
                                        <MDBIcon icon="sign-in-alt"></MDBIcon> Login
                                    </MDBBtn>
                                </div>
                                </form>
                                <MDBModalFooter>
                                    <div className="font-weight-light">
                                        <MDBNavLink to="/parent/register">Not a member? Sign Up</MDBNavLink>

                                    </div>
                                </MDBModalFooter>

                            </MDBCardBody>

                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </div>

        )
    }
}


export default Login;
