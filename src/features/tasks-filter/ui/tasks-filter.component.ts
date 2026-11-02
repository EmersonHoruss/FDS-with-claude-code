import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskFacade } from 'entities/task';

import { TasksFilterFacade } from '../model';

@Component({
  selector: 'fs-tasks-filter',
  templateUrl: './tasks-filter.component.html',
  styleUrls: ['./tasks-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksFilterComponent {
  constructor(
    public readonly tasksFilterFacade: TasksFilterFacade,
    public readonly taskFacade: TaskFacade,
  ) {}
}
