import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PushNotificationsModule} from 'ng-push';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PushNotificationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
