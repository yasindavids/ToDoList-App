import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  {
    //States
  }
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  //Stores todos in local storage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

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
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
