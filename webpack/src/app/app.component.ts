import { Component } from '@angular/core';

import '../assets/css/styles.css';
const imgAng = require("./../assets/images/flower1.jpg");

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  img_ang = imgAng 
}
