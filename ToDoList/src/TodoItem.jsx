export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)} //Calls toggle function to check the box
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)} //Calls deleteTodo on click
        className="btn btn-danger"
      >
        {" "}
        Delete{" "}
      </button>
    </li>
  );
}
