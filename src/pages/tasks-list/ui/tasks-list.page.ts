import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import type { Task } from 'entities/task';

@Component({
  selector: 'fs-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListPage {
  constructor(private readonly router: Router) {}

  openTask(task: Task): void {
    this.router.navigate(['/task-details', task.id]);
  }
}
