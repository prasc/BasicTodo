import React from 'react';
import { Todo as TodoType } from '../types/Types';

type CreateTodoTypes = {
  createTodo: (todo: TodoType) => void;
};

const CreateTodo = ({ createTodo }: CreateTodoTypes) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.elements['name'] as HTMLInputElement;
    const location = form.elements['location'] as HTMLInputElement;
    // const location = {e.target.location}
    const newTodo = {
      name: name.value,
      location: location.value,
    };

    createTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" />
      </label>
      <label htmlFor="location">
        Location:
        <input type="text" name="location" />
      </label>
      <button type="submit">Submit </button>
    </form>
  );
};

export default CreateTodo;
