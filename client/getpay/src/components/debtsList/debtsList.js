import React from 'react';
import './debtslist.css';
import {Consumer} from './../Context/index'

export default function DebtsList() {

    return (
        <div>
            <Consumer>
                {
                    d => {
                        return (
                            <div id="debts-list">
                                
                                <button id="all-debts" onClick={()=>{d.actions.getDebts()}}>all Debts</button>

                                    <div id="debts-map">
                                        
                                        {
                                            d.debts.map( debts => <h4>
                                                        {/* {debts.profileid} */}
                                                        {/* {debts.productid}, */}
                                                        {/* {debts.amount}, */}
                                                        {/* {debts.discount}, */}
                                                        {debts.finalprice}
                                                        {/* {debts.debtnumber} */}
                                                        </h4>
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
