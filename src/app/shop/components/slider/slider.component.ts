import { Component, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent {

}
