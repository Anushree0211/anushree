import React, {Component} from 'react';

class Alldetails extends Component{
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
}
render(){
    const{ firstName , lastName ,jobTitle , jobCompany, jobLocation} = this.props;
return(
<>
<div className='pp'>

<h1> Here is The Information you entered</h1><br />

First Name: <b>{firstName} </b><br />
<br />
Last Name: <b> {lastName}</b><br />
<br />
Job: <b>{jobTitle}</b><br />
<br />
Company: <b>{jobCompany}</b><br />
<br />
Location:<b>{jobLocation}</b><br />
<br />
<button className='Back' onClick={this.back}>
   BACK
</button> 
</div>
</>
     );

   }  
}

export default Alldetails;

