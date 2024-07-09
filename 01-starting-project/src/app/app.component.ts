import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component"
import { DUMMY_USERS } from './dummy-users';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TaskComponent]
})
export class AppComponent {
    users = DUMMY_USERS;
    selectedUserId: string = "u1"

    get selectedUser() {
        return this.users.find((item) => item.id === this.selectedUserId)!
    }

    onSelectUser(id: string) {
        console.log('Selected User with ID: ' + id);
        this.selectedUserId = id;

    }
}
