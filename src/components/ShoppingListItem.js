import '../App.css';
import { useState } from 'react';

export default function ShoppingListItem({name, id, onRemoveItem, onToggleItem, isChecked}) {
    
 
 
    return (
        <li>
            <label className= {isChecked ? "striked" : ""} >
                <input onChange={() => onToggleItem(id)} type="checkbox" checked={isChecked}/>
                {name}
            </label>
            <button onClick={() => onRemoveItem(id)}>Delete Item</button>
        </li>
    ); 
}



