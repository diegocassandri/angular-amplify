import { Component, OnInit } from '@angular/core';
import Amplify, { API } from 'aws-amplify';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes = [];

  constructor() { }

  ngOnInit() {

    API.get('notes', '/notes', {}).then(data => {
      this.notes = data;
      console.log(data);
    });
  }

}
