import { useState } from 'react';

function TodoEdit({ todo, onSubmit }) {
  const [title, setTitle] = useState(todo.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        value={title}
        onChange={handleChange}
        className="create-input"
        type="text"
      />
      <button className="create-btn">Save</button>
    </form>
  );
}

export default TodoEdit;
