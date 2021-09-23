import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

import { forkJoin, Observable } from 'rxjs';

import { IGood } from '../../models/goods.model';
import { FavoritesCartService } from '../../services/favorites-cart.service';
import { GetDataService } from '../../services/get-data.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent {
  constructor(public userService: FavoritesCartService) { }
}
