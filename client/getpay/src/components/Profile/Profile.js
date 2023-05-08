import React, {Component} from 'react';
import './profile.css'
import {Consumer} from '../Context'


export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            header:"Generate profile"
        }
    }

    detectTyping = () => {
        this.setState({header:"typing..."})
    }

    detectUnTyping = () => {
        this.setState({header:"Generate Invoice"})
    }

    detectSaving = () => {
        this.setState({header:"Profile has been Saved!"})
    }


    render() {
        return(
            <Consumer>
                {
                    c => {return (
                            <form action="/" method="post">
                                <div className="header">
                                <h2 className='header'>{this.state.header}</h2>

                                <div className="InputsProfile">
                            
                                    <div id="Name">Name</div>

                                        <input type="text" id="profilename" name='profilename' placeholder="Name"
                                        onKeyDown={()=>{
                                            this.detectTyping()
                                        }}
                                        onKeyUp={()=>{
                                            setTimeout(() => {this.detectUnTyping()}, 1000)
                                        }}
                                    />

                                    <div className="Email">Email</div>

                                        <input type="email" id="email" name='email' placeholder="Email" 
                                        onKeyDown={()=>{
                                            this.detectTyping()
                                        }}
                                        onKeyUp={()=>{
                                            setTimeout(() => {this.detectUnTyping()}, 1000)
                                        }}
                                    />

                                    <div className="Phone">Phone</div>

                                        <input type="number" id="phone" name='phone' placeholder="Phone" 
                                        onKeyDown={()=>{
                                            this.detectTyping()
                                        }}
                                        onKeyUp={()=>{
                                            setTimeout(() => {this.detectUnTyping()}, 1000)
                                        }}
                                    />

                                    <div className="Contact">Contact Name</div>

                                        <input type="text" id="contactname" name='contactname' placeholder="contact" 
                                        onKeyDown={()=>{
                                            this.detectTyping()
                                        }}
                                        onKeyUp={()=>{
                                            setTimeout(() => {this.detectUnTyping()}, 1000)
                                        }}
                                    />

                                        <div className="Address">Address</div>

                                        <input type="text" id="address" name='address' placeholder="address" 
                                        onKeyDown={()=>{
                                            this.detectTyping()
                                        }}
                                        onKeyUp={()=>{
                                            setTimeout(() => {this.detectUnTyping()}, 1000)
                                        }}
                                    />
                                </div>

                                <button id="SaveButton" onClick = {() => {c.actions.addProfile()
                                            let profilename = document.getElementById('profilename').value
                                            let email = document.getElementById('email').value
                                            let phone = document.getElementById('phone').value
                                            let contactname = document.getElementById('contactname').value
                                            let address = document.getElementById('address').value
                                            let profile = {profilename: profilename, email: email, phone: phone,  contactname: contactname, address: address}
                                            this.props.addProfile(profile)
                                            this.detectSaving()
                                        }}>Save Profile</button>

                                </div>
                            </form>
            )
            }
            }
            </Consumer>
        
        )
        
    }
    
}
