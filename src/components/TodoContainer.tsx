import { ChangeEvent, useState, useEffect } from 'react';
import Todo from './Todo';
import { Todo as TodoType } from '../types/Types';
import CreateTodo from './CreateTodo';

const initialTodos = [
  {
    name: 'Hoop',
    location: 'Ballard',
  },
  {
    name: 'Boxing',
    location: 'Nomad',
  },
  {
    name: 'Work',
    location: 'SLU',
  },
];

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoType[]>([...initialTodos]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    setTodos(
      initialTodos.filter((todo) => {
        if (todo.name.toLowerCase().includes(inputValue.toLowerCase()))
          return true;
        if (todo.location.toLowerCase().includes(inputValue.toLowerCase()))
          return true;
        return false;
      })
    );
  }, [inputValue, initialTodos]);

  const createTodo = (newTodo: TodoType) => {
    initialTodos.push(newTodo);
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  return (
    <>
      <CreateTodo createTodo={createTodo} />
      <input type="text" onChange={handleChange} value={inputValue} />
      {todos.map((currentTodo) => (
        <Todo name={currentTodo.name} location={currentTodo.location} />
      ))}
    </>
  );
};

export default TodoContainer;
