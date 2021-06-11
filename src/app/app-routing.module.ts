import { UpdatePostsComponent } from './components/update-posts/update-posts.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateArticlesComponent } from './components/update-articles/update-articles.component';
import { ArticlesComponent } from './components/articles/articles/articles.component';
import { LoginComponent } from './components/login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { PostsComponent } from './components/posts/posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'login',component:LoginComponent},
  { path:'articles',component:ArticlesComponent},
  { path:'posts',component:PostsComponent},
  { path:'article/:id',component:UpdateArticlesComponent},
  { path:'register',component:RegisterComponent},
  {path:'post/:id',component:UpdatePostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
