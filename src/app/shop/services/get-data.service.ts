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
}
