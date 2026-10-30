import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class UiKitModule {}
