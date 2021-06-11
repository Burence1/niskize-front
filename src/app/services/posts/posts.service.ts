import { Comments } from './../../interfaces/comments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts } from './../../interfaces/posts';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url ='https://burens-niskize.herokuapp.com/api/posts/'
  update_url ='https://burens-niskize.herokuapp.com/api/update/post/'
  single_url ='https://burens-niskize.herokuapp.com/api/post/'

  comment_url ='https://burens-niskize.herokuapp.com/api/comments/'
  update_commentUrl ='https://burens-niskize.herokuapp.com/api/update/comment/'
  single_commentUrl ='https://burens-niskize.herokuapp.com/api/comment/'

  constructor(private http:HttpClient) { }

  get(id: any): Observable<Posts> {
    return this.http.get(`${this.single_url}${id}/`);
  }

  fetchAll(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.url);
  }
  create(posts: any) {
    return this.http.post(this.url, posts);
  }
  update(id: any, posts: Posts) {
    return this.http.put(`${this.update_url}${id}/`, posts);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.update_url}${id}`);
  }
  
  // commenturls
  singleComment(id: any): Observable<Comments> {
    return this.http.get(`${this.single_commentUrl}${id}/`);
  }

  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.comment_url);
  }
  updateComment(id: any, comments: Comments) {
    return this.http.put(`${this.update_commentUrl}${id}/`, comments);
  }

  deleteComment(id: any): Observable<any> {
    return this.http.delete(`${this.update_commentUrl}${id}`);
  }
}
