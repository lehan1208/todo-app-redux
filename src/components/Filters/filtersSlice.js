// const initValue = {
//   search: '',
//   status: 'All',
//   priority: [],
// };
// const filterReducer = (state = initValue, action) => {
//   switch (action.type) {
//     case 'filters/searchFilterChange':
//       return { ...state, search: action.payload };
//     case 'filters/statusFilterChange':
//       return { ...state, status: action.payload };
//     case 'filters/priorityFilterChange':
//       return { ...state, priority: action.payload };
//     default:
//       return state;
//   }
// };
// export default filterReducer;

import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    }, // action {type: 'name/key', payload: ...}
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export default filtersSlice;
