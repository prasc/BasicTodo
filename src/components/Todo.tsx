import type { Todo } from '../types/Types';

const Todo = ({ name, location }: Todo): JSX.Element => {
  return (
    <div>
      <h2>
        {name} @ {location}
      </h2>
    </div>
  );
};

export default Todo;

// Create a Todo component that takes two props (location, name)
