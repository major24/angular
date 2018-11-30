import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MessageService {
  content = 'you have been warned!';

  constructor() { }

  getContent(){
    return 'you have been warned! from message service.';
  }

  getContentWithDelay(): string {
      return 'second message from service.(DELAY)';
  }

  private clock: Observable<Date>;

  getTimeWithObservable(): Observable<Date> {
      this.clock = Observable.interval(1000).map(tick => new Date()).share();
      return this.clock;
  }
}
