import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PushNotificationsModule} from 'ng-push';
import {ApiService} from './services/api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PushNotificationsModule,
  ],
  providers: [
      ApiService,
      HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
