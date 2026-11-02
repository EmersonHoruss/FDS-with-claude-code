import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { TasksFilterFacade } from 'features/tasks-filter';
import { Task, TaskFacade } from 'entities/task';

@Component({
  selector: 'fs-tasks-list-widget',
  templateUrl: './tasks-list.widget.html',
  styleUrls: ['./tasks-list.widget.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListWidget implements OnInit {
  @Output()
  taskOpen = new EventEmitter<Task>();

  constructor(
    public readonly taskFacade: TaskFacade,
    public readonly tasksFilterFacade: TasksFilterFacade
  ) {}

  ngOnInit(): void {
    this.taskFacade.loadTasksIfNeeded();
  }

  trackByTaskId(index: number, task: Task) {
    return task.id;
  }
}
