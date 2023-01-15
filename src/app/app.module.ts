import { NgModule } from '@angular/core';
import { HammerModule, BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [BrowserModule, HammerModule, HighchartsChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
