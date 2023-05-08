///// קומפוננטה לבחירת לקוח מתוך מסד הנתונים
import React from "react";
import {Consumer} from './../Context/index'

export default function ProfilesList() {

    return (
        <div>
            <Consumer>
                {
                    c => {
                        return (
                            <div id="profile-list">
                                
                                <button id="all-profiles" onClick={()=>{c.actions.getProfiles()}}>Show me all the profiles </button>

                                    <div id="profile-map">
                                        
                                        {
                                            c.profiles.map( profile => 
                                                <table id="profile-table">
                                                    <thead>
                                                        <th>Profile Name</th>
                                                        <th>Contact Name</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th>Address</th>
                                                    </thead>
                                                    <tbody>
                                                        <td>{profile.profilename}</td>
                                                        <td>{profile.contactname}</td>
                                                        <td>{profile.email}</td>
                                                        <td>{profile.phone}</td>
                                                        <td>{profile.address}</td>
                                                    </tbody>
                                                </table>
                                            )
                                        }
                                    </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        </div>
    )
}