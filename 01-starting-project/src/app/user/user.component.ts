import { Component, Input, input, computed } from '@angular/core'; //Uppercase 'Input' is a decorator, 'input' is a function.
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

  //DIFFERENT INPUT SYNTAX:
  //@Input({required: true}) avatar!: string; //Using a "!" becasue we know that we're going to set 'avatar' in the html
  //@Input({required: true}) name!: string; 
  
  //avatar = input<string>('Avatar Default Value Here');
  //can also use:
  avatar = input.required<string>(); //Similar to using '@Input' 
  name = input.required<string>(); //Similar to using '@Input' 

  
  //Abandon getter in favor of the 'Computed' Function
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar(); 
  })

  
  onSelectUser() { }
}
