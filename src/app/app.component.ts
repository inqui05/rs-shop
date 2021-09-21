import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { forkJoin, Observable } from 'rxjs';
import { IGood } from './shop/models/goods.model';
import { GetDataService } from './shop/services/get-data.service';

const MAX_RATING = 5;

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'shop';

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
            this.service.favoriteGoods.push(tempArr);
            tempArr = [];
          }
        });
        this.service.randomGoods = allGoods.sort(() => Math.random() - 0.5).slice(0,10);
      });
    });
  }
}
