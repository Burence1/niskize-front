import { ArticlesComponent } from './components/articles/articles/articles.component';
import { LoginComponent } from './components/login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { PostsComponent } from './components/posts/posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'login',component:LoginComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'posts',component:PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
