import { Component } from '@angular/core';

@Component({
  template: `
    <h2>Customer Page</h2>
    <p>{{title}}</p>
  `
})
export class CustomerComponent {
  title = 'Customer';
}