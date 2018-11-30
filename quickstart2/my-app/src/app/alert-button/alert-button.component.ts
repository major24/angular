import { Component, OnInit } from '@angular/core';

import { MessageService } from '../services/message.service';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {
  content = '';
  hideContent = true;

  constructor(private msgService: MessageService) { }

  ngOnInit() {
    this.content = this.msgService.getContent();
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  getMsgWithDelay(){
    setTimeout(() => {
        this.content = this.msgService.getContentWithDelay();
    }, 1000);
  }

  clearMsg(){
    this.content = '';
  }

  time: Date;
  timerSub: Subscription; 

  getTimeWithObservable() {
    //this.msgService.getTimeWithObservable()
      //.subscribe(x => this.time = x);

      // below should be in ngOnInit()
    this.timerSub = this.msgService
      .getTimeWithObservable().subscribe(x => this.time  = x);
  }

  stopObservable(){
    this.timerSub.unsubscribe();
  }

}
