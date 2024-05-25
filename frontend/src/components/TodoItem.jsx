import React from 'react';
import { deleteTodo } from '../services/todoService';

function TodoItem({ todo, onDelete }) {
  const handleDelete = async () => {
    console.log(`Attempting to delete todo with id: ${todo._id}`);
    try {
      await deleteTodo(todo._id);
      console.log(`Successfully deleted todo with id: ${todo._id}`);
      onDelete(todo._id);
    } catch (error) {
      console.error('Failed to delete the todo:', error);
      alert('Failed to delete the todo. Please try again later.');
    }
  };

  return (
    <div className="todo-item">
      <span style={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}>
        {todo.description}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
