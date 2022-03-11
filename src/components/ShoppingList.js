import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  function onItemFormSubmit(newItem) {
    console.log(newItem)
    addItem(newItem)
  }

  const itemsToDisplay = items
    
    //select category
    .filter(item => selectedCategory === "All" ? true : item.category === selectedCategory)
    
    //search
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
        search={search}
        onSearchChange={setSearch}
        onCategoryChange={handleCategoryChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


// function ShoppingList({ items, addItem }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [search, setSearch] = useState("");
  
//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value)
//   }

//   function onItemFormSubmit(newItem) {
//     console.log(newItem)
//     addItem(newItem)
//   }



//   const itemsToDisplay = items
//     //refactor to implement multiple .filter()'s
    
//     //select category
//     .filter(item => selectedCategory === "All" ? true : item.category === selectedCategory)
//     //item.category === selectedCategory if the category is anything other than all
//     //can also be: .filter(item => selectedCategory === "All" || item.category === selectedCategory)
    
//     //search
//     .filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
//     //assess if the searched value is included in/matches the name per the data

 

//   return (
//     <div className="ShoppingList">
//       <ItemForm onItemFormSubmit={onItemFormSubmit}/>
//       <Filter 
//         search={search}
//         onSearchChange={setSearch}
//         onCategoryChange={handleCategoryChange} 
//       />
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }
