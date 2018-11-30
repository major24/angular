import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { PostsService } from '../services/posts.service';

import { PostsDatabaseService } from '../services/posts.database.service';

@Injectable()
@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: 'posts.component.html',
    providers:[PostsService, PostsDatabaseService]
})


export class PostsComponent  { 
  posts: Post;

  constructor(private postService: PostsService){
        // get http data
        this.postService.getPosts()
                .subscribe(posts => {
                    this.posts = posts;
                });
  }

}

interface Post {
    id: number;
    title: string;
    body:string;
}