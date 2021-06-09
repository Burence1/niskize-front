import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts } from './../../interfaces/posts';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url ='http://127.0.0.1:8000/api/posts/'
  update_url ='http://127.0.0.1:8000/api/update/post/'
  single_url ='http://127.0.0.1:8000/api/post/'

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
}
