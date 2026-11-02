import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/lib';

import { NotFoundPage } from './not-found.page';

@NgModule({
  declarations: [NotFoundPage],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: NotFoundPage }]),
  ],
})
export class NotFoundPageModule {}
