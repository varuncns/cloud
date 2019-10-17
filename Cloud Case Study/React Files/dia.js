import React, { Component } from 'react';
import logo from './chart.jpg';
import './cas.css'
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { value1: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        if (event.target.name === "District"){
            this.setState({value1:event.target.value})
        }
        
    }

    handleSubmit=(event)=>{
        
    //    if (this.state.value1 === '' )
        //  event.preventDefault();
     }
  render() {
    return (
      <div className="row">
          <form action="http://localhost:8080" target='_blank' onSubmit={this.handleSubmit} name="myform" method="POST"></form>
          {/* <input type="text"class='z' size='50'value={this.state.value1} name="District"placeholder="enter your district" onChange={this.handleChange} /> <br/>   */}
          <br></br> 
          <img class = 'y' src={logo} crop='fill' />
        </div>
    );
  }
} 