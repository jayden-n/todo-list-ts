import React, { useRef } from 'react';

interface InputHandlerProps {
  inputHandler: (input: string) => void;
}

const NewTodo: React.FC<InputHandlerProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current!.value;
    props.inputHandler(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo text</label>
        <input type='text' id='todo-text' ref={inputRef} />
      </div>
      <button type='submit'>Add todo</button>
    </form>
  );
};

export default NewTodo;
