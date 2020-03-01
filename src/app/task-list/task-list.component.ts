import { Task } from './../models/task.model';
import { TaskDialogComponent } from './../task-dialog/task-dialog.component';
import { TaskService } from './../task.service';

import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]>
  selectedTask: Task;

  constructor(
    private dialog: MatDialog,
    private taskService: TaskService
  ) { }
    
  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks.valueChanges();
  }

  onPerformTask(task: Task): void {
    task.done = !task.done;
    this.taskService.update(task);
  }

  showDialog(task?: Task): void {
    console.log(task);
    this.dialog.open(TaskDialogComponent);
  }

}
