import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterModel } from 'shared/lib';

import { State, TASK_FEATURE_KEY, taskAdapter } from './task.reducer';

export const selectTaskState = createFeatureSelector<State>(TASK_FEATURE_KEY);

const { selectAll, selectEntities } = taskAdapter.getSelectors();

export const selectTasksLoading = createSelector(
  selectTaskState,
  (state) => state.loading,
);

export const selectTasksLoaded = createSelector(
  selectTaskState,
  (state) => state.loaded,
);

export const selectTasksError = createSelector(
  selectTaskState,
  (state) => state.error,
);

export const selectAllTasks = createSelector(selectTaskState, selectAll);

export const selectTaskEntities = createSelector(
  selectTaskState,
  selectEntities,
);

export const selectTaskById = (id: number) =>
  createSelector(selectTaskEntities, (entities) => entities[id]);

export const selectSelectedTask = createSelector(
  selectTaskEntities,
  RouterModel.selectRouteParam('id'),
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined),
);
