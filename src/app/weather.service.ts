import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherOfTenDays(searchTerm){
    var api='http://api.apixu.com/v1/forecast.json?key=7dc7a6b4aad346499a963320180506&q='+searchTerm+'&days=10'
    return this.http.get(api);
}

}
