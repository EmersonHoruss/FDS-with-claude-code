import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducer, TASKS_FILTER_FEATURE_KEY } from './tasks-filter.reducer';

@NgModule({
  imports: [StoreModule.forFeature(TASKS_FILTER_FEATURE_KEY, reducer)],
})
export class TasksFilterStoreModule {}
