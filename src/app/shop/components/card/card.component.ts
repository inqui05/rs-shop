import { Component, Input } from '@angular/core';

import { IGood } from '../../models/goods.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent  {
  @Input() data?: IGood;
}
