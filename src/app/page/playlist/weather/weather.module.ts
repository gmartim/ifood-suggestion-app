import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { WeatherRoutingModule } from './weather-routing.module';
import { CityComponent } from './city/city.component';
import { LatLonComponent } from './lat-lon/lat-lon.component';

@NgModule({
  imports: [ReactiveFormsModule,
    FormsModule,CommonModule, WeatherRoutingModule],
  declarations: [CityComponent, LatLonComponent],
  exports: [CityComponent, LatLonComponent]
})
export class WeatherModule {}
