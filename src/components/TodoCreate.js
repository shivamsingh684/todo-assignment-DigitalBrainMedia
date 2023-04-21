import { useState } from 'react';

function TodoCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="create-container">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={handleChange}
          className="create-input"
          type="text"
          placeholder="Add a Todo"
        />
        <button className="create-btn">Create</button>
      </form>
    </div>
  );
}

export default TodoCreate;
