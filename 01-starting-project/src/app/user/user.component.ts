import { Component, Input, input, computed, Output, output,EventEmitter } from '@angular/core'; //Uppercase 'Input' is a decorator, 'input' is a function.
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() selectUserEventEmitter = new EventEmitter<User>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  
  onSelectUser() { 
    this.selectUserEventEmitter.emit(this.user);
  }
}
