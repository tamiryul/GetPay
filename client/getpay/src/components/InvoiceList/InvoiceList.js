///// קומפוננטה שעושה מאפ לחובות ומכיל רשימת חובות מהמסד נתונים
import React, { useState } from 'react';
import Invoice from '../Invoice/Invoice.js';
import InvoiceCounter from './../InvoiceCounter/InvoiceCounter.js';
import TotalDebts from './../TotalDebts/TotalDebts';
import './invoicelist.css'
import DebtsList from './../debtsList/debtsList.js';

export default function InvoiceList(props) {

    return (
        <div>
            <InvoiceCounter invoiceCounter= {props.invoiceCounter}/>
            <div id="Gap"></div>

            <DebtsList/>

            <div className="map"> {
                        props.invoices.map( item => <Invoice supplier={item.supplier+'-'} debt={item.debt+`$`}/>)
                    }
            </div>
            <div id="Gap"></div>

            <TotalDebts totalDebts={props.totalDebts}/>

        </div>
        
    )
}