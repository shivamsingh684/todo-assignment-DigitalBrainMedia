import TodoShow from './TodoShow';

function TodoList({ todos, onDelete, onEdit }) {
  const renderedTodos = todos.map((todo) => {
    return (
      <TodoShow onEdit={onEdit} onDelete={onDelete} key={todo.id} todo={todo} />
    );
  });

  return <ul className="todo-list">{renderedTodos}</ul>;
}

export default TodoList;
