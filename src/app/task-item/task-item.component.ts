import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() selectTask = new EventEmitter<Task>();
  @Output() performTask = new EventEmitter<Task>();

  executeAction(action: string): void {
    this[action].emit(this.task);
  }

  /*
    <app-task-item [myTask]>
  */


  constructor() { }

  ngOnInit() {
  }

}
