import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import SwiperCore, { Pagination } from 'swiper';

import { IGood } from '../../models/goods.model';
import { GetDataService } from '../../services/get-data.service';

SwiperCore.use([Pagination]);

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class GoodComponent implements OnInit {
  good: IGood | null = null;

  constructor(private route: ActivatedRoute, public service: GetDataService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.service.getGood(params.id).subscribe((data) => {
        this.good = data;
        this.service.getCategories().subscribe((value) => {
          const category = value.find((item) => item.id === data.category);
          if (category) {
            this.service.category = category;
            const subCategory = category.subCategories.find((item) => item.id === data.subCategory);
            if (subCategory) this.service.subCategory = subCategory;
          }
        });
      });
    });
  }
}
