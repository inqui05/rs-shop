import { Component, Input } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

import { IGood } from '../../models/goods.model';
import { FavoritesCartService } from '../../services/favorites-cart.service';
import { GetDataService } from '../../services/get-data.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.sass']
})
export class ButtonsComponent {
  @Input() data?: IGood;

  constructor(public service: GetDataService, private userService: FavoritesCartService) {}

  public addGoodToFavorites(): void {
    if (this.data) {
      this.userService.addToFavorites(this.data.id).subscribe();
      this.userService.favoriteId.push(this.data.id);
      this.service.getGood(this.data.id).subscribe((good: IGood) => this.userService.favoriteGood.push(good))
    }
  }

  public removeFavoriteGood(id: string): void {
    this.userService.removeFavorite(id).subscribe();
    this.userService.favoriteId = this.userService.favoriteId.filter((item) => item !== id);
    this.userService.favoriteGood = this.userService.favoriteGood.filter((good: IGood) => good.id !== id);
  }

  public addGoodToCart(): void {
    if (this.data) {
      this.userService.addToCart(this.data.id).subscribe();
      this.userService.cart.push(this.data.id);
    }
  }

  public removeGoodFromCart(id: string): void {
    this.userService.removeFromCart(id).subscribe();
    this.userService.cart = this.userService.cart.filter((item) => item !== id);
    console.log();
  }

  public checkFavorites(): boolean {
    if(this.data) return this.userService.favoriteId.indexOf(this.data.id) === -1 ? false : true;
    return false;
  }

  public checkCart(): boolean {
    if (this.data) return this.userService.cart.indexOf(this.data.id) === -1 ? false : true;
    return false;
  }
}
