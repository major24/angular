import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Environment { 
  env: string;

  constructor(private http: Http){
      this.env = 'dev';
  }

  getEnv(){
      return this.env;
  }

  load() {
    //return this.http.get(`src/app/environment/config.dev.json`)
      //              .map(res => res.json());

      return new Promise((resolve, reject) => {
            this.http.get('src/app/environment/config.dev.json').map( res => res.json() ).catch((error: any):any => {
                console.log('Configuration file "config.dev.json" could not be read');
                resolve(true);
                return Observable.throw(error.json().error || 'Server error');
            }).subscribe( (envResponse) => {
                //this.env = envResponse;
                console.log(envResponse);
                let request:any = null;
            });
      });
  }


}