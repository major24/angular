import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { PostsComponent } from './components/posts.component';
import { routing } from './app.routing';
import { LoggerService } from './services/logger.service';

import {Environment } from './environment/environment';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, HomeComponent, UserComponent, AboutComponent, PostsComponent ],
  providers: [ LoggerService, Environment],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor(private env: Environment){
    console.log('app.module starting');
    console.log(Environment);
    //ec = new Environment();
    console.log(env.getEnv());

    //console.log(env.load());
    //var server, dbkey, data;
    //env.load();
      //.subscribe(data => {
        //server = data.server;
        //dbkey = data.dbkey;
      //});
      //console.log(server);
    /*        this.postService.getPosts()
                .subscribe(posts => {
                    this.posts = posts;
                }); */
  }
  
}
