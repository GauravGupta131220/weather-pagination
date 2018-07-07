import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  currentForecast = []; //for present temperature
  futureForecast = []; //for future temperature
  city: String;
  tempertures;
  headers: any = [];
  imageUrl;
  public currentForecastFlag: boolean = false;
  public futureForecastFlag: boolean = false;

  searchTemperature(city) {
    this.weatherService.getWeatherOfTenDays(city)
      .subscribe(results => {
        this.currentForecastFlag = true;
        this.tempertures = results;
        this.currentForecast = Object.entries(this.tempertures)[1];
        this.futureForecast = Object.entries(this.tempertures)[2];
        this.futureForecastFlag = true;
        this.imageUrl = this.currentForecast[1].condition.icon;
      })
      this.futureForecastFlag = false;
  }

  resetForecast(){
    this.currentForecastFlag = false;
    this.futureForecastFlag = false;
    this.city = "";
  }

}
