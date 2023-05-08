import React from 'react';
import './editablerow.css'

export default function EditableRow({ editFormData, handleEditFormChange, handleCancelClick }) {

    return(
        <div>
            <table>
                <td>
                    <input 
                        type="text"
                        name="Item"
                        required="required"
                        placeholder="Enter item name"
                        value={editFormData.Item}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input 
                        type="number"
                        name="Amount"
                        required="required"
                        placeholder="amount"
                        value={editFormData.Amount}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input 
                        type="number"
                        name="Price"
                        required="required"
                        placeholder="Price"
                        value={editFormData.Price}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input 
                        type="number"
                        name="Discount"
                        required="required"
                        placeholder="Discount %"
                        value={editFormData.Discount}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input 
                        type="number"
                        name="FinalPrice"
                        required="required"
                        placeholder="Final Price"
                        value={editFormData.FinalPrice}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <button type="submit">Save</button>
                    <button type="submit" onClick={handleCancelClick}>
                        Cancel
                        </button>
                </td>
            </table>
        </div>
    )
}
