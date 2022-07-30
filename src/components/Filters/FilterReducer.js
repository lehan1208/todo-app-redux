const initValue = {
  search: '',
  status: 'All',
  priority: [],
};
const filterReducer = (state = initValue, action) => {
  switch (action.type) {
    case 'filters/searchFilterChange':
      return { ...state, search: action.payload };
    case 'filters/statusFilterChange':
      return { ...state, status: action.payload };
    case 'filters/priorityFilterChange':
      return { ...state, priority: action.payload };
    default:
      return state;
  }
};
export default filterReducer;
