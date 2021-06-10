import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles/articles.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { UsersComponent } from './components/users/users/users.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { UpdateArticlesComponent } from './components/update-articles/update-articles.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdatePostsComponent } from './components/update-posts/update-posts.component';



@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PostsComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    UpdateArticlesComponent,
    RegisterComponent,
    UpdatePostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
