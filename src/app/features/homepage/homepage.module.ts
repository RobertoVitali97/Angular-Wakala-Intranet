import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageNewsListComponent } from './components/news-list/news-list.component';
import { HomepageNewsElementComponent } from './components/news-list/components/news-element/news-element.component';
import { HomepageLinkListComponent } from './components/link-list/link-list.component';

@NgModule({
  declarations: [HomepageComponent, HomepageLinkListComponent, HomepageNewsListComponent, HomepageNewsElementComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HomepageComponent }
    ])
  ]
})
export class HomepageModule { }
