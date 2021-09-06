import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  exports: [MatMenuModule, MatAutocompleteModule, MatFormFieldModule],
})
export class MaterialModule { }
