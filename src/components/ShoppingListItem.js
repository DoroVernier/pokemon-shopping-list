export default function ShoppingListItem({name, id}) {
    return (
        <li>
            <label>
                <input type="checkbox"/>
                {name}
            </label>
        </li>
    )
}