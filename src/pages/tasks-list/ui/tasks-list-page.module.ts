import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TasksListWidgetModule } from 'widgets/tasks-list';

import { TasksListPage } from './tasks-list.page';

@NgModule({
  declarations: [TasksListPage],
  imports: [
    TasksListWidgetModule,
    RouterModule.forChild([{ path: '', component: TasksListPage }]),
  ],
})
export class TasksListPageModule {}
