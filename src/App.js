import { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {
  const ls = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(ls ?? []);
  window.localStorage.setItem('todos', JSON.stringify(todos));

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => {
      // FKT
      return todo.id !== id;
    });

    setTodos(updatedTodos);
  };

  const createTodo = (title) => {
    const id = Math.round(Math.random() * 999);

    const updatedTodos = [...todos, { id, title }];
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoCreate onCreate={createTodo} />
      <h2 className="h-todo">To-do's</h2>
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
    </div>
  );
}

export default App;
