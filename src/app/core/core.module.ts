import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './components/header.component';
import { LocationComponent } from './components/location/location.component';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LocationComponent,
    ContactsComponent,
    CatalogComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    MaterialModule,
  ]
})
export class CoreModule { }
