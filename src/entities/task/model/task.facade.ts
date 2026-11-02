import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as TaskActions from './task.actions';
import * as TaskSelectors from './task.selectors';
import type { Task } from './types';

@Injectable({ providedIn: 'root' })
export class TaskFacade {
  loaded$ = this.store.select(TaskSelectors.selectTasksLoaded);
  loading$ = this.store.select(TaskSelectors.selectTasksLoading);
  tasks$ = this.store.select(TaskSelectors.selectAllTasks);
  selectedTask$ = this.store.select(TaskSelectors.selectSelectedTask);

  constructor(private readonly store: Store) {}

  loadTasks(): void {
    this.store.dispatch(TaskActions.loadTasks());
  }

  loadTasksIfNeeded(): void {
    this.loaded$.pipe(take(1)).subscribe((loaded) => {
      if (!loaded) {
        this.loadTasks();
      }
    });
  }

  loadTaskIfNeeded(id: number): void {
    this.store
      .select(TaskSelectors.selectTaskById(id))
      .pipe(take(1))
      .subscribe((task) => {
        if (!task) {
          this.store.dispatch(TaskActions.loadTask({ id }));
        }
      });
  }

  updateTask(id: number, changes: Partial<Task>): void {
    this.store.dispatch(TaskActions.updateTask({ update: { id, changes } }));
  }
}
