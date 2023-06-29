import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of , mergeMap, map, catchError} from 'rxjs';
import { loadTodos, setTodos } from '../actions/todos.actions';
import { ApiService } from '../services/api.service';

@Injectable()
export class TodosEffects {


  constructor(private actions$: Actions, private api: ApiService) {}


  loadTodos$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(
        () => this.api.get('todos').pipe(
          map((res: any) => setTodos({todos: res})),
          catchError(err => of({ type: 'loadTodosError',payload: err })))
      )))

      todoById$ = createEffect(
        () => this.actions$.pipe(
          ofType(loadTodos),
          mergeMap(
            () => this.api.get('todos').pipe(
              map((res: any) => setTodos({todos: res})),
              catchError(err => of({ type: 'loadTodosError',payload: err })))
          )))
}
