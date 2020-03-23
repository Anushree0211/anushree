import React,{ Component } from 'react';
import Personalinfo from './Personalinfo';
import Jobdetails from './Jobdetails';
import Alldetails from './Alldetails';

import './Main.css';


class Main extends Component{
state = {
    step:1,
  //  step1
  firstName:'',
  lastName:'',
  //step2
  jobTitle:'',
  jobCompany:'',
  jobLocation:'',
} 
nextStep = () => {
    const {step} = this.state;
    this.setState({
        step: step + 1
    });
}

prevStep =() => {

    const {step} = this.state;
    this.setState({
        step: step - 1
    });
}
handleChange = input => e => {
    this.setState({[input]: e.target.value});
}
showStep = () => {
const {step, firstName, lastName, jobTitle, jobCompany, jobLocation} = this.state;
if(step === 1)
return(<Personalinfo 
handleChange = {this.handleChange}
nextStep = {this.nextStep}
firstName = {firstName}
lastName = {lastName}
/>);
if(step === 2)
return(<Jobdetails 
    handleChange = {this.handleChange}
    nextStep = {this.nextStep}
    prevStep = {this.prevStep}
    jobTitle = {jobTitle}
    jobCompany = {jobCompany}
    jobLocation = {jobLocation}
    />
);
if(step === 3)
return(
    <Alldetails
    firstName = {firstName}
    lastName = {lastName}
    jobTitle = {jobTitle}
    jobCompany = {jobCompany}
    jobLocation = {jobLocation}
    prevStep = {this.prevStep}
    />
)
}
render(){
    const {step} = this.state;
    return(
        <>
        <div clasName='rr'>
        <ul>
  <li><a class="active" href="http://localhost:3000/News.js#home">Home</a></li>
  <li><a href="https://www.ndtv.com/jobs">News</a></li>
  <li><a href="https://www.jobisjob.co.in/contact+number/jobs">Contact</a></li>
  <li><a href="https://in.topresume.com/career-advice/job-search-apps">JobApps</a></li>
       </ul>
        <h3>STEP {step}  OF  3</h3>
        {this.showStep()}
     </div>
        </>
    );
        }
}
export default Main;