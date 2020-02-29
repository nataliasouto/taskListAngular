import { TaskService } from './../task.service';

import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]>
  selectedTask: Task;

  constructor(
    private taskService: TaskService
  ) { }
    
  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks.valueChanges();
  }

  onPerformTask(task: Task): void {
    console.log(task);
  }

}
