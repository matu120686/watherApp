import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  apiKey: string = '923829cca260c27457716b6fa64b2d18'
  URI: string = '';

  // q=lima,pe
  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
  }

  getWheater(cityName: string, countryCode: string){
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`)
  }
}
