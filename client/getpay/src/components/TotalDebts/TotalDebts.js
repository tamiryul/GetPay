import React from 'react';
import './totaldebts.css'

export default function TotalDebts(props) {

    return(
        <div className="TotalDebts">Total debts are: {props.totalDebts}$</div>
    )
}
