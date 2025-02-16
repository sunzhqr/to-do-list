import { useState } from "react";
import "./styles.css";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="todo-item">
      <div className="task-info">
        <p className={todo.completed ? "completed" : ""}>{todo.body}</p>
      </div>
      <div className="buttons">
        <button onClick={() => onToggle(todo)} className="toggle-btn">
          {todo.completed ? "In Progress" : "Complete"}
        </button>
        <button onClick={() => setShowConfirm(true)} className="delete-btn">
          Delete
        </button>
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to delete this task?</p>
            <div className="modal-buttons">
              <button onClick={() => onDelete(todo.id)} className="confirm-btn">
                Yes
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
