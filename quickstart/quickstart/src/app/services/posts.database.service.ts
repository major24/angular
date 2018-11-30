import { Injectable } from '@angular/core';

@Injectable()
export class PostsDatabaseService {
    constructor(){
        console.log('posts dbservice ctr called');
    }

    getDbData(){
        console.log('calling db data');
    }
}