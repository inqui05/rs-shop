import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import { GetDataService } from 'src/app/shop/services/get-data.service';

import { IGood } from '../../models/goods.model';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.sass']
})
export class SubCategoryComponent implements OnInit {
  private goodsCounts = 10;

  public isMaxCount = false;

  constructor(private route: ActivatedRoute, public service: GetDataService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.service.getCategories().subscribe((value) => {
        const category = value.find((item) => item.id === params.category);
        if (category) {
          this.service.category = category;
          const subCategory = category.subCategories.find((item) => item.id === params.subCategory);
          if (subCategory) this.service.subCategory = subCategory.name;
        }
      });
      this.service.getGoods(`${params.category}/${params.subCategory}`).subscribe((data) => {
        this.service.categorysGoods = data;
        this.cutGoodsArr(data);
      });
    });
  }

  private cutGoodsArr(data: IGood[]): void {
    if (data.length > this.goodsCounts) {
      this.service.displayedGoods = data.slice(0, this.goodsCounts);
    } else {
      this.service.displayedGoods = data;
      this.isMaxCount = true;
    }
  }

  public showMoreCard(): void {
    this.goodsCounts += 10;
    this.cutGoodsArr(this.service.categorysGoods);
  }

  public sortByPrice() {
    this.service.sortByPrice(this.goodsCounts);
  }

  public sortByRating() {
    this.service.sortByRating(this.goodsCounts);
  }
}
