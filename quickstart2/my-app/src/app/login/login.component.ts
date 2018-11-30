import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(value: string): void {
    console.log(value);
    sessionStorage.setItem('userid', value);
  }

  logout(): void {
    console.log('logout');
    sessionStorage.removeItem('userid');
  }

}
