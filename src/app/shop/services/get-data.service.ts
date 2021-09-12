import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ICategory } from '../models/categories.model';
import { IGood } from '../models/goods.model';

const path = 'http://localhost:3004/';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public goods: IGood[] = [];

  public categories: ICategory[] = [];
  constructor(private http: HttpClient) { }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${path}categories`);
  }

  public getGoods(category: string): Observable<IGood[]> {
    return this.http.get<IGood[]>(`${path}goods/category/${category}`);
  }
}
