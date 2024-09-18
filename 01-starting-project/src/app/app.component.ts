import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component"
import { TasksComponent } from "./task/tasks.component"

import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TaskComponent, TasksComponent]
})
export class AppComponent {
    users = DUMMY_USERS;
    selectedUserId: string = "u1"

    get selectedUser() {
        console.log("selectedUser: " + this.selectedUserId)
        return this.users.find((item) => item.id === this.selectedUserId)!
    }

    onSelectUser(user: User) {
        console.log("id: " + user.id);
        console.log("selectedUserId: " + this.selectedUserId)
        if(user.id === this.selectedUserId) { 
            console.log('Disselected user with ID: ' + user.id)
            this.selectedUserId = "";
        } else {
            console.log('Selected User with ID: ' + user.id);
            this.selectedUserId = user.id;
        }
    }
}
