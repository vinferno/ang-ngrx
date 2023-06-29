import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from '../reducers/todos.reducer';

const getTodosState = createFeatureSelector<fromTodos.State>(fromTodos.todosFeatureKey);

export const selectTodos = createSelector(
  getTodosState,
  state => state.todos
);
