import { Action, createReducer, on } from '@ngrx/store';
import { addUser } from '../actions/users.actions';

export interface User{
  id: number;
  name: string;
}
export const usersFeatureKey = 'users';

export interface State {
  users: User[];
  selectedUserId: number | null;
}

export const initialState: State = {
  users: [{id: 1, name: 'vin'}],
  selectedUserId: null
};

export const reducer = createReducer(
  initialState,
  on(addUser, (state, action) => {
    return {
      ...state,
      users: [...state.users, action.user]
    }
  })
);
