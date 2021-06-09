import { ArticlesService } from './../../../services/articles/articles.service';
import { Articles } from './../../../interfaces/articles';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Articles[] = [];
  constructor(private articlesservice:ArticlesService) { }



  findArticles() {
    this.articlesservice.fetchAll().subscribe(
      (res) => {
        this.articles = res

      }, error => {
        console.error(error)
      }
    );
  }


  ngOnInit(): void {
    this.findArticles()
  }
}