import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/tasks-list', pathMatch: 'full' },
  {
    path: 'tasks-list',
    loadChildren: () =>
      import('pages/tasks-list').then((m) => m.TasksListPageModule),
  },
  {
    path: 'task-details/:id',
    loadChildren: () =>
      import('pages/task-details').then((m) => m.TaskDetailsPageModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('pages/not-found').then((m) => m.NotFoundPageModule),
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
