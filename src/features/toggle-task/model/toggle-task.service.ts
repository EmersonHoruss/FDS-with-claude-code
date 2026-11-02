import { Injectable } from '@angular/core';
import { Task, TaskFacade } from 'entities/task';

@Injectable({ providedIn: 'root' })
export class ToggleTaskService {
  constructor(private readonly taskFacade: TaskFacade) {}

  toggle(task: Task): void {
    this.taskFacade.updateTask(task.id, { completed: !task.completed });
  }
}
