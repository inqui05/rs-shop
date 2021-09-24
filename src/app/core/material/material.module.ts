import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatMenuModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule],
  exports: [MatMenuModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
