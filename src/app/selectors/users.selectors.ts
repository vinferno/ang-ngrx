import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/users.reducer';
const getUsersState = createFeatureSelector<fromUser.State>('users');

export const selectUsers = createSelector(
  getUsersState,
  state => state.users
);
