import { createAction, props } from '@ngrx/store';
import { User } from '../reducers/users.reducer';

export const addUser = createAction(
  '[Users] Add Users',
  props<{ user: User }>()
);




