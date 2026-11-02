import { NgModule } from '@angular/core';
import { TasksFilterUiModule } from 'features/tasks-filter';
import { ToggleTaskUiModule } from 'features/toggle-task';
import { TaskUiModule } from 'entities/task';
import { SharedModule } from 'shared/lib';
import { UiKitModule } from 'shared/ui';

import { TasksListWidget } from './tasks-list.widget';

@NgModule({
  declarations: [TasksListWidget],
  imports: [
    SharedModule,
    UiKitModule,
    TaskUiModule,
    TasksFilterUiModule,
    ToggleTaskUiModule,
  ],
  exports: [TasksListWidget],
})
export class TasksListWidgetModule {}
