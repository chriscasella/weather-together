import { Component, OnInit, Input, Output } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-weatherbit',
  templateUrl: './weatherbit.component.html',
  styleUrls: ['./weatherbit.component.css', '../weather-icons.css']
})
export class WeatherbitComponent implements OnInit, OnChanges {
  @Input() wbCurrentForecast:any;
  wb:any;
  weatherIcon:string;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){
    console.log('this is the forecast', this.wbCurrentForecast)
    this.wb = this.wbCurrentForecast.data[0];
    this.checkWeatherIcon();
  }

  checkWeatherIcon() {
    const w = this.wbCurrentForecast.data[0].weather.code;
    console.log('above switch');
    switch (w) {
      case ('200' || '201' || '202' || '230' || '231' || '231' || '232' || '233'):
        this.weatherIcon = 'wi wi-thunderstorm';
        break;
      case ('300' || '301' || '302'):
        this.weatherIcon = 'wi wi-rain';
        break;
      case ('500' || '501' || '502' || '511' || '520' || '521' || '522'):
        this.weatherIcon = 'wi wi-showers';
        break;
      case ('600' || '601' || '602' || '610' || '622' || '623'):
        this.weatherIcon = 'wi wi-snow';
        break;
      case ('611' || '612'):
        this.weatherIcon = 'wi wi-sleet';
        break;
      case ('721' || '741' || '751'):
        this.weatherIcon = 'wi wi-day-haze';
        break;
      case '800':
        this.weatherIcon = 'wi wi-day-sunny';
        break;
      case ('801' || '802' || '803' || '804'):
        this.weatherIcon = 'wi wi-cloudy';
        break;
    }
  };

}
