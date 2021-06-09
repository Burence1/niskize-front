import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles/articles.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { UsersComponent } from './components/users/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
