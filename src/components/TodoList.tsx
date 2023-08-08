import React from 'react';

interface TodoListProps {
  items: { id: string; input: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.input}</li>
      ))}
    </ul>
  );
};

export default TodoList;
