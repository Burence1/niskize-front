import { Articles } from './../../interfaces/articles';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url ='https://burens-niskize.herokuapp.com/api/articles/'
  update_url ='https://burens-niskize.herokuapp.com/api/update/article/'
  single_url ='https://burens-niskize.herokuapp.com/api/article/'

  constructor(private http:HttpClient) { }

  get(id: any): Observable<Articles> {
    return this.http.get(`${this.single_url}${id}/`);
  }

  fetchAll(): Observable<Articles[]> {
    return this.http.get<Articles[]>(this.url);

  }

  create(articles: any) {
    return this.http.post(this.url, articles);
  }
  update(id: any, articles: Articles) {
    return this.http.put(`${this.update_url}${id}/`, articles);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.update_url}${id}`);
  }
}