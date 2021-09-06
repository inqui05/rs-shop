import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './components/header.component';
import { LocationComponent } from './components/location/location.component';
import { MaterialModule } from './material/material.module';
import { CatalogComponent } from './components/catalog/catalog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LocationComponent,
    ContactsComponent,
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    MaterialModule,
  ]
})
export class CoreModule { }
