import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from 'src/app/utils/config';
@Injectable({ providedIn: 'root' })
export class SidenavService {
  Menu: any = [];
  constructor(private http: HttpClient) { }
  loadMenu() {
    this.http.get(Urls.menu.menu, { withCredentials: true }).subscribe(res => this.Menu = res);
  }
}
