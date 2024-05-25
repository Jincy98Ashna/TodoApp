import React, { useEffect, useState } from 'react';
import { getTodos } from '../services/todoService';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await getTodos();
      setTodos(fetchedTodos);
    };

    fetchTodos();
  }, []);

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    console.log(`Removing todo with id: ${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    return filter === 'completed' ? todo.status === 'completed' : todo.status === 'ongoing';
  });

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAdd={handleAdd} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('ongoing')}>Ongoing</button>
      </div>
      <div>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
