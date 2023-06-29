import { Action, createReducer, on } from '@ngrx/store';
import { setTodos } from '../actions/todos.actions';

export const todosFeatureKey = 'todos';

export interface State {
  todos: any[]
}

export const initialState: State = {
  todos: []
};

export const reducer = createReducer(
  initialState,

  on(setTodos,(state, action) => {
    console.log(action)
    return {
      ...state,
      todos: action.todos
    }
  })
);
