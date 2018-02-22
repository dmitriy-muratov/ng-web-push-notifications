import { Component } from '@angular/core';
import {PushNotificationsService} from 'ng-push';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Web push Notifications!';

  constructor(private _pushNotifications: PushNotificationsService) {
    _pushNotifications.requestPermission(); // request for permission as soon as component loads
  }

  // our function to be called on click
  notify() {
    const options = { // set options
      body: 'This is some text which you read now. Thank you!',
      icon: 'assets/images/edit.png' // adding an icon
    };
    const notify = this._pushNotifications.create('Me welcomes you', options).subscribe( // creates a notification
      res => console.log(res),
      err => console.log(err)
    );
  }

}
