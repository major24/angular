import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    constructor(){
        console.log('logger ctr called');
    }

    log(msg: string){
        console.log('logger.log called ' + msg);
    }
}