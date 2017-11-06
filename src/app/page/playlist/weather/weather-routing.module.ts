import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityComponent } from './city/city.component';
import { LatLonComponent } from './lat-lon/lat-lon.component';

const routes: Routes = [
  {
    path: 'city',
    component: CityComponent
  },
  {
    path: 'lat-lon',
    component: LatLonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule {}
