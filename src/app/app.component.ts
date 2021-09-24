import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

import { forkJoin, Observable } from 'rxjs';

import { IGood } from './shop/models/goods.model';
import { FavoritesCartService } from './shop/services/favorites-cart.service';
import { GetDataService } from './shop/services/get-data.service';

const LOCAL_STORAGE_NAME = 'rs-shop_accessToken';
const TOKEN = 'Bearer 58ebfdf7b2bab0bdb97711f4';
const MAX_RATING = 5;

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'shop';

  constructor(private service: GetDataService, private userService: FavoritesCartService) {
    if (!localStorage.getItem(LOCAL_STORAGE_NAME)) {
      localStorage.setItem(LOCAL_STORAGE_NAME, TOKEN);
    }
  }

  ngOnInit() {
    this.getDataForSliders();
    this.getUserData();
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
        this.service.allGoods = allGoods;

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

  private getUserData(): void {
    const observables: Observable<IGood>[] = [];

    this.userService.getCartAndFavoritesData().subscribe((data) => {
      this.userService.cart = data.cart;
      this.userService.favoriteId = data.favorites;
      data.favorites.forEach((id: string) => {
        observables.push(this.service.getGood(id));
      });
      forkJoin(observables).subscribe((value) => this.userService.favoriteGood.push(...value));
    });
  }
}
