import React from 'react';
import './readonlyrow.css'

export default function ReadOnlyRow({Item, handleEditClick, handleDeleteClick}) {

    return(
        <div>
            <table>
                <td>{Item.item}</td>
                <td>{Item.amount}</td>
                <td>{Item.price}</td>
                <td>{Item.discount}</td>
                <td className="Price">{Item.finalPrice}</td>
                
                <td>
                    <button type="button" onClick={(event) => handleEditClick(event, Item)}>
                        Edit
                    </button>
                    <button type="button" onClick={() => handleDeleteClick(Item.item)}>
                        Delete
                    </button>
                </td>
            </table>
        </div>
    )
}
