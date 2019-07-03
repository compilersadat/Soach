import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import axios from "axios";


export default class Home extends Component{

    constructor() {
        super();
        this.state = {
            name: '',
            nerror:'',
            alertstatus:false,
            std:[]

        };

    }
    componentDidMount() {
        this.fetchClasses();

    }
    fetchClasses =()=>{
        axios.get('/api/get-classes/').then((result)=>{
            this.setState({std:result.data.data})
        });
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
    onDeleteRow(rows) {
        axios.post('/api/del-class/',{id:rows}).then((result)=>{
            if(result.data.success){
                this.fetchClasses();
            }
        });

    }

    onSubmit = (e) => {
        e.preventDefault();

        // get our form data out of state
        const { name} = this.state;
        axios.post('/api/add-class', { name })
            .then((result) => {


                if(result.data.success){
                    this.setState({alertstatus:true});
                    this.fetchClasses();
                }
                else{
                    this.fetchClasses();
                    this.setState({nerror:result.data.name});

                }
            });
    }

    render() {

        return(
            <Container style={{marginTop:"5rem"}}>
                DashBoard

            </Container>
        )
    }
}

