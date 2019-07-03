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
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
export default class AddQuestion extends Component{

    constructor() {
        super();
        this.state = {
            title: '',
            a:'',
            b:'',
            c:'',
            d:'',
            ans:'',
            sub:[],
            terror:'',
            aerror:'',
            berror:'',
            cerror:'',
            derror:'',
            anserror:'',
            suberror:'',
            clerror:'',
            alertstatus:false,
            subject:'',
            std:[],
            cla:'',
            qtn:[],
            test:[],
            testi:'',


        };

    }
    fetchQuestions=()=>{
        axios.get('/api/get-questions/').then((result)=>{
            this.setState({qtn:result.data.data})
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
    onClassChange=(e)=>{
        this.setState({ [e.target.name]: e.target.value });
        axios.post('/api/get-subjects-by-class/',{id:e.target.value }).then((result)=>{
            this.setState({sub:result.data.data})


        });

    }
    fetchTests =()=>{
        axios.get('/api/get-test/').then((result)=>{
            this.setState({test:result.data.data})
        });
    }
    componentDidMount() {

        axios.get('/api/get-classes/').then((result)=>{
            this.setState({std:result.data.data})
        });
        this.fetchQuestions();
        this.fetchTests();

    }
    onSubmit = (e) => {
        e.preventDefault();

        // get our form data out of state
        const { title,a,b,c,d,ans} = this.state;
        axios.post('/api/add-qtn', { subject_id:this.state.subject,class_id:this.state.cla,test_id:this.state.testi,title,a,b,c,d,ans})
            .then((result) => {


                if(result.data.success){
                    this.setState({alertstatus:true});
                    this.fetchQuestions();
                }
                else{
                    this.setState({terror:result.data.title,aerror:result.data.a,berror:result.data.b,cerror:result.data.c,derror:result.data.d,anserror:result.data.ans,suberror:result.data.subject_id,clerror:result.data.class_id});
                    this.fetchQuestions();
                }
            });

    }
    onDeleteRow(rows) {
        axios.post('/api/del-question/',{id:rows}).then((result)=>{
            if(result.data.success){
                this.fetchClasses();
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
                        <Grid item lg={12}>
                            <Paper style={{padding:"1rem",margin:"2rem"}}>
                                <BootstrapTable data={this.state.qtn} striped hover search pagination selectRow={{mode:"checkbox"}} options={{onDeleteRow: this.onDeleteRow}} deleteRow >
                                    <TableHeaderColumn isKey dataField='id' dataSort={ true }> ID</TableHeaderColumn>
                                    <TableHeaderColumn dataField='subject'>Subject</TableHeaderColumn>
                                    <TableHeaderColumn dataField='class'>Class</TableHeaderColumn>
                                    <TableHeaderColumn dataField='test'>Test</TableHeaderColumn>
                                    <TableHeaderColumn dataField='title'>Question</TableHeaderColumn>
                                    <TableHeaderColumn dataField='option_a'>A</TableHeaderColumn>
                                    <TableHeaderColumn dataField='option_b'>B</TableHeaderColumn>
                                    <TableHeaderColumn dataField='option_c'>C</TableHeaderColumn>
                                    <TableHeaderColumn dataField='option_d'>D</TableHeaderColumn>
                                    <TableHeaderColumn dataField='ans'>Answer</TableHeaderColumn>


                                </BootstrapTable>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <form onSubmit={this.onSubmit}>
                                <Paper style={{padding:"3rem"}}>

                                    <h5>Add Questions</h5>
                                    <Snackbar
                                        anchorOrigin={{ vertical: 'top',
                                            horizontal: 'right',}}

                                        open={this.state.alertstatus}

                                        ContentProps={{
                                            'aria-describedby': 'message-id',
                                        }}
                                        message={<span id="message-id" >Question Added Successfully</span>}
                                        className="bg-success"
                                    />
                                    <FormControl style={{marginTop:"1rem",width:"100%"}}>
                                        <InputLabel htmlFor="age-simple">Select Class</InputLabel>
                                        <Select
                                            value={this.state.cla}
                                            onChange={this.onClassChange}
                                            name="cla"

                                        >
                                            {this.state.std.map((person, index) => (
                                                <MenuItem key={index} value={person.id}>{person.name}</MenuItem>
                                            ))}



                                        </Select>
                                    </FormControl>
                                    <div className="text-center"><small className=" text-danger" >{this.state.clerror}</small></div>

                                    <FormControl style={{marginTop:"1rem",width:"100%"}}>
                                        <InputLabel htmlFor="age-simple">Select Subject</InputLabel>
                                        <Select
                                            value={this.state.subject}
                                            onChange={this.onChange}
                                            name="subject"

                                        >
                                            {this.state.sub.map((person, index) => (
                                                <MenuItem key={index} value={person.id}>{person.name}</MenuItem>
                                            ))}



                                        </Select>
                                    </FormControl>
                                    <div className="text-center"><small className=" text-danger" >{this.state.suberror}</small></div>
                                    <FormControl style={{marginTop:"1rem",width:"100%"}}>
                                        <InputLabel htmlFor="age-simple">Select Test</InputLabel>
                                        <Select
                                            value={this.state.testi}
                                            onChange={this.onChange}
                                            name="testi"

                                        >
                                            {this.state.test.map((person, index) => (
                                                <MenuItem key={index} value={person.id}>{person.name}</MenuItem>
                                            ))}



                                        </Select>
                                    </FormControl>
                                    <div className="text-center"><small className=" text-danger" >{this.state.suberror}</small></div>

                                    <TextField
                                        label="Question "
                                        name="title"
                                        onChange={this.onChange}
                                        style={{width:"100%"}}
                                        id="standard-textarea"
                                        label="Question"

                                        multiline

                                        margin="normal"
                                    />
                                    <div className="text-center"><small className=" text-danger" >{this.state.terror}</small></div>
                                    <TextField
                                        label="Option A "
                                        name="a"
                                        onChange={this.onChange}
                                        style={{width:"100%"}}
                                        id="standard-textarea"
                                        label="Option A"

                                        multiline

                                        margin="normal"
                                    />
                                    <div className="text-center"><small className=" text-danger" >{this.state.aerror}</small></div>

                                    <TextField
                                        label="Option B "
                                        name="b"
                                        onChange={this.onChange}
                                        style={{width:"100%"}}
                                        id="standard-textarea"
                                        label="Option B"

                                        multiline

                                        margin="normal"
                                    />
                                    <div className="text-center"><small className=" text-danger" >{this.state.berror}</small></div>

                                    <TextField
                                        label="Option C "
                                        name="c"
                                        onChange={this.onChange}
                                        style={{width:"100%"}}
                                        id="standard-textarea"
                                        label="Option C"

                                        multiline

                                        margin="normal"
                                    />
                                    <div className="text-center"><small className=" text-danger" >{this.state.cerror}</small></div>

                                    <TextField
                                        label="Option D "
                                        name="d"
                                        onChange={this.onChange}
                                        style={{width:"100%"}}
                                        id="standard-textarea"
                                        label="Option D"

                                        multiline

                                        margin="normal"
                                    />
                                    <div className="text-center"><small className=" text-danger" >{this.state.derror}</small></div>

                                    <FormControl style={{marginTop:"1rem",width:"100%"}}>
                                        <InputLabel htmlFor="age-simple">Select Answer</InputLabel>
                                        <Select
                                            value={this.state.ans}
                                            onChange={this.onChange}
                                            name="ans"

                                        >
                                            {['a','b','c','d'].map((person, index) => (
                                                <MenuItem key={index} value={person}>{person}</MenuItem>
                                            ))}



                                        </Select>
                                    </FormControl>
                                    <div className="text-center"><small className=" text-danger" >{this.state.anserror}</small></div>

                                    <Grid item xs={12} className="text-right">
                                        <Button type="submit" variant="contained" color="secondary" className="mt-4 ">Submit</Button>
                                    </Grid>
                                </Paper>
                            </form>
                        </Grid>

                    </Grid>
                </div>

            </Container>
        )
    }
}
