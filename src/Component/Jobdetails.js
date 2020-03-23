import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


class Jobdetails extends Component{
    continue =e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }   
    render(){
        const{handleChange, jobTitle, jobCompany, jobLocation} =this.props;
        return(
        <>
         <div className="ss">
        <h2> Enter your Job information:</h2>
        <div className='yy'>
            <br />
        
        

        <TextField
      hintText="Job"
      value= {jobTitle}
            onChange={handleChange('jobTitle')}
    />
        
        
         <br />
        
        <TextField
      hintText="Company"
      value= {jobCompany}
            onChange={handleChange('jobCompany')}
    />
        
        <br />


        <TextField
      hintText="Joblocation"
      value= {jobLocation}
            onChange={handleChange('jobLocation')}
    />
        <br />
        <br />
        </div>
        <button className='Back' onClick={this.back}> BACK </button>
        
        <button className='Next' onClick={this.continue}> NEXT>> </button>

        </div>
        </>
            );
    
            }
        }
            export default Jobdetails;