import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SwiperModule } from 'swiper/angular';

import { SlideComponent } from './components/slide/slide.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FavoriteSlideComponent } from './components/favorite-slide/favorite-slide.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SlideComponent,
    FavoriteSlideComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SwiperModule,
    RouterModule,
  ],
})
export class ShopModule { }
