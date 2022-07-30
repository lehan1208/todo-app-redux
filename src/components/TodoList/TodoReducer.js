const initValue = [
  { id: 1, name: 'Learn ReactJS', completed: true, priority: 'Medium' },
  { id: 2, name: 'Learn Redux', completed: false, priority: 'High' },
  { id: 3, name: 'Learn Bootstrap', completed: false, priority: 'Medium' },
];
const todoReducer = (state = initValue, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload];
    case 'todoList/toggleTodoStatus':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};
export default todoReducer;
