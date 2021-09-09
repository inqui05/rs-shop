import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './components/header.component';
import { LocationComponent } from './components/location/location.component';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from './material/material.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LocationComponent,
    ContactsComponent,
    CatalogComponent,
    SearchComponent,
    UserProfileComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule,
  ]
})
export class CoreModule { }
