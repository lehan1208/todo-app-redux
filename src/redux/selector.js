import { createSelector } from 'reselect';

const searchFilterSelector = (state) => state.filters.search;
const statusFilterSelector = (state) => state.filters.status;
const priorityFilterSelector = (state) => state.filters.priority;

const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  priorityFilterSelector,
  searchFilterSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priorities && priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities && priorities.length > 0 ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
