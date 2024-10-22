import { useState } from "react";
import styles from "./todo-list.module.scss";
export const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");
  const handleClick = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };
  const removeListItem = (index: number) => {
    setTodos(todos.filter((ite, i) => i !== index));
  };
  return (
    <div>
      <h1>Build a To-Do List with Add and Remove Functionality</h1>
      <div>
        <span className={styles.challengeText}>
          Challenge: Create a to-do list where users can add tasks by typing
          into an input field and pressing "Add." Each task should have a
          "Remove" button to delete the task.
        </span>
      </div>
      <div className={styles.todoContainer}>
        <div>
          <input onChange={(e) => setTodo(e.target.value)} value={todo} />
          <div>
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>

        <div>
          <ul>
            {todos.map((item, i) => (
              <li key={i}>
                {item}
                <button onClick={() => removeListItem(i)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
