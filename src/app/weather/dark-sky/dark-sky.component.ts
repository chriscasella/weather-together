import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-dark-sky',
  templateUrl: './dark-sky.component.html',
  styleUrls: ['./dark-sky.component.css', '../weather-icons.css']
})
export class DarkSkyComponent implements OnChanges {
  @Input() public dsCurrentForecast:any;
  public ds:any;
  public weatherIcon:string;
  constructor() { }

  ngOnChanges() {
    console.log('ds current forecast', this.dsCurrentForecast);
    this.ds = this.dsCurrentForecast.currently;
    this.checkWeatherIcon();
  } 
  
  checkWeatherIcon() {
    const w = this.dsCurrentForecast.currently.icon;
    switch (w) {
      case 'clear-day':
        this.weatherIcon = 'wi wi-day-sunny';
        break;
      case 'rain':
        this.weatherIcon = 'wi wi-rain';
        break;
      case 'clear-night':
        this.weatherIcon = 'wi wi-night-clear';
        break;
      case 'snow':
        this.weatherIcon = 'wi wi-snow';
        break;
      case 'sleet':
        this.weatherIcon = 'wi wi-sleet';
        break;
      case 'windy':
        this.weatherIcon = "wi wi-windy";
      case 'fog':
        this.weatherIcon = 'wi wi-fog';
        break;
      case 'cloudy':
        this.weatherIcon = 'wi wi-cloudy';
        break;
      case 'partly-cloudy-day':
        this.weatherIcon = 'wi wi-day-cloudy';
        break;
      case 'partly-cloudy-night':
        this.weatherIcon = 'wi wi-night-cloudy';
    }
  };

}
