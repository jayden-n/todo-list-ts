import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const [inputData, setInputData] = useState('');

  const todos = [{ id: 1, text: 'Finish the course' }];

  const inputHandler = (input: string) => {
    console.log(input);
  };

  return (
    <div className='App'>
      <NewTodo inputHandler={inputHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
