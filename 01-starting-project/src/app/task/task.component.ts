import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() fullName?: string;
  //Can also use:
  //@Input() name: string | undefined

  onSelectUser(id: string) {
    console.log(`Task Component Triggered: ${id}`)
    this.fullName = DUMMY_USERS.find((item) => item.id! == id )?.fullName!
  }
}
