import '../App.css';
import { useState } from 'react';

export default function ShoppingListItem({name, id, onRemoveItem}) {
    
    const[isDone, setIsDone] = useState(false);
    const handleChange =   () => {
        setIsDone(!isDone);
    }
 
    return (
        <li>
            <label className= {isDone ? "striked" : ""} >
                <input onChange={handleChange} type="checkbox"/>
                {name}
            </label>
            <button  onClick={() => onRemoveItem(id)}>X</button>
        </li>
    ); 
}



