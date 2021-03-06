import { ArticlesService } from './../../../services/articles/articles.service';
import { Articles } from './../../../interfaces/articles';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articleform = new FormGroup({
    user:new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    image: new FormControl(''),
  });

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
  
  onSubmit(articles: any) {
    this.articlesservice.create(articles).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(articles)
  }
}