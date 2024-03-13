import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  //Function to add button functionality
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return; // checks if input is empty
    onSubmit(newItem); //adds input
    setNewItem("");
  }

  /*---------------------------------------------------------------------------------------------------------- */

  return (
    //Manages button and item inputs
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form row">
        <label htmlFor="item">New Task: </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} //Sets input to new item
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
