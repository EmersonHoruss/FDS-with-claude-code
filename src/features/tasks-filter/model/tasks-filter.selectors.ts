import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAllTasks } from 'entities/task';

import { DEFAULT_FILTER_ID, TASKS_FILTERS } from '../config';
import { State, TASKS_FILTER_FEATURE_KEY } from './tasks-filter.reducer';

export const selectTasksFilterState = createFeatureSelector<State>(
  TASKS_FILTER_FEATURE_KEY,
);

export const selectActiveFilterId = createSelector(
  selectTasksFilterState,
  (state) => state.activeFilterId,
);

export const selectActiveFilter = createSelector(
  selectActiveFilterId,
  (id) =>
    TASKS_FILTERS.find((filter) => filter.id === id) ??
    TASKS_FILTERS.find((filter) => filter.id === DEFAULT_FILTER_ID),
);

export const selectFilteredTasks = createSelector(
  selectAllTasks,
  selectActiveFilter,
  (tasks, filter) =>
    tasks.filter(
      (task) =>
        (filter?.config.completed === undefined ||
          task.completed === filter.config.completed) &&
        (filter?.config.userId === undefined ||
          task.userId === filter.config.userId),
    ),
);
