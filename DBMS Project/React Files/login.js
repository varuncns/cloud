import React from "react"
import { exportDefaultSpecifier, logicalExpression } from "@babel/types";
import { Redirect } from 'react-router-dom';
// import Open from "/open.js"
import './s.css';



class Sample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',login:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getdata = this.getdata.bind(this);
        this.displayPage = this.displayPage.bind(this);
        
    }

    handleChange(event){
        if (event.target.name === "Username"){
            this.setState({value1:event.target.value})
        }
         if (event.target.name === "Password") {
            this.setState({ value2: event.target.value })
        }
        if(event.target.name==="type")
        {
            this.setState({value3:event.target.value})
        }
    }

    handleSubmit(event){
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
       this.getdata()
      if (this.state.value1 === '' || this.state.value2 === '')
      {
        // if(this.state.login===1)
        // {
        //   return (<Open/>)
        // }
       
      }
      event.preventDefault();
      // this.getdata()

    }
    getdata=()=>{
      var data= new URLSearchParams();
      data.append("Username",this.state.value1)
      data.append("Password",this.state.value2)
      data.append("type",this.state.value3)
 fetch("http://localhost:8080/login",{
     method:'post',
     body:data
      })
 .then(response =>{return response.json()})
 .then(response =>{
     this.setState({login:response.log})
    //  this.displayPage(this.state.login);
     console.log(this.state.login)
     this.displayPage(this.state.login)
 
 
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
}


    render() {
        return (
            <div class='b'>
                <form onSubmit={this.handleSubmit} name="myform">
                    <h1 class='c'> Login</h1>
                    <h2 class='c'>Employee Information System</h2>
                    <br></br>
                    <p class='us'>User ID</p>
                    <input type="text"class='y' size='42'value={this.state.value1} name="Username"placeholder="enter your id" onChange={this.handleChange} /> <br/>
                   <p class="us">Password</p>
                    <input type="password" class='y'size='42' value={this.state.value2} name="Password" placeholder="enter your password" onChange={this.handleChange} /> <br/>
                  <p class="us">Designation</p> 
                  <label> <select name="type" class='y' value={this.state.value3}  onChange={this.handleChange} id="op"> 
                  <option>Select</option>      
		             <option>Employee</option>                                          
			        <option>Admin</option>
                    </select> </label><br></br>
                    <br></br>                                 
                        <input type="submit" class="button" value="Login"/>
                        <br></br>
                        {/* <button type="button" class="cancelbtn">Cancel</button>
                        <span class="psw"><a href="#">Forgot password?</a></span>  */}
                </form>
            </div>
        )
    }
}
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};
export default Sample;

/*class bloodfront extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ marginLeft: "20%", marginTop: "10%", marginRight: "35%" }}>
        <form action="http://localhost:8080"target='_blank' method="GET">
          <h1 style={{ color: "grey" }}>Register as a Blood Donor</h1>
          <fieldset style={{ color: "grey" }}>
            <legend style={{ color: "red" }}>
              <strong>LOGIN INFORMATION</strong>
            </legend>
            <div style={{ marginTop: "5%" }}>
              <label style={{ color: "grey" }}>Full Name *</label>
              <label style={{ color: "grey", marginLeft: "36%" }}>
                Password *
              </label>
              <br />
              <input type="text" name="fullname" style={{ color: "grey" }} />
              <input
                type="text"
                name="password"
                style={{ color: "grey", marginLeft: "22%" }}
              />
            </div>
            <div style={{ marginTop: "5%", marginBottom: "5%" }}>
              <label style={{ color: "grey" }}>Email ID*</label>
              <label style={{ color: "grey", marginLeft: "39%" }}>
                Confirm Password *
              </label>
              <br />
              <input type="text" name="emailid" style={{ color: "grey" }} />
              <input
                type="text"
                name="confirmpassword"
                style={{ color: "grey", marginLeft: "22%" }}
              />
            </div>
          </fieldset>
          <br />
          <br />
          <br />
          <br />
          <fieldset style={{ color: "grey" }}>
            <legend style={{ color: "red" }}>
              <strong>DONOR INFORMATION</strong>
            </legend>
            <div style={{ marginTop: "5%", width: "70%" }}>
              <label style={{ color: "grey" }}>Date of Birth *</label>
              <label style={{ color: "grey", marginLeft: "42%" }}>
                Gender *
              </label>
              <div>
                <input type="date" name="dob" style={{ color: "grey" }} />
                <input
                  type="radio"
                  name="male"
                  style={{ color: "grey", marginLeft: "33%" }}
                />
                <label>Male</label>
                <input
                  type="radio"
                  name="female"
                  style={{ color: "grey", marginLeft: "5%" }}
                />
                <label>Female</label>
              </div>
            </div>
            <div style={{ marginTop: "5%", marginBottom: "5%" }}>
              <label style={{ color: "grey" }}>Your Blood Group*</label>
              <label style={{ color: "grey", marginLeft: "30%" }}>
                Weight (Kg) *
              </label>
              <br />
              <select style={{ width: "30%" }}>
                <option>A +ve</option>
                <option>A -ve</option>
                <option>B +ve</option>
                <option>B -ve</option>
                <option>O +ve</option>
                <option>O -ve</option>
              </select>
              <input
                type="number"
                name="weight"
                style={{ color: "grey", marginLeft: "21%" }}
              />
            </div>
          </fieldset>
          <br />
          <br />
          <br />
          <fieldset style={{ color: "grey" }}>
            <legend style={{ color: "red" }}>
              <strong>CONTACT INFORMATION</strong>
            </legend>
            <div style={{ marginTop: "5%" }}>
              <label style={{ color: "grey" }}>Residence Phone </label>
              <label style={{ color: "grey", marginLeft: "34%" }}>
                Mobile No *
              </label>
              <br />
              <input
                type="number"
                name="phoneresidence"
                style={{ color: "grey" }}
              />
              <input
type="number"
                name="mobileno"
                style={{ color: "grey", marginLeft: "27%" }}
              />
            </div>
            <div style={{ marginTop: "5%", marginBottom: "5%" }}>
              <label style={{ color: "grey" }}>Address*</label>

              <br />
              <input
                type="text"
                name="address"
                style={{ color: "grey", height: "80px" }}
              />
            </div>
            <label style={{ color: "grey", marginLeft: "0%" }}>City *</label>
            <br />
            <select style={{ width: "30%" }}>
              <option>Coimbatore</option>
              <option>Erode</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
            </select>
          </fieldset>
          <br />
          <input type="checkbox" />
          <label>
            I have read the <a href="">Eligibility Criteria</a> and confirm that
            I am eligible to donate blood.
          </label>
          <br />
          <br />

          <input type="checkbox" />
          <label>
            I agree to the <a href="">Terms and Conditions</a> and consent and
            donor information published to the potential blood recipients.
          </label>
          <br />
          <br />
          <div style={{ backgroundColor: "grey" }}>
            <input
              type="submit"
              className="btn btn-danger"
              style={{
                marginLeft: "250px",
                marginTop: "50px",
                backgroundColor: "red",
                scale: "50%",
                color: "white"
              }}
              value=" Register"
            />
            <br />
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default bloodfront;

class FormElementCombined extends React.Component {

    render() {
        return (
            <div>
                <form action="http://localhost:9000/abc" name="myform" method="POST" enctype="multipart/form-data">
                    Uploadfile : <input type="file" name="document" /> <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default FormElementCombined*/