import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const inputHandler = (input: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), input: input },
    ]);
  };

  const deleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className='App'>
      <NewTodo inputHandler={inputHandler} />
      <TodoList items={todos} deleteHandler={deleteHandler} />
    </div>
  );
};

export default App;
