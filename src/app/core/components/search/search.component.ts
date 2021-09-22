import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';
import { IGood } from 'src/app/shop/models/goods.model';
import { GetDataService } from 'src/app/shop/services/get-data.service';

export interface User {
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<IGood[]> = new Observable;

  constructor(public service: GetDataService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        distinctUntilChanged(),
        filter((value: string): boolean => value.length >= 2),
        debounceTime(200),
        map(name => name ? this._filter(name) : this.service.allGoods.slice())
      );
  }

  displayFn(user: IGood): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): IGood[] {
    const filterValue = name.toLowerCase();

    return this.service.allGoods.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
