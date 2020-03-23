import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import { blue500} from 'material-ui/styles/colors';
import './Personalinfo.css';

class Personalinfo extends Component{
    continue =e =>{

        e.preventDefault();
        this.props.nextStep();
    }
render(){
    const{handleChange, lastName, firstName} =this.props;
    return(
    <>
     <div className="ss">
     <img src='anu1.jpg' alt='' width="1200" height="500"  />
    <h2> Enter your personal information:</h2>
    <div className='tt'>
    
    <TextField
      hintText="Fname"
      value={firstName}
        onChange={handleChange('firstName')}
        floatingLabelText="Firstname"
        hintStyle={styles.errorStyle}
    />
    
     <br />
    <br />



    <TextField
      hintText="Lname"
      value={lastName}
        onChange={handleChange('lastName')}
        floatingLabelText="Lastname"
    />




    <br />
    <br />
    </div>
    <button className='Next' onClick={this.continue}> NEXT>> </button>
    </div>
    </>
        );

        }
}
export default Personalinfo;
const styles = {
    errorStyle: {
      color: blue500,
    },
  };