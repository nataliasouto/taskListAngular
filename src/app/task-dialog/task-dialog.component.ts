import { TaskService } from './../task.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../models/task.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  dialogTitle = 'Nova Tarefa'
  task: Task = {title: ''};

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.dialogTitle = 'Update Task';
      this.task = this.data.task;
    }
  }

  onSave() : void {
    const operation: Promise<void> = 
    (!this.data)
      ? this.taskService.create(this.task)
      : this.taskService.update(this.task);

    this.taskService.create(this.task)
      .then(() => {
        console.log('Task created!');
        this.dialogRef.close();
      });
  }

}
