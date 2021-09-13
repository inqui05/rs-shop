import { Component, Input } from '@angular/core';
import { IGood } from '../../models/goods.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.sass']
})
export class SlideComponent {
  @Input() data?: IGood;
}
