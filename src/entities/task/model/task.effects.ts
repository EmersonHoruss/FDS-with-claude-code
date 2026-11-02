import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { TaskApi } from '../api';
import * as TaskActions from './task.actions';

@Injectable()
export class TaskEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      concatMap(() =>
        this.taskApi.getTasks().pipe(
          map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
          catchError((error) => of(TaskActions.loadTasksFailure({ error }))),
        ),
      ),
    ),
  );

  loadTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTask),
      concatMap(({ id }) =>
        this.taskApi.getTask(id).pipe(
          map((task) => TaskActions.loadTaskSuccess({ task })),
          catchError((error) => of(TaskActions.loadTaskFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly taskApi: TaskApi,
  ) {}
}
