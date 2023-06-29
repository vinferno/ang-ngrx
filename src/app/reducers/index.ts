import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromUser from './users.reducer';
import * as fromTodos from './todos.reducer';

export interface AppState {
  [fromUser.usersFeatureKey]: fromUser.State;
  [fromTodos.todosFeatureKey]: fromTodos.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromUser.usersFeatureKey]: fromUser.reducer,
  [fromTodos.todosFeatureKey]: fromTodos.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
