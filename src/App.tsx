import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const inputHandler = (input: string) => {
    setTodos([{ id: Math.random().toString(), input: input }]);
  };

  return (
    <div className='App'>
      <NewTodo inputHandler={inputHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
