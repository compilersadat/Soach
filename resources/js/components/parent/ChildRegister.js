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
    MDBAlert, MDBAnimation
} from 'mdbreact';
import Log from "../../assets/login.png";
import BGs from "../../assets/bg1.png";
import Plogin from "../../assets/register.png";
import axios from 'axios';

class ChildRegister extends Component{
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            nerror:'',
            perror:'',
            alertstatus:false,
            parentId:''

        };

    }
    componentDidMount=()=> {

        axios.post('/api/get-user',{token:sessionStorage.getItem('token')}).then((result)=>{

            this.setState({parentId:result.data.user.id})

        })
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
        e.preventDefault();
        const {  name, password,parentId } = this.state;
        axios.post('/api/student-registraion', {  name, password,parentId })
            .then((result) => {


                if(result.data.success){
                    this.setState({alertstatus:true});

                }
                else{
                    this.setState({eerror:result.data.name,perror:result.data.password});
                    console.log(this.state.eerror);
                }
            });
        // get our form data out of state
    }

    render() {
        return (
            <div className="container-fluid darken-4 pt-5 mt-5 vh-100" style={{backgroundImage: `url(${Plogin})`,backgroundSize:"cover"}}>
                <MDBContainer className="mt-5">
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBAnimation type="fadeIn" >
                                        <MDBAlert color="success " className={this.state.alertstatus ? "d-block" : "d-none"} >
                                            Registered Successfully.
                                        </MDBAlert>
                                    </MDBAnimation>
                                    <form onSubmit={this.onSubmit}>
                                        <p className="h4 text-center py-4">Sign up</p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Your Child name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                name="name"
                                                onChange={this.onChange}
                                            />
                                            <div className="text-center"><small className=" text-danger" >{this.state.eerror}</small></div>

                                            <MDBInput
                                                label="Create password"
                                                icon="lock"
                                                group
                                                type="password"
                                                name="password"
                                                validate
                                                onChange={this.onChange}
                                            />
                                            <div className="text-center"><small className=" text-danger" >{this.state.perror}</small></div>

                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="indigo  " type="submit" style={{borderRadius :"1.5rem" ,fontWeight:"bold" ,fontSize:"13px"}}>
                                                <MDBIcon icon="sign-in-alt"></MDBIcon> Create Account
                                            </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }


};

export default ChildRegister;


