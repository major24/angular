import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  template: `
    <h2>Observables Test Page</h2>
    
    <div>Value:</div>
    <div *ngFor="let value of values">{{ value }}</div>

    <div>Error</div>
    <div>{{errors}}</div>

    <div>Finished</div>
    <div>{{finished}}</div>

    <div>
        <button style="margin-top: 2rem;" (click)="start()">Start</button>
    </div>
  `
})

export class ObservablesComponent {
    private data: Observable<Array<number>>;
    private values: Array<any> = [];
    private anyErrors: boolean;
    private finished: boolean;

    constructor(){}

    start(){
        console.log('start called');
        this.data = new Observable(obsv => {

            setTimeout(() => {
                console.log('step1500');
                obsv.next(20);
            }, 1500);

            setTimeout(() => {
                console.log('step1000');
                obsv.next(24);
            }, 1000);

            setTimeout(() => {
                console.log('step-comp');
                obsv.complete();
            }, 3000);

            //this.values.push(77);
        });

        let subscription = this.data.subscribe(
          val => {
              console.log('val coming in=' + val);
              this.values.push(val)},

          error => this.anyErrors = true,
          () => this.finished = true
      );
    }




}