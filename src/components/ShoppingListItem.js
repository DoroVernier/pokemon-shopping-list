import '../App.css';
import { useState, useEffect } from 'react';

export default function ShoppingListItem({name, id, onRemoveItem, onToggleItem, isChecked, pokeItemInfo}) {
    
 const [pokeImage, setPokeImage] = useState("");
 useEffect(() => {
    fetch(pokeItemInfo)
    .then((response) => response.json())
    .then((data) => setPokeImage(data.sprites.default));
 }, [pokeItemInfo]);
 
    return (
        <li>
            <label className= {isChecked ? "striked" : ""} >
                <input onChange={() => onToggleItem(id)} type="checkbox" checked={isChecked}/>
                <img alt="" src={pokeImage} />    
                    {name}
            </label>
            <button onClick={() => onRemoveItem(id)}>Delete Item</button>
        </li>
    ); 
}



