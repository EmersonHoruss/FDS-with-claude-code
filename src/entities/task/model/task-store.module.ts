import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TaskEffects } from './task.effects';
import { reducer, TASK_FEATURE_KEY } from './task.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(TASK_FEATURE_KEY, reducer),
    EffectsModule.forFeature([TaskEffects]),
  ],
})
export class TaskStoreModule {}
