import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weather: any;
  weatherErr: any;
  constructor(
    private weatherService : WeatherService
    ){}
  ngOnInit() {}

  wetWeather(cityName: string, countryCode: string) {
    const clima = this.weatherService.getWheater(cityName, countryCode)
    .subscribe(
      res => {
        console.log("estoy aca", res);
        this.weather = res
      },
      err => this.weatherErr = err
    )
  }
  submitLocation(cityName:HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.wetWeather(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';
      
    } else {
      alert('Insert some values');  
    }
    cityName.focus();
    return false;
  }
  
}
