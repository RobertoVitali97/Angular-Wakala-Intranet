import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from 'src/app/models/News';
import { Urls } from 'src/app/utils/config';
@Injectable({ providedIn: 'root' })
export class NewsService {
  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<any[]>(Urls.info.news, { withCredentials: true });
  }
}
