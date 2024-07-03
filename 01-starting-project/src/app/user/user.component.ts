import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]

  clickCounter = 1;

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    console.log(`Clicked ${this.clickCounter} times! New User ${this.selectedUser.name}`)
    this.clickCounter+=1;
    randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex]
  }
}
