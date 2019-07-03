import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import axios from "axios";
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
export default class AddSubject extends Component{

    constructor() {
        super();
        this.state = {
            name: '',
            nerror:'',
            eerror:'',
            alertstatus:false,
            std:[],
            cla:'',
            sub:[]



        };

    }
    fetchSubjects =()=>{
        axios.get('/api/get-subjects/').then((result)=>{
            this.setState({sub:result.data.data})
        });
    }
    componentDidMount() {
        axios.get('/api/get-classes/').then((result)=>{
            this.setState({std:result.data.data})
        });
        this.fetchSubjects();
    }


    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */

        this.setState({ [e.target.name]: e.target.value });


    }
    onDeleteRow(rows) {
        axios.post('/api/del-subject/',{id:rows}).then((result)=>{
            if(result.data.success){
                this.fetchSubjects();
            }
        });

    }

    onSubmit = (e) => {
        e.preventDefault();

        // get our form data out of state
        const { name} = this.state;

        axios.post('/api/add-subject', { name,std_id:this.state.cla})
            .then((result) => {


                if(result.data.success){
                    this.setState({alertstatus:true});
                    this.fetchSubjects();
                }
                else{
                    this.setState({nerror:result.data.name,eerror:result.data.email});
                    console.log(this.state.nerror);
                    this.fetchSubjects();
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
                                    <Snackbar
                                        anchorOrigin={{ vertical: 'top',
                                            horizontal: 'right',}}

                                        open={this.state.alertstatus}

                                        ContentProps={{
                                            'aria-describedby': 'message-id',
                                        }}
                                        message={<span id="message-id" >Class Added Successfully</span>}
                                        className="bg-success"
                                    />
                                    <h5>Add Subjects/Courses To LMS</h5>
                                    <Snackbar
                                        anchorOrigin={{ vertical: 'top',
                                            horizontal: 'right',}}

                                        open={this.state.alertstatus}

                                        ContentProps={{
                                            'aria-describedby': 'message-id',
                                        }}
                                        message={<span id="message-id" >Subject Added Successfully</span>}
                                        className="bg-success"
                                    />
                                    <TextField id="standard-dense"
                                               label="Subject Course Name"
                                               name="name"
                                               onChange={this.onChange}
                                               margin="dense" style={{width:"100%"}}/>
                                    <div className="text-center"><small className=" text-danger" >{this.state.nerror}</small></div>
                                    <FormControl style={{marginTop:"1rem",width:"100%"}}>
                                    <InputLabel htmlFor="age-simple">Select Class</InputLabel>
                                    <Select
                                        value={this.state.cla}
                                        onChange={this.onChange}
                                        name="cla"

                                    >
                                        {this.state.std.map((person, index) => (
                                            <MenuItem key={index} value={person.id}>{person.name}</MenuItem>
                                        ))}



                                    </Select>
                                    </FormControl>
                                    <div className="text-center"><small className=" text-danger" >{this.state.eerror}</small></div>

                                    <Grid item xs={12} className="text-right">
                                        <Button type="submit" variant="contained" color="secondary" className="mt-4 ">Submit</Button>
                                    </Grid>
                                </Paper>
                            </form>
                        </Grid>
                        <Grid item lg={6}>
                            <Paper style={{padding:"1rem",margin:"2rem"}}>
                                <BootstrapTable data={this.state.sub} striped hover search pagination selectRow={{mode:"checkbox"}} options={{onDeleteRow: this.onDeleteRow}} deleteRow >
                                    <TableHeaderColumn isKey dataField='id' dataSort={ true }>Subject ID</TableHeaderColumn>
                                    <TableHeaderColumn dataField='name'>Subject Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='class_name'>Class Name</TableHeaderColumn>

                                </BootstrapTable>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </Container>
        )
    }
}
