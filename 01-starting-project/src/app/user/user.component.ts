import { Component, Input } from '@angular/core';
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
  @Input() avatar!: string; //Using a "!" becasue we know that we're going to set 'avatar' in the html
  @Input() name!: string; 
  
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  
  onSelectUser() { }
}
