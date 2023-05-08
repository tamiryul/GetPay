import React, {Component } from 'react';
import './newinvoice.css';
import Table from './Table/Table.js';
import Clients from './../Clients/Clients.js';
import ProductsList from './../productsList/productsList.js';

export default class NewInvoice extends Component {

    constructor(props) {
        super(props)
        this.state = {
            header:"Generate Invoice"
        }
    }

    render() {
        return(
            <div className='main'>
                <h2 className='header'>{this.state.header}</h2>
                <div>

                    <ProductsList />

                    <h4>Client</h4>

                    <Clients />

                    <div className="line clients"></div>

                    {/* <div className="image"></div> */}
                    <input type="text" value={this.state.value} onChange={this.handleChange} id="supplier" placeholder="supplier"/>
                    {/* <input type="text" id="supplier" placeholder="supplier"/> */}

                    <div className="gap"></div>

                    <Table />

                    <div className="line"></div>

                    <div className="TotalInvoice">Total Invoice Price:</div>

                    <input type="number" id="debt" placeholder="Debt"/>

                    <div className="gap"></div>

                    <button onClick = {() => {
                        let supplier = document.getElementById('supplier').value
                        let debt = document.getElementById('debt').value 
                        let invoice = {supplier: supplier, debt: debt }
                        this.props.addInvoice(invoice)
                        this.props.addDebt(debt)
                    }} id="Save"> Save </button>

                    <div className="gap"></div>

                </div>
            </div>
        )
    }
}

