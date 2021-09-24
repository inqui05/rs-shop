import { Component, ViewEncapsulation } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { GetDataService } from '../../services/get-data.service';

SwiperCore.use([Autoplay, Pagination, Navigation]);

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent {
  constructor(public service: GetDataService) {}
}
