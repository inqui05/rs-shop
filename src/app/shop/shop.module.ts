import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwiperModule } from 'swiper/angular';

import { SliderComponent } from './components/slider/slider.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SwiperModule,
  ],
})
export class ShopModule { }
