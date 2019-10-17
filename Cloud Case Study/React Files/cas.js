import React from "react"
import './cas.css'
import { exportDefaultSpecifier, logicalExpression } from "@babel/types";



class Sample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '',cas:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getdata = this.getdata.bind(this);
        // this.displayPage = this.displayPage.bind(this);
    }

    handleChange(event){
        if (event.target.name === "District"){
            this.setState({value1:event.target.value})
        }
    }

    handleSubmit=(event)=>{
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
    //    this.getdata()
      if (this.state.value1 === '' )
        event.preventDefault();
    }
   /* getdata=()=>{
        var data= new URLSearchParams();
        data.append("District",this.state.value1)
        // data.append("Password",this.state.value2)
        // data.append("type",this.state.value3)
   fetch("https://1merg1mr4c.execute-api.us-east-1.amazonaws.com/one/resources",{
       method:'GET',
       body:data
        })
   .then(response =>{return response.json()})
   .then(response =>{
       this.setState({cas:response.log})
      //  this.displayPage(this.state.login);
       console.log(this.state.cas)
       this.displayPage(this.state.cas)
   
   
   }
       
   )
   
   }
   displayPage=(index) =>//displayPage is a function with some flag variable(index) as a param
  {
      
      switch(index){
          default:
          case 2:
            this.props.history.push("/open1")
            break
          case 1:
              this.props.history.push("/open")
              break
          case 0:
             alert("wrong credentials")
             break
      }
  }*/
    render() {
        return (
            <div class='b'>
                <form action="https://1merg1mr4c.execute-api.us-east-1.amazonaws.com/one/resources" target='_blank' onSubmit={this.handleSubmit} name="myform" method="GET">
                    <h1 class='x'> Get Details</h1>
                    <p class='u'>District</p>
                    <input type="text"class='z' size='50'value={this.state.value1} name="District"placeholder="enter your district" onChange={this.handleChange} /> <br/>       
                    <br></br>                        
                        <input type="submit" class="button" value="Submit"/>
                        <br></br>
                        {/* <button type="button" class="cancelbtn">Cancel</button>
                        <span class="psw"><a href="#">Forgot password?</a></span> */}
                </form>
            </div>
        )
    }
}
export default Sample;