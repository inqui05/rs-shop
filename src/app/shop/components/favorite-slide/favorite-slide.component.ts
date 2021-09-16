import { Component, Input } from '@angular/core';
import { IGood } from '../../models/goods.model';

@Component({
  selector: 'app-favorite-slide',
  templateUrl: './favorite-slide.component.html',
  styleUrls: ['./favorite-slide.component.sass']
})
export class FavoriteSlideComponent {
  @Input() data?: IGood;
}
