import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  console.log(onItemFormSubmit);
  const [itemName, setItemName] = useState("");
  const [itemCat, setItemCat] = useState("Produce");

  function handleItemChange(e) {
    setItemName(e.target.value)
  }

  function handleCatChange(e) {
    setItemCat(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCat
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemChange} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCatChange} value={itemCat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
