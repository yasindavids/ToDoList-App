import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";

export default function App() {
  {
    //States
  }

  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    // Create array of tasks
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  /*---------------------------------------------------------------------------------------------------------- */

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

  /*---------------------------------------------------------------------------------------------------------- */

  //Deletes tasks
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id); //Returns all tasks except the checked one
    });
  }

  /*---------------------------------------------------------------------------------------------------------- */

  return (
    <>
      <NewTodoForm onSubmit={addTodo} /> {/*Calling component*/}
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
                Delete{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
