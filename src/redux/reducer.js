import { combineReducers } from 'redux';

import filterReducer from '../components/Filters/FilterReducer';
import todoReducer from '../components/TodoList/TodoReducer';

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoReducer(state.todoList, action),
//   };
// };
// Giống nhau
const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoReducer,
});

export default rootReducer;
