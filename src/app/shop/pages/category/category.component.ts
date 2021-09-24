import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import { GetDataService } from '../../services/get-data.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  constructor(private route: ActivatedRoute, public service: GetDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.getCategoryData(params.id).subscribe((data) => this.service.category = data);
    });
  }
}
