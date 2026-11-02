import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';
import { UiKitModule } from 'shared/ui';

import { TasksFilterComponent } from './tasks-filter.component';

@NgModule({
  declarations: [TasksFilterComponent],
  imports: [SharedModule, UiKitModule],
  exports: [TasksFilterComponent],
})
export class TasksFilterUiModule {}
