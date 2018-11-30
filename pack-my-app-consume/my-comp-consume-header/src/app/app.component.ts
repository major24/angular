import { Component } from '@angular/core';

// my ang lib packed
//import { * } from './node_modules/my-component-library/src/app/modules/header'
import { headerModule } from './header-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
