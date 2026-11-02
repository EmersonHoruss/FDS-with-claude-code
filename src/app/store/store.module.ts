import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TasksFilterStoreModule } from 'features/tasks-filter';
import { TaskStoreModule } from 'entities/task';
import { environment } from 'shared/config';

import { metaReducers, ROOT_REDUCERS } from './store';

@NgModule({
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    TaskStoreModule,
    TasksFilterStoreModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: 'Angular Feature Sliced',
        })
      : [],
  ],
})
export class AppStoreModule {}
