import axios from 'axios';

const API_URL = 'http://localhost:5000/todos';

const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const addTodo = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export { getTodos, addTodo, deleteTodo };
