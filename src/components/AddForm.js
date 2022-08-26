export default function AddForm({newItem, onAddNewItem}){
  function handleSubmit(event){
   event.preventdefault();
   const inputValue = event.target.title.value
   console.log(inputValue);

   const addNewItem = {id:newItem + 1, name: inputValue};
   
   onAddNewItem(newItem);
  
  }
   
  return(
  <form onSubmit={handleSubmit}>
   <label htmlFor="add">
    <input id="add" type="text" />
      <button >
        Add Item</button>
    </label>
  </form>
    )
}