import { Component } from '@angular/core';

import { GetDataService } from 'src/app/shop/services/get-data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent {
  constructor(public service: GetDataService) {}
}
