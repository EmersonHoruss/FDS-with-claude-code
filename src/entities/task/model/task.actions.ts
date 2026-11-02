import type { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import type { Task } from './types';

export const loadTasks = createAction('[Task/API] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Task/API] Load Tasks Success',
  props<{ tasks: Task[] }>(),
);
export const loadTasksFailure = createAction(
  '[Task/API] Load Tasks Failure',
  props<{ error: unknown }>(),
);

export const loadTask = createAction(
  '[Task/API] Load Task',
  props<{ id: number }>(),
);
export const loadTaskSuccess = createAction(
  '[Task/API] Load Task Success',
  props<{ task: Task }>(),
);
export const loadTaskFailure = createAction(
  '[Task/API] Load Task Failure',
  props<{ error: unknown }>(),
);

export const updateTask = createAction(
  '[Task] Update Task',
  props<{ update: Update<Task> }>(),
);
