import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import { ICategory } from '../../models/categories.model';

const PATH = 'http://localhost:3004/categories/';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  public category: ICategory | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.http.get<ICategory>(`${PATH}${params.id}`).subscribe((data) => this.category = data);
    });
  }
}
