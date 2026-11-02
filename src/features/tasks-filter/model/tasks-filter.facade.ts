import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { TASKS_FILTERS } from '../config';
import * as TasksFilterActions from './tasks-filter.actions';
import * as TasksFilterSelectors from './tasks-filter.selectors';

@Injectable({ providedIn: 'root' })
export class TasksFilterFacade {
  readonly filters = TASKS_FILTERS;
  activeFilterId$ = this.store.select(
    TasksFilterSelectors.selectActiveFilterId,
  );
  filteredTasks$ = this.store.select(TasksFilterSelectors.selectFilteredTasks);

  constructor(private readonly store: Store) {}

  selectFilter(filterId: number): void {
    this.store.dispatch(TasksFilterActions.filterSelected({ filterId }));
  }
}
