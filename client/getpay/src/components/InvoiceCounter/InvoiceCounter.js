///// סופר את מספר החובות, בעמוד הראשי
import React from "react";
import './invoicecounter.css'

export default function InvoiceCounter(props) {

    return(
        
        <div className="counter">There are {props.invoiceCounter} invoices</div>

    )
}