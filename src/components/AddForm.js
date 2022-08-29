import {nanoid} from 'nanoid'

export default function AddForm({ onAddNewItem}){
  function handleSubmit(event){
   event.preventDefault();
   
   const form = event.target;
   const inputValue = form.name.value;

   console.log(inputValue);

   const addNewItem = {id:nanoid(), name: inputValue};
   
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