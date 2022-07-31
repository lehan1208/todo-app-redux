import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSlice';
import todoListReducer from '../components/TodoList/todosSlice';

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListReducer.reducer,
  },
});

export default store;
