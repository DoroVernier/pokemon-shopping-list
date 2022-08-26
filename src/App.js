import './App.css';
import ShoppingListItem from './components/ShoppingListItem';

export default function App() {
 const ShoppingList = [
  {id: "1", name: "Potion"},
  {id: "2", name: "Pokeball"},
  {id: "3", name: "Para Healer"},
  {id: "4", name: "Superball"},
  {id: "5", name: "Masterball"}, 
 ]
 console.log(ShoppingList); 
 
  return (
  
  <div className="App">
   <h1>Pokemon Shopping-List</h1>

   <ul>
    {ShoppingList.map((item) => (
     <ShoppingListItem
     key={item.id}
     id={item.id} 
     name={item.name}/>
    ))}

   <li><input  type="checkbox"/>{}</li> 

   </ul>

    </div>
  );
}

