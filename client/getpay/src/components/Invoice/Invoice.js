///// מגדיר איך בנוי חוב ואת כפתורי המחיקה
import React from 'react';
import './invoice.css'

export default function Invoice(props) {

    return(
        <div>
            <div id="details">
                {props.supplier}
                {props.debt}
                <button className="X">X</button>
                <input type="checkbox" className="check" />
            </div>
        </div>
        
    )
}