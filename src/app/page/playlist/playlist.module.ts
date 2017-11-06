import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';

import { WeatherModule } from './weather/weather.module';

@NgModule({
  imports: [CommonModule, PlaylistRoutingModule, WeatherModule],
  exports: [PlaylistRoutingModule],
  declarations: []
})
export class PlaylistModule {}
