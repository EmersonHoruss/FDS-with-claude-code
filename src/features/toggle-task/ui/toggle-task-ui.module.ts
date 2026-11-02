import { NgModule } from '@angular/core';
import { TaskUiModule } from 'entities/task';
import { SharedModule } from 'shared/lib';
import { UiKitModule } from 'shared/ui';

import { ToggleTaskComponent } from './toggle-task.component';

@NgModule({
  declarations: [ToggleTaskComponent],
  imports: [SharedModule, UiKitModule, TaskUiModule],
  exports: [ToggleTaskComponent],
})
export class ToggleTaskUiModule {}
