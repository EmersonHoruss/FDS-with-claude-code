import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToggleTaskUiModule } from 'features/toggle-task';
import { TaskUiModule } from 'entities/task';
import { SharedModule } from 'shared/lib';
import { UiKitModule } from 'shared/ui';

import { TaskDetailsPage } from './task-details.page';

@NgModule({
  declarations: [TaskDetailsPage],
  imports: [
    SharedModule,
    UiKitModule,
    TaskUiModule,
    ToggleTaskUiModule,
    RouterModule.forChild([{ path: '', component: TaskDetailsPage }]),
  ],
})
export class TaskDetailsPageModule {}
