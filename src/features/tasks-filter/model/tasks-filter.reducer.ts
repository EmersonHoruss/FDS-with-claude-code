import { Action, createReducer, on } from '@ngrx/store';

import { DEFAULT_FILTER_ID } from '../config';
import * as TasksFilterActions from './tasks-filter.actions';

export const TASKS_FILTER_FEATURE_KEY = 'tasksFilter';

export interface State {
  activeFilterId: number;
}

export const initialState: State = {
  activeFilterId: DEFAULT_FILTER_ID,
};

const tasksFilterReducer = createReducer(
  initialState,
  on(TasksFilterActions.filterSelected, (state, { filterId }) => ({
    ...state,
    activeFilterId: filterId,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return tasksFilterReducer(state, action);
}
