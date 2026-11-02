import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';
import { UiKitModule } from 'shared/ui';

import { TaskStatusPipe } from '../lib';
import { TaskCardComponent } from './task-card.component';
import { TaskRowComponent } from './task-row.component';

@NgModule({
  declarations: [TaskCardComponent, TaskRowComponent, TaskStatusPipe],
  imports: [SharedModule, UiKitModule],
  exports: [TaskCardComponent, TaskRowComponent, TaskStatusPipe],
})
export class TaskUiModule {}
