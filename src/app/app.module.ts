import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { WeatherService } from './weather.service'
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { WeatherSearchComponent } from './weather-home/weather-search/weather-search.component';
import { WeatherDetailsComponent } from './weather-home/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    WeatherSearchComponent,
    WeatherDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
