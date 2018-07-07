import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() futureForecast;

  forecast;
  weekForecast = [];
  p: number = 1;

  constructor() { }

  ngOnInit() {
    this.forecast = this.futureForecast;
    this.weekForecast = this.forecast[1].forecastday;
    console.log(JSON.stringify(this.weekForecast))
  }

}
