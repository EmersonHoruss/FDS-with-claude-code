import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/core';
import { AppRoutingModule } from 'pages';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
