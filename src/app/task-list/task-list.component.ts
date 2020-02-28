
import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    {
      uid: '',
      title: 'Learn Angular',
      done: false
    },
    {
      uid: '',
      title: 'Learn Firebase',
      done: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onPerformTask(task: Task): void {
    console.log(task);
  }

}
