export default function AddForm({newShoppingList , onAddNewItem}){
  function handleSubmit(event){
   event.preventDefault();
   
   const form = event.target;
   const inputValue = form.name.value;

   console.log(inputValue);

   const addNewItem = {id:newShoppingList + 1, name: inputValue};
   
   onAddNewItem(addNewItem);
  console.log(addNewItem);
  }
   
  return(
  <form onSubmit={handleSubmit}>
   <label htmlFor="add">
    <input id="add" type="text" name="name"/>
      <button >
        Add Item</button>
    </label>
  </form>
    )
}