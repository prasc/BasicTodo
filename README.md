Make a Todo List

- Each Todo can have a: location, name
- Should be able to filter the todo by name via a SearchBar that will do a substring match
- There should be a dropdown where you can filter by a list of locations
- You should be able to create todo items via some textfields and a submit button

1. Create a Todo component that takes two props (location, name)
2. Parent component will render both the list of Todo but also a search bar
3. Listener in parent component that filters the list of todos based on the input value

4. CreateTodo component which:

- Has a form with a text area and submit button
- Calls a handleSubmit from the parent and passes Todo information (name, location) which adds it to local state of parent
# BasicTodo
