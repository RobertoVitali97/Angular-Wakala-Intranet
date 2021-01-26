import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/News';
import { NewsService } from './news.service';
@Component({
  selector: 'wakala-homepage-news',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class HomepageNewsListComponent implements OnInit {
  news: News[] = [];
  constructor(private ns: NewsService) { }

  ngOnInit() {
    this.ns.getNews().subscribe(res => { this.news = res; });
  }
}
