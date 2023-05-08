///// מגדיר את הלקוחות ואת כפתור הבחירה בעמוד NEW INVOICE
import React, {Component } from 'react';
import './clients.css'
import {Consumer} from './../Context/index'
import chooseProfile from './../chooseProfile/chooseProfile.js';

export default class Clients extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ""};

      const allClients = [    {client:"Osem", email:'Osem@gmail.com', phone:'08-9221079', contact:'Meir', picture:''},
                              {client:"Strauss", email:'Strauss@gmail.com', phone:'03-9348216', contact:'Gabi', picture:''},
                              {client:"Neto", email:'Neto@gmail.com', phone:'04-5933781', contact:'Daniel', picture:''},
                              {client:"Dip", email:'Dip@gmail.com', phone:'08-2963727', contact:'Anat', picture:''},
                              {client:"Delifrost", email:'Delifrost@gmail.com', phone:'03-7766432', contact:'Aviv', picture:''},
                        ]
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your choice is:' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <div className="Choose">Choose Client: </div>

            <select value={this.state.value} onChange={this.handleChange} name="selection">
              <option value=""></option>
              <option value="Osem">Osem</option>
              <option value="Strauss">Strauss</option>
              <option value="Neto">Neto</option>
              <option value="Dip">Dip</option>
              <option value="Delifrost">Delifrost</option>
            </select>
          </label>
          <button type="submit" className="Submit" value="Submit">Submit</button>
          {/* <input type="text" id="submit" value={this.state.value} onChange={this.handleChange} /> */}
        </form>
      );
    }
  }