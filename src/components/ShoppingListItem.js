export default function ShoppingListItem({name, id, onRemoveItem}) {
    return (
        <li>
            <label>
                <input type="checkbox"/>
                {name}
            </label>
            <button onClick={() => onRemoveItem(id)}>Delete Item</button>
        </li>
    ); 
}

//<button onClick={() => onRemoveItem(id)}>Remove Item</button>