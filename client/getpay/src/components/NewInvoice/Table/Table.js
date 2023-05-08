import React, { useState, Fragment } from "react";
import './table.css'
import data from './../../../data.json';
import ReadOnlyRow from './ReadOnlyRow.js';
import EditableRow from './EditableRow.js';

export default function Table() {

    const [items, setItems] = useState(data);
    const [addFormData, setAddFormData] = useState({
        Item: "",
        Amount: "",
        Price: "",
        Discount: "",
        FinalPrice: "",
    })

    const [editFormData, setEditFormData] = useState({
        Item: "",
        Amount: "",
        Price: "",
        Discount: "",
        FinalPrice: "",
    })

    const [editItemId, setEditItemId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            item: addFormData.Item,
            amount: addFormData.Amount,
            price: addFormData.Price,
            discount: addFormData.Discount,
            finalPrice: addFormData.FinalPrice,
        }
        const newItems = [...items, newItem];
        setItems(newItems);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        
        const editedItem = {
            item: editFormData.Item,
            amount: editFormData.Amount,
            price: editFormData.Price,
            discount: editFormData.Discount,
            finalPrice: editFormData.FinalPrice,
        }
        const newItems = [...items];

        const index = items.findIndex((Item) => Item.item === editItemId);

        newItems[index] = editedItem;

        setItems(newItems);
        setEditItemId(null);
    }

    const handleEditClick = (event , Item) => {
        event.preventDefault();
        setEditItemId(Item.item);

        const formValues = {
            Item: Item.Item,
            Amount: Item.Amount,
            Price: Item.Price,
            Discount: Item.Discount,
            FinalPrice: Item.FinalPrice,
        }

        setEditFormData(formValues);

    };

    const handleCancelClick = () => {
        setEditItemId(null);
    }

    const handleDeleteClick = (ItemId) => {
        const newItems = [...items];
        const index = items.findIndex((Item) => Item.item === ItemId);
        newItems.splice(index, 1);
        setItems(newItems);
    }

    const Total = (data , key) => {
        let total = 0;
        data.forEach(item => {
            total+=item[key];
        });
    }

    return (
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr id="tablehead">
                            <th>Item</th>
                            <th>Amount</th>
                            <th>Price</th>
                            <th>Discount(%)</th>
                            <th>Final Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((Item) => (
                            <Fragment>
                                {editItemId === Item.item ? (
                                    <EditableRow 
                                        editFormData={editFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                        />) : (
                                    <ReadOnlyRow
                                        Item={Item}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
            <h2 className="AddItem">Add item</h2>
            <form onSubmit={handleAddFormSubmit} className="FormAdd">
                <input 
                type="text"
                name="Item"
                required="required"
                placeholder="Item"
                onChange={handleAddFormChange}
                />
                <input 
                type="number"
                name="Amount"
                required="required"
                placeholder="Amount"
                onChange={handleAddFormChange}
                />
                <input 
                type="number"
                name="Price"
                required="required"
                placeholder="Price"
                onChange={handleAddFormChange} 
                />
                <input 
                type="number"
                name="Discount"
                required="required"
                placeholder="Discount %"
                onChange={handleAddFormChange}
                />
                <input 
                type="number"
                name="FinalPrice"
                required="required"
                placeholder="Final Price"
                onChange={handleAddFormChange}
                />
                <button type="submit" id="add">Add</button>
            </form>
        </div>
    )
}
