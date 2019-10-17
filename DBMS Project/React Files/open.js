import React, { Component } from 'react'
import './s.css'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
export default class Open extends Component {
    constructor(props) {
        super(props);
       
       this.state={
            Emp: '',FN:'',LN:'',Pay: '',p:'',CI:'',MA:'',P:'',B:'',D:'',J:'',visible: false
             };
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleClose = this.handleClose.bind(this);
       this.handleShow = this.handleShow.bind(this);
       
        // this.getdata = this.getdata.bind(this);
        // this.displayPage = this.displayPage.bind(this);
        
    }
    handleSubmit(event){
        this.getdata();
        event.preventDefault()
        // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
        // this.getdata()
    //    if (this.state.value1 === '' || this.state.value2 === '')
    //    {
    //      // if(this.state.login===1)
    //      // {
    //      //   return (<Open/>)
    //      // }
        
    //    }
    //    event.preventDefault();
    // `emp_id` varchar(15) NOT NULL,
    // `fname` varchar(20) NOT NULL,
    // `lname` varchar(20) DEFAULT NULL,
    // `emp_city` varchar(20) DEFAULT NULL,
    // `emp_mail` varchar(20) DEFAULT NULL,
    // `p_id` varchar(10) DEFAULT NULL,
    // `b_id` varchar(5) DEFAULT NULL,
    // `dept_id` varchar(6) DEFAULT NULL,
    // `join_date
     }
     handleClose() 
       { 
        
           this.setState({ show: false });
           
       }
       handleShow() 
       {
            this.setState({ show: true });
        }
     getdata=()=>{
        var data= new URLSearchParams();
        data.append("p","0");
      fetch("http://localhost:8080/open",{
       method:'post',
       body:data
        })
   .then(response =>{ return response.json()})
//    .then(data=>this.setState({items:data}))
.then(response =>{
    this.setState({Emp:response.Emp})
    this.setState({FN:response.FN})
    this.setState({LN:response.LN})
    this.setState({CI:response.CI})
    this.setState({MA:response.MA})
    this.setState({P:response.P})
    this.setState({B:response.B})
    this.setState({D:response.D})
    this.setState({J:response.J})





   //  this.displayPage(this.state.login);
    console.log(this.state.Emp)
    this.handleShow()
   


}
    
)
   
   }
   getdata2=()=>{
    var data= new URLSearchParams();
    data.append("p","1");
  fetch("http://localhost:8080/open",{
   method:'post',
   body:data
    })
.then(response =>{ return response.json()})
//    .then(data=>this.setState({items:data}))
.then(response =>{
this.setState({Pay:response.Pay})
//  this.displayPage(this.state.login);




}

)

}
   
    render() {
        return (
                 <div class="u">
                       
                  {/* <form  onSubmit={this.handleSubmit} name="myform"> */}
                      
              <h2 class='xy'>Welcome Employee</h2>  
              <input type="button" class='but' value="Get Details" onClick={this.getdata} />
                <Modal show={this.state.show} onHide={this.handleClose} style={{color:"black",fontSize:"20px"}}>
        {/* <Modal.Header closeButton> */}
          <Modal.Title><center><h2 class='xyz'>Employee Details</h2></center></Modal.Title>
        {/* </Modal.Header> */}
        <Modal.Body>
           <pre class='xyzx'> Employee ID      :  {this.state.Emp}</pre>
           <pre class='xyzx'> First Name       :  {this.state.FN}</pre>
           <pre class='xyzx'> Last Name        :  {this.state.LN}</pre>
           <pre class='xyzx'> Employee City    :  {this.state.CI}</pre>
           <pre class='xyzx'> Employee Mail    :  {this.state.MA}</pre>
           <pre class='xyzx'> Project ID       :  {this.state.P}</pre>
           {/* <pre class='xyzx'> Bonus ID         :  {this.state.B}</pre> */}
           <pre class='xyzx'> Department ID    :  {this.state.D}</pre>
           <pre class='xyzx'> Join Date        :  {this.state.J}</pre>

           {/* <pre> Email :  {this.state.Pay}</pre> */}
           {/* <br></br>
           <br></br> */}
           <h2 class='xyzx'>Payroll : ₹ {this.state.Pay}</h2>
           {/* <br></br>
           <pre> State :  {this.state.pstate}</pre>
           <br></br>
           <br></br>
           <pre> District :  {this.state.pdistrict}</pre> */}
        </Modal.Body>
        <Modal.Footer>
                <input type="button" class='but' value="Payroll" onClick={this.getdata2} />
                <br></br>
                <input type="button" class='but' value="Close" onClick={this.handleClose}  />
         </Modal.Footer>
                </Modal>
            {/* </form> */}
            
            {/* {this.state.items.map(
              (items, i) => 
                <p key={i}>{items.List_Group}: {items.Content}</p>
              )} */}
             {/* <h1 >Employee_ID: {this.state.Emp}</h1>
            <h1>First_Name: {this.state.FN}</h1>
            <h1>Last Name: {this.state.LN}</h1>
            <h1>Payroll:₹ {this.state.Pay}</h1> */}
            {/* <h1>Faculty_ID</h1>
            <h1>{this.state.F_ID}</h1>
            <h1>Program_ID</h1>
            <h1>{this.state.P_ID}</h1> */}
            </div>  
            
        )
    }
}
