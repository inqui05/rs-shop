import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IGood } from '../models/goods.model';
import { IUser } from '../models/user.model copy';

const PATH = 'http://localhost:3004/';
const TOKEN = 'Bearer 58ebfdf7b2bab0bdb97711f4';
const headers = new HttpHeaders({ Authorization: TOKEN });

@Injectable({
  providedIn: 'root'
})
export class FavoritesCartService {
  cart: string[] = [];

  favoriteId: string[] = [];

  favoriteGood: IGood[] = [];

  constructor(private http: HttpClient) { }

  public getCartAndFavoritesData(): Observable<IUser> {
    return this.http.get<IUser>(`${PATH}users/userInfo`, { headers });
  }

  public addToFavorites(id: string): Observable<string> {
    const body = { id };
    return this.http.post<string>(`${PATH}users/favorites`, body, { headers });
  }

  public removeFavorite(id: string): Observable<string> {
    return this.http.delete<string>(`${PATH}users/favorites?id=${id}`, { headers });
  }

  public addToCart(id: string): Observable<string> {
    const body = { id };
    return this.http.post<string>(`${PATH}users/cart`, body, { headers });
  }

  public removeFromCart(id: string): Observable<string> {
    return this.http.delete<string>(`${PATH}users/cart?id=${id}`, { headers });
  }
}
