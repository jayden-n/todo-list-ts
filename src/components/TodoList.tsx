import React from 'react';
import { Todo } from '../todo.model';
interface TodoListProps {
  items: Todo[];
  deleteHandler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.input}</span>
          <button onClick={props.deleteHandler.bind(null, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
