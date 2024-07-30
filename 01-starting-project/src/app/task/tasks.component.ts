import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from '../task/task.component';
import { Task } from '../task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) fullName!: string;
  isAddingTask = false;

  tasks = DUMMY_TASKS

  get selectedUserTasks(): Task[] {
      return this.tasks.filter((t) => t.userId == this.userId)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(t => t.id != id)
  }

  onStartAddTask(userId: string) {
    this.isAddingTask = true;
  }
}
