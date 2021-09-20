import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ICategory } from '../models/categories.model';
import { IGood } from '../models/goods.model';

const PATH = 'http://localhost:3004/';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public categories: ICategory[] = [];

  public category: ICategory | null = null;

  public subCategory: string = '';

  public categorysGoods: IGood[] = [];

  public displayedGoods: IGood[] = [];

  private priceOrder = false;

  private favoriteOrder = false;

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${PATH}categories`);
  }

  public getGoods(category: string): Observable<IGood[]> {
    return this.http.get<IGood[]>(`${PATH}goods/category/${category}`);
  }

  public getCategoryData(id: string): Observable<ICategory>  {
    return this.http.get<ICategory>(`${PATH}categories/${id}`);
  }

  public sortByPrice(count: number): void {
    if (this.priceOrder) {
      this.categorysGoods.sort((prev, next) => prev.price - next.price);
    } else {
      this.categorysGoods.sort((prev, next) => next.price - prev.price);
    }

    this.priceOrder = !this.priceOrder;
    this.cutGoodsArr(count);
  }

  public sortByRating(count: number): void {
    if (this.favoriteOrder) {
      this.categorysGoods.sort((prev, next) => prev.rating - next.rating);
    } else {
      this.categorysGoods.sort((prev, next) => next.rating - prev.rating);
    }

    this.favoriteOrder = !this.favoriteOrder;
    this.cutGoodsArr(count);
  }

  private cutGoodsArr(count: number): void {
    this.displayedGoods = this.categorysGoods.slice(0, count);
  }
}
