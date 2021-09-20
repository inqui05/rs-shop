import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SwiperModule } from 'swiper/angular';

import { SlideComponent } from './components/slide/slide.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FavoriteSlideComponent } from './components/favorite-slide/favorite-slide.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';
import { CardComponent } from './components/card/card.component';
import { RatingComponent } from './components/rating/rating.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AvailableNowDirective } from './directives/available-now.directive';

@NgModule({
  declarations: [
    MainPageComponent,
    SlideComponent,
    FavoriteSlideComponent,
    CategoryComponent,
    SubCategoryComponent,
    CardComponent,
    RatingComponent,
    ButtonsComponent,
    AvailableNowDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SwiperModule,
    RouterModule,
  ],
})
export class ShopModule { }
