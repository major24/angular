import { Component, OnInit } from '@angular/core';
import { GreeterService } from "src/app/services/greeter.service";

@Component({
  selector: 'app-greeter-with-service',
  templateUrl: './greeter-with-service.component.html',
  styleUrls: ['./greeter-with-service.component.css']
})
export class GreeterWithServiceComponent implements OnInit {

  title: string;

  constructor(private greeterService: GreeterService) { }

  ngOnInit() {
    this.title = this.greeterService.getMessage();
  }

}
