import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-station-nav',
  templateUrl: './station-nav.component.html',
  styleUrls: ['./station-nav.component.css']
})
export class StationNavComponent implements OnInit {
  @Output() station:EventEmitter<any> = new EventEmitter();
  public stations = [
    {
      name: 'wunderGround',
      display: 'Wunder Ground',
      symbol:'wg'
    },
    {
      name: 'darkSky',
      display: 'Dark Sky',
      symbol:'ds'
    },
    {
      name: 'nws',
      display: 'NWS',
      symbol:'nws'
    },
    {
      name: 'weatherbit',
      display: 'Weatherbit.io',
      symbol:'wb'
    }
  ];
  constructor() { 
    
  }
  ngOnInit() {
  }

  setActiveStation(stationName){
    console.log(stationName);
    this.station.emit(stationName);
  }
}
