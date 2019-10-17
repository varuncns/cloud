import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import './signup.css'

export default class Open extends Component {
    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3: '',value4: '',value5: '',value6: '',value7: '',value8: '',value9: '',value10:'',value11:'',value12:'',Up:'',d:'',value13:'',show:false,value14:'',Del:'',show1:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getdata = this.getdata.bind(this);
        this.handleChange1=this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.getdata = this.getdata.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClose1 = this.handleClose1.bind(this);
        this.handleShow1 = this.handleShow1.bind(this);
        this.handleShow = this.handleShow.bind(this);
        // this.handleChange1=this.handleChange1.bind(this);
        // this.getdata = this.getdata.bind(this);
        // this.displayPage = this.displayPage.bind(this);
        
    }

    handleChange(event){
        if (event.target.name === "employee"){
            this.setState({value1:event.target.value})
        }
         if (event.target.name === "firstname") {
            this.setState({ value2: event.target.value })
        }
        if (event.target.name === "lastname") {
            this.setState({ value3: event.target.value })
        }
        if(event.target.name==="city")
        {
            this.setState({value4:event.target.value})
        }
        if(event.target.name==="mail")
        {
            this.setState({value5:event.target.value})
        }
        if(event.target.name==="project")
        {
            this.setState({value6:event.target.value})
        }
        if(event.target.name==="bonus")
        {
            this.setState({value7:event.target.value})
        }
        if(event.target.name==="depart")
        {
            this.setState({value8:event.target.value})
        }
        if(event.target.name==="joindate")
        {
            this.setState({value9:event.target.value})
        }
        if(event.target.name==="sala")
        {
            this.setState({value13:event.target.value})
        }
    }
    handleChange1(event)
    {
        if(event.target.name==="employee1")
        {
            this.setState({value11:event.target.value})
        }
        if(event.target.name==="bonus1")
        {
            this.setState({value12:event.target.value})
        }   
    }
    handleChange2(event)
    {
        if(event.target.name==="employee2")
        {
            this.setState({value14:event.target.value})
        }
        
    }

    handleSubmit(event){
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
   this.getdata()
      if (this.state.value1 === '' || this.state.value2 === ''|| this.state.value3 === ''|| this.state.value4 === ''|| this.state.value5 === ''|| this.state.value6 === ''|| this.state.value7 === ''|| this.state.value8 === ''|| this.state.value9 === ''|| this.state.value13 === '')
      if(this.state.value11 === ''||this.state.value12==='')
      event.preventDefault();
      // this.getdata()

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
         data.append("d",'0')
         data.append("employee",this.state.value1)
         data.append("firstname",this.state.value2)
         data.append("lastname",this.state.value3)
         data.append("city",this.state.value4)
         data.append("mail",this.state.value5)
         data.append("project",this.state.value6)
         data.append("bonus",this.state.value7)
         data.append("depart",this.state.value8)
         data.append("joindate",this.state.value9)
         data.append("sala",this.state.value13)
      fetch("http://localhost:8080/open1",{
       method:'post',
       body:data
        })
    .then(response =>{ return response.json()})
    //    .then(data=>this.setState({items:data}))
    .then(response =>{
    this.setState({value10:response.value10})
    //  this.displayPage(this.state.login);
    
    
    
    
    }
    
    )
    
    }
    handleClose1() 
    { 
     
        this.setState({ show1: false });
        
    }
    handleShow1() 
    {
         this.setState({ show1: true });
     }
    getdata2=()=>{
        var data= new URLSearchParams();
        data.append("d",'1')
        data.append("employee1",this.state.value11)
        data.append("bonus1",this.state.value12)
     fetch("http://localhost:8080/open1",{
      method:'post',
      body:data
       })
   .then(response =>{ return response.json()})
   //    .then(data=>this.setState({items:data}))
   .then(response =>{
   this.setState({Up:response.Up})
   this.handleShow()
   //  this.displayPage(this.state.login);
   
   
   
   
   }
   
   )
   
   }
   getdata1=()=>{
    var data= new URLSearchParams();
    data.append("d",'2')
    data.append("employee2",this.state.value14)
 fetch("http://localhost:8080/open1",{
  method:'post',
  body:data
   })
.then(response =>{ return response.json()})
//    .then(data=>this.setState({items:data}))
.then(response =>{
this.setState({Del:response.Del})
this.handleShow1()
//  this.displayPage(this.state.login);




}

)

}
 
 


    render() {
        return (
            // <div class="u">
            //     Welcome Admin
            // </div>
            <div>
               <h1 id='p'> Welcome Admin</h1>
            <form onSubmit={this.handleSubmit} name="myform" id='cs'>   
            {/* <form onSubmit={this.handleSubmit} name="myform" id='cs'> */}
            <h1 class='c'> Add New Employee</h1>
            <h1 class='c'> Enter Employee Details</h1>
            <br></br>
            {/* <p class='us'>User ID</p> */}
            <input type="text"class='y' size='50'value={this.state.value1} name="employee"placeholder="enter your emp_id" onChange={this.handleChange} /> <br/>
           {/* <p class="us">Password</p> */}
            <input type="text" class='y'size='50' value={this.state.value2} name="firstname" placeholder="enter first name" onChange={this.handleChange} /> <br/>
            <input type="text" class='y'size='50' value={this.state.value3} name="lastname" placeholder="enter last name" onChange={this.handleChange} /> <br/>
            <input type="text" class='y'size='50' value={this.state.value4} name="city" placeholder="enter city" onChange={this.handleChange} /> <br/>
            <input type="text" class='y'size='50' value={this.state.value5} name="mail" placeholder="enter employee mail" onChange={this.handleChange} /> <br/>
            <input type="text" class='y'size='50' value={this.state.value6} name="project" placeholder="enter project id" onChange={this.handleChange} /> <br/>
            <input type="text" class='y'size='50' value={this.state.value7} name="bonus" placeholder="enter bonus id" onChange={this.handleChange} /> <br/>
            <input type="text" class='y'size='50' value={this.state.value8} name="depart" placeholder="enter dept_id" onChange={this.handleChange} /> <br/>
            <input type="text" class='y'size='50' value={this.state.value13} name="sala" placeholder="enter salary" onChange={this.handleChange} /> <br/>
            &nbsp; &nbsp; &nbsp; Join date:   <input type="date" class='y'size='50'value={this.state.value9} name="joindate" placeholder="enter join date" onChange={this.handleChange} /> <br/>                                
                <input type="submit" class="button" value="Submit"/>
                <br></br>
        </form>
        <input type="button" class='bt' value="Update Salary" onClick={this.handleShow} />
        <Modal show={this.state.show} onHide={this.handleClose} style={{color:"black",fontSize:"20px"}}>
          <Modal.Title><center><h2 class='xy'>Update Salary Function</h2></center></Modal.Title>
          <input type="text"class='y' size='50'value={this.state.value11} name="employee1"placeholder="enter your emp_id" onChange={this.handleChange1} /> <br/>
          <input type="text" class='y'size='50' value={this.state.value12} name="bonus1" placeholder="enter updated salary" onChange={this.handleChange1} /> <br/>
          <pre> Update Salary:  {this.state.Up}</pre>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
                <input type="button" class='but'  value="Update" onClick={this.getdata2} />
                <br></br>
                <input type="button" class='but' value="Close" onClick={this.handleClose}  />
         </Modal.Footer>
                </Modal>
                <br></br>
        <input type="button" class='bt' value="Remove Employee" onClick={this.handleShow1} />
        <Modal show={this.state.show1} onHide={this.handleClose1} style={{color:"black",fontSize:"20px"}}>
          <Modal.Title><center><h2 class='xy'>Remove Employee</h2></center></Modal.Title>
          <input type="text"class='y' size='50'value={this.state.value14} name="employee2"placeholder="enter your emp_id" onChange={this.handleChange2} /> <br/>
          {/* <input type="text" class='y'size='50' value={this.state.value12} name="bonus1" placeholder="enter updated salary" onChange={this.handleChange1} /> <br/> */}
          <pre> Deleted Employee:  {this.state.Del}</pre>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
                <input type="button" class='but' value="Delete" onClick={this.getdata1} />
                <br></br>
                <input type="button" class='but' value="Close" onClick={this.handleClose1}  />
         </Modal.Footer>
                </Modal>
            <h2>{this.state.value10}</h2>

            </div>
            
        )
    }
}
