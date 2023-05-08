///// מגדיר הפניות ללינקים בראש העמוד
import React from "react";
import {NavLink} from 'react-router-dom';
import './links.css'


export default function Links() {

    return(
        <div className="main-link">
            <header>
                <nav className="menu">
                    <li><NavLink to="/main" id="main">Main</NavLink></li>
                    <li><NavLink to="/NewInvoice" id="NewInvoice">New Invoice</NavLink></li>
                    <li><NavLink to="/Profile" id="Profile">New Profiles</NavLink></li>
                    <li><NavLink to="/ProfilesList" id="ProfilesList">All Profiles</NavLink></li>
                </nav>
            </header>
        </div>
    )
}