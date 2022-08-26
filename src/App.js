import { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import ShoppingListItem from './components/ShoppingListItem';

export default function App() {
 const ShoppingList = [
  {id: "1", name: "Potion"},
  {id: "2", name: "Pokeball"},
  {id: "3", name: "Para Healer"},
  {id: "4", name: "Superball"},
  {id: "5", name: "Masterball"}, 
 ]
 
 const[addItem , setAddItem]= useState(ShoppingList);

 function addNewItem(newItem){
setAddItem([newItem, ...ShoppingList])
 }



  

  return (
  
  <div className="App">
   <h1>Pokemon Shopping-List</h1>
  <AddForm addNewItem={addItem.length} onAddNewItem={addNewItem}/>

   <ul>
    {ShoppingList.map((item) => (
     <ShoppingListItem
     key={item.id}
     id={item.id} 
     name={item.name}/>
    ))}

   </ul>



    </div>
  );
}

