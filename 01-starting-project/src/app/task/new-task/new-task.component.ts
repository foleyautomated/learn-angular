import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() newTask = new EventEmitter<Task>();

  enteredTitle="";
  enteredSummary="";
  enteredDueDate="";



  onCancel() {
    console.log("new-task/Cancel")
    this.cancel.emit();
  }

  onSubmit() {
      console.log("new-task/onSubmit")
      let task: Task = {
        summary: this.enteredSummary,
        title: this.enteredTitle,
        dueDate: this.enteredDueDate,
        id: new Date().getMilliseconds.toString(),
        userId: ''
      }
      this.newTask.emit(task);
  }


}
