import React from "react";
import {Consumer} from './../Context/index'
import './productslist.css'


export default function ProductsList() {

    return (
        <div>
            <Consumer>
                {
                    p => {
                        return (
                            <div id="products-list">
                                
                                <button id="all-products" onClick={()=>{p.actions.getProducts()}}>all products</button>

                                    <div id="products-map">
                                        
                                        {
                                            p.products.map( products => 
                                                <table id="products-table">
                                                    <thead>
                                                        <th>product name</th>
                                                        <th>product price</th>
                                                        <th>product type</th>
                                                    </thead>
                                                    <tbody>
                                                        <td>{products.productname}</td>
                                                        <td>{products.productprice}</td>
                                                        <td>{products.producttype}</td>
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
