import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './shop/pages/category/category.component';
import { FavoritesComponent } from './shop/pages/favorites/favorites.component';
import { GoodComponent } from './shop/pages/good/good.component';
import { MainPageComponent } from './shop/pages/main-page/main-page.component';
import { SubCategoryComponent } from './shop/pages/sub-category/sub-category.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'category/sub/:id', component: SubCategoryComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'good/:id', component: GoodComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
