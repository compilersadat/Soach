import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {MDBInput} from "mdbreact";
import axios from "axios";

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
export default class AddTest extends Component{

    constructor() {
        super();
        this.state = {
            name: '',
            nerror:'',
            alertstatus:false,
            test:[],


        };

    }
    componentDidMount() {
        this.fetchTests();

    }
    fetchTests =()=>{
        axios.get('/api/get-test/').then((result)=>{
            this.setState({test:result.data.data})
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
    onSubmit = (e) => {
        e.preventDefault();

        // get our form data out of state
        const { name} = this.state;
        axios.post('/api/add-test', { name })
            .then((result) => {


                if(result.data.success){
                    this.setState({alertstatus:true});
                    this.fetchTests();
                }
                else{
                    this.setState({nerror:result.data.name});
                    this.fetchTests();
                }
            });
    }
    onDeleteRow(rows) {
        axios.post('/api/del-test/',{id:rows}).then((result)=>{
            if(result.data.success){
                this.fetchTests();
            }
        });

    }
    render() {

        return(
            <Container style={{marginTop:"5rem"}}>

                <div style={{flexGrow:"1"}}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={6}>
                            <form onSubmit={this.onSubmit}>
                                <Paper style={{padding:"3rem"}}>

                                    <h5>Add Test To LMS</h5>
                                    <Snackbar
                                        anchorOrigin={{ vertical: 'top',
                                            horizontal: 'right',}}

                                        open={this.state.alertstatus}

                                        ContentProps={{
                                            'aria-describedby': 'message-id',
                                        }}
                                        message={<span id="message-id" >Test Added Successfully</span>}
                                        className="bg-success"
                                    />
                                    <TextField id="standard-dense"
                                               label="Test Name/Topic"
                                               name="name"
                                               onChange={this.onChange}
                                               margin="dense" style={{width:"100%"}}/>

                                    <div className="text-center"><small className=" text-danger" >{this.state.nerror}</small></div>

                                    <Grid item xs={12} className="text-right">
                                        <Button type="submit" variant="contained" color="secondary" className="mt-4 ">Submit</Button>
                                    </Grid>
                                </Paper>
                            </form>
                        </Grid>
                        <Grid item lg={6}>
                            <Paper style={{padding:"1rem",margin:"2rem"}}>
                                <BootstrapTable data={this.state.test} striped hover search pagination selectRow={{mode:"checkbox"}} options={{onDeleteRow: this.onDeleteRow}} deleteRow >
                                    <TableHeaderColumn isKey dataField='id' dataSort={ true }> ID</TableHeaderColumn>
                                    <TableHeaderColumn dataField='name'>Test Name</TableHeaderColumn>

                                </BootstrapTable>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </Container>
        )
    }
}
