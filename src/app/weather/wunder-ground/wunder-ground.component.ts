import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-wunder-ground',
  templateUrl: './wunder-ground.component.html',
  styleUrls: ['./wunder-ground.component.css', '../weather-icons.css']
})
export class WunderGroundComponent implements OnChanges {
  @Input() public wgCurrentForecast:any;
  public wg:any;
  weatherIcon:string;

  isWgCurrentForecast:boolean = false;
  constructor() { }

  ngOnChanges() {
    console.log('this is the forecast', this.wgCurrentForecast)
    this.wg = this.wgCurrentForecast.current_observation
    this.wg == null ? this.isWgCurrentForecast = false : this.isWgCurrentForecast = true; 
    this.checkWeatherIcon();
  }
  checkWeatherIcon(){
    const w = this.wgCurrentForecast.current_observation.weather;
    console.log('above swithc');
    switch(w){
      case w == 'Chance of Flurries':
        this.weatherIcon = 'wi wi-snow-wind';
        break;
      case w == 'Rain':
        this.weatherIcon = 'wi wi-rain';
        break;
      case 'Chance of Rain':
        this.weatherIcon = 'wi wi-showers';
        break;
      case 'Chance Rain':
        this.weatherIcon = 'wi wi-showers';
        break;
      case 'Chance of Snow':
        this.weatherIcon = 'wi wi-snow';
        break;
      case 'Chance of Thunderstorms':
        this.weatherIcon = 'wi wi-thunderstorm';
        break;
      case 'Clear':
        this.weatherIcon =  'wi wi-day-sunny';
        break;     
      case 'Cloudy':
        this.weatherIcon = 'wi wi-cloudy';
        break;
      case 'Flurries':
        this.weatherIcon = 'wi wi-snow-wind';
        break;
      case 'Fog':
        this.weatherIcon = 'wi wi-fog';
        break;
      case 'Haze':
        this.weatherIcon = 'wi wi-day-haze';
        break;
      case 'Mostly Cloudy':
        this.weatherIcon = 'wi wi-cloud';
        break;
      case 'Mostly Sunny':
        this.weatherIcon = 'wi wi-day-sunny';
        break;
      case 'Partly Cloudy':
        this.weatherIcon = 'wi wi-day-cloudy';
        break;
      case 'Partly Sunny':
        this.weatherIcon = 'wi wi-day-cloudy';
        break;
      case 'Freezing Rain':
        this.weatherIcon = 'wi wi-sleet';
        break;
      case 'Sleet':
        this.weatherIcon = 'wi wi-sleet';
        break;
      case 'Snow':
        this.weatherIcon = 'wi wi-snow';
        break;
      case 'Sunny':
        this.weatherIcon = 'wi wi-day-sunny';
        break;
      case 'Thunderstorm' || 'Thunderstorms' :
        this.weatherIcon = 'wi wi-thunderstorm';
        break;
      case 'Uknown':
        this.weatherIcon = 'wi wi-tornado';
        break;
      case 'Scattered Clouds':
        this.weatherIcon = 'wi wi-day-cloudy-high';
        break;
    }
  };
}
