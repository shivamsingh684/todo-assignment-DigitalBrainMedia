import { useState } from 'react';
import TodoEdit from './TodoEdit';

function TodoShow({ todo, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = (
    <div className="text-box">
      <h3>{todo.title}</h3>
      <div className="buttons">
        <button className="edit" onClick={handleEditClick}>
          <i className="ph-eraser"></i>
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          <i className="ph-trash"></i>
        </button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />;
  }

  return <li className="list-item">{content}</li>;
}

export default TodoShow;
