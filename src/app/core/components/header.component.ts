import { Component } from '@angular/core';

import { GetDataService } from 'src/app/shop/services/get-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor(public service: GetDataService) { }
}
