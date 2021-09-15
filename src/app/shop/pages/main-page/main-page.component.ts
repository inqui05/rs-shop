import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { forkJoin, Observable } from 'rxjs';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

import { IGood } from '../../models/goods.model';
import { GetDataService } from '../../services/get-data.service';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const MAX_RATING = 5;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit{
  public randomGoods: IGood[] = [];

  public favoriteGoods: Array<IGood[]> = [];

  constructor(public service: GetDataService) {}

  ngOnInit() {
    this.getDataForSliders();
  }

  private getDataForSliders(): void {
    const observables: Observable<IGood[]>[] = [];

    this.service.getCategories().subscribe((data) => {
      this.service.categories = data;
      data.forEach(
        (item) => item.subCategories.forEach(
          (elem) => observables.push(this.service.getGoods(`${item.id}/${elem.id}`))));

      forkJoin(observables).subscribe((val) => {
        const allGoods: IGood[] = [];
        val.forEach((element) => allGoods.push(...element));

        const favorite = allGoods.filter((element) => element.rating === MAX_RATING);
        let tempArr: IGood[] = [];
        favorite.forEach((element) => {
          tempArr.push(element);

          if (tempArr.length === 6) {
            this.favoriteGoods.push(tempArr);
            tempArr = [];
          }
        });
        this.randomGoods = allGoods.sort(() => Math.random() - 0.5).slice(0,10);
      });
    });
  }
}
