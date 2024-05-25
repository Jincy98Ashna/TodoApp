import React, { useState } from 'react';
import { addTodo } from '../services/todoService';

function AddTodo({ onAdd }) {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('ongoing');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { description, status };
    const savedTodo = await addTodo(newTodo);
    onAdd(savedTodo);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
