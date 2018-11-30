import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoggerService } from './logger.service';

import { PostsDatabaseService } from './posts.database.service';

@Injectable()
export class PostsService {

    constructor(private http: Http, 
                private loggerService: LoggerService, 
                private PostsDatabaseService: PostsDatabaseService){

        console.log('post srv called');
    }

    getPosts(){
        this.loggerService.log('calling from getPosts');

        this.PostsDatabaseService.getDbData();

        return this.http.get('https://jsonplaceholder.typicode.com/posts')
                    .map(res => res.json());
    }
}