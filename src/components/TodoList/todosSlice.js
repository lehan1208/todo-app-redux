// const initValue = [
//   { id: 1, name: 'Learn ReactJS', completed: true, priority: 'Medium' },
//   { id: 2, name: 'Learn Redux', completed: false, priority: 'High' },
//   { id: 3, name: 'Learn Bootstrap', completed: false, priority: 'Medium' },
// ];
// const todoReducer = (state = initValue, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [...state, action.payload];
//     case 'todoList/toggleTodoStatus':
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       );
//     default:
//       return state;
//   }
// };
// export default todoReducer;
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todoList',
  initialState: {
    status: 'idle',
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }, // action creator
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = 'idle';
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        let currentTodo = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (currentTodo !== -1) {
          state.todos[currentTodo] = action.payload;
        }
      });
  },
});

//THUNKS
// createAsyncThunk('prefix', async function())

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await axios.get('https://6293b734089f87a57ac4de6d.mockapi.io/list');
  return res.data;
});

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
  const res = await fetch('https://6293b734089f87a57ac4de6d.mockapi.io/list', {
    method: 'POST',
    body: JSON.stringify(newTodo),
  });
  const data = await res.json();
  return data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo) => {
  const res = await fetch(`https://6293b734089f87a57ac4de6d.mockapi.io/list/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  return data;
});

export default todosSlice;
