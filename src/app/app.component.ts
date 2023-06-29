import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTodos } from './actions/todos.actions';
import { addUser } from './actions/users.actions';
import { AppState } from './reducers';
import { selectTodos } from './selectors/todos.selectors';
import { selectUsers } from './selectors/users.selectors';

@Component({
  selector: 'vin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-ngrx';
  users$ = this.store.select(selectUsers);
  todos$ = this.store.select(selectTodos);
  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(addUser({user: {id: 2, name: 'vin'}}));
    this.store.dispatch(loadTodos());
  }
}
