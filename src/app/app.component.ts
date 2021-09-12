import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

import { GetDataService } from './shop/services/get-data.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'shop';

  constructor(private service: GetDataService) {
  }

  ngOnInit() {
    this.service.getCategories().subscribe((data) => {
      this.service.categories = data;
      data.forEach(
        (item) => item.subCategories.forEach(
          (elem) => this.service.getGoods(`${item.id}/${elem.id}`).subscribe((newData) => this.service.goods.push(...newData))));
    });
  }
}
