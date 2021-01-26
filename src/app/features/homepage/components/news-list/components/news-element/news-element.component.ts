import { Component, Input } from '@angular/core';
import { News } from 'src/app/models/News';
@Component({
  selector: 'wakala-homepage-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.scss']
})
export class HomepageNewsElementComponent {
  @Input() item: News;
}
