import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { Task } from 'entities/task';

import { ToggleTaskService } from '../model';

@Component({
  selector: 'fs-toggle-task',
  templateUrl: './toggle-task.component.html',
  styleUrls: ['./toggle-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleTaskComponent {
  @Input()
  task!: Task;

  @Input()
  withStatus = false;

  constructor(private readonly toggleTaskService: ToggleTaskService) {}

  toggle(): void {
    this.toggleTaskService.toggle(this.task);
  }
}
