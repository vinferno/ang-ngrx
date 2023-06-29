import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/actions/users.actions';
import { AppState } from 'src/app/reducers';
import { selectUsers } from 'src/app/selectors/users.selectors';

@Component({
  selector: 'vin-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {

  users$ = this.store.select(selectUsers);
  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(addUser({user: {id: 2, name: 'vin'}}));
  }
  ngOnInit(): void {
  }

}
