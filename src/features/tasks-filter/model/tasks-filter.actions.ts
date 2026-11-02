import { createAction, props } from '@ngrx/store';

export const filterSelected = createAction(
  '[Tasks Filter] Filter Selected',
  props<{ filterId: number }>(),
);
