import {Component, OnInit} from '@angular/core';
import {PushNotificationsService} from 'ng-push';

import { take } from 'rxjs/operators';

import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public title = 'Web push Notifications!';
  public data: any;

  private cityId = 706483;

  constructor(private _pushNotifications: PushNotificationsService,
              private _apiService: ApiService) {
    _pushNotifications.requestPermission(); // request for permission as soon as component loads
  }

  public ngOnInit(): void {
    this._apiService.getForecast$(this.cityId).subscribe(
      res => this.data = res
    );
  }

  // our function to be called on click
  public notify(): void {
    this._apiService.getForecast$(this.cityId)
      .pipe(
        take(1)
      ).subscribe(
        (res) => {
          this.data = res;
          const date = new Date().toLocaleDateString();
          const title = this.data.name + ' Weather ' + date;
          const options = { // set options
            body: 'Now is ' + this.data.main.temp + 'C, with ' + this.data.main.humidity + '% humidity',
            icon: '//openweathermap.org/img/w/' + this.data.weather[0].icon + '.png' // adding an icon
          };
          const notify = this._pushNotifications.create(title, options).subscribe( // creates a notification
            sc => console.log(sc),
            err => console.log(err)
          );

        }
    );
  }
}
