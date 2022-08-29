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
 
 const[newShoppingList , setNewShoppingList]= useState(ShoppingList);
 const[isDone, setIsDone] = useState(false);

 function StrikeThroughItem ({onChangeItem }){
    
  setIsDone(isDone.filter((input) => ShoppingListItem.id = onChangeItem ? input.className.striked : false ));
}


 function addItem(addNewItem){
  setNewShoppingList([addNewItem, ...newShoppingList])
 }

 function removeItem(id) {
setNewShoppingList(newShoppingList.filter((ShoppingListItem) => ShoppingListItem.id !== id)); 
 }
console.log(removeItem);



  return (
  
  <div className="App">
   <h1>Pokemon Shopping-List</h1>
  <AddForm  onAddNewItem={addItem}/>

   <ul>
    {newShoppingList.map((ShoppingList) => (
     <ShoppingListItem
     key={ShoppingList.id}
     id={ShoppingList.id} 
     name={ShoppingList.name} 
     onRemoveItem={removeItem}
     onChangeItem={StrikeThroughItem}
     />
     
    ))}

   </ul>



    </div>
  );
}

