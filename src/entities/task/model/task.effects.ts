import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { TypicodeService } from 'shared/api';

import * as TaskActions from './task.actions';

@Injectable()
export class TaskEffects {
  loadAllTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadAllTasks),
      concatMap(() =>
        this.typicodeApi.getTasksList().pipe(
          map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
          catchError((error) => {
            console.error('Error', error);
            return of(TaskActions.loadTasksFailure({ error }));
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly typicodeApi: TypicodeService
  ) {}
}
