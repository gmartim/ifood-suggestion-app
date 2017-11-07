import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import './rxjs-operators';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';

import { PlaylistModule } from './page/playlist/playlist.module';

import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    PlaylistModule,
    ServiceModule
  ],
  exports: [ReactiveFormsModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
