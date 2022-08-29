import { useEffect, useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import ShoppingListItem from './components/ShoppingListItem';

export default function App() {
 const ShoppingList = [
  {id: "1", name: "Potion", isDone:false},
  {id: "2", name: "Pokeball", isDone:false},
  {id: "3", name: "Para Healer", isDone:false},
  {id: "4", name: "Superball", isDone:false},
  {id: "5", name: "Masterball", isDone:false}, 
 ];
 
 const[newShoppingList , setNewShoppingList]= useState(loadFromLocal() || ShoppingList);
 const[isDone, setIsDone] = useState(false);

 useEffect(() => {
  localStorage.setItem('_ShoppingList', JSON.stringify(newShoppingList)); 

 }, [newShoppingList]); 

function toggleItem(todoId) {
  const updatedPokemons = newShoppingList.map((item) => {
    if (item.id === todoId) {
      item.isDone = !item.isDone; 
    }
    return item; 
  }); 
  setNewShoppingList(updatedPokemons); 
}

 function loadFromLocal() {
  try {
    return JSON.parse(localStorage.getItem('_ShoppingList')); 
  } catch (error) {
    console.error(error);
    return false; 
  }
 }


 function StrikeThroughItem ({onChangeItem }){
    
  setIsDone(isDone.filter((input) => ShoppingListItem.id = onChangeItem ? input.className.striked : false ));
}


 function addItem(addNewItem){
  setNewShoppingList([addNewItem, ...newShoppingList])
 }

 function removeItem(id) {
setNewShoppingList(newShoppingList.filter((ShoppingListItem) => ShoppingListItem.id !== id)); 
 }

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
     onToggleItem={toggleItem}
     isChecked={ShoppingList.isDone}
     />
     
    ))}

   </ul>



    </div>
  );
}

