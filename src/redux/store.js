import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../components/Filters/FilterReducer';
import todoReducer from '../components/TodoList/TodoReducer';

const store = configureStore({
  reducer: {
    filters: filterReducer,
    todoList: todoReducer,
  },
});

export default store;
