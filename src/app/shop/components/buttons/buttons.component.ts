import { Component, Input } from '@angular/core';

import { IGood } from '../../models/goods.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.sass']
})
export class ButtonsComponent {
  @Input() data?: IGood;
}
