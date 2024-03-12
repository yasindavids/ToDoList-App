import { useState } from "react";
import "./styles.css";

export default function App() {
  {
    //States
  }
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  //Function to add button functionality
  function handleSubmit(e) {
    e.preventDefault();

    //Array to store new tasks
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  }

  //Toggles todo tasked based on whether its been checked or not
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed }; //Creates new state object
        }
        return todo;
      });
    });
  }

  //Deletes tasks
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id); //Returns all tasks except the checked one
    });
  }
  /*---------------------------------------------------------------------------------------------------------- */
  return (
    <>
      {/*Manages button and item inputs*/}
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
      {/*List of checkboxes for task*/}
      <h1 className="header">To Do List</h1>
      <ul className="list">
        {todos.length === 0 && "Nothing To Do!"}{" "}
        {/*short circuit to print msg*/}
        {/**Returns an <li> element for each todo element */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)} //Calls toggle function to check the box
                />

                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)} //Calls deleteTodo on click
                className="btn btn-danger"
              >
                {" "}
                delete{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
