import { Component, VERSION } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

//  import * as data from './data.json';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  products: any = [];

  constructor() {}
  ngOnInit() {
   
  }
}
