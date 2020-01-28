import { Component } from '@angular/core';
import Amplify, { API } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amplify-app';
  notes = [];

  ngOnInit() {
    API.get('notes', '/notes', {}).then(data => {
      this.notes = data;
      console.log(data);
    });
  }
}
