import React, { useState } from "react";
function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Mango"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div className="container">
      <h2>List of Fruits</h2>
      <ul>
        {foods.map((food, index) => (
          <li className="listEle" key={index}
            onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Enter Food name" id="foodInput" />
      <br />
      <button className="btn" onClick={handleAddFood}> Add Fruit </button>
    </div>
  );
}
export default MyComponent;
