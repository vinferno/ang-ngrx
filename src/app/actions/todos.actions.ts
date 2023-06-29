import { createAction, props } from '@ngrx/store';

export const loadTodos = createAction(
  '[Todos] Load Todos',

);
export const setTodos = createAction(
  '[Todos] Set Todos',
  props<{ todos: any }>()
);




