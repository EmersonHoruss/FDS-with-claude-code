import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as TaskActions from './task.actions';
import type { Task } from './types';

export const TASK_FEATURE_KEY = 'task';

export interface State extends EntityState<Task> {
  loading: boolean;
  loaded: boolean;
  error: unknown;
}

export const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = taskAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: null,
});

const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadTasks, (state) => ({
    ...state,
    loaded: false,
    loading: true,
    error: null,
  })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) =>
    taskAdapter.setAll(tasks, { ...state, loading: false, loaded: true }),
  ),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(TaskActions.loadTask, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TaskActions.loadTaskSuccess, (state, { task }) =>
    taskAdapter.upsertOne(task, { ...state, loading: false }),
  ),
  on(TaskActions.loadTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(TaskActions.updateTask, (state, { update }) =>
    taskAdapter.updateOne(update, state),
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return taskReducer(state, action);
}
