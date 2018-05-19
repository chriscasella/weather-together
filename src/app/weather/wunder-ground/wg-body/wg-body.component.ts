import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-wg-body',
  templateUrl: './wg-body.component.html',
  styleUrls: ['./wg-body.component.css']
})
export class WgBodyComponent implements OnInit, OnChanges {
  @Input() wgHourlyForecast:any;

  hourlyForecast:any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.hourlyForecast = this.wgHourlyForecast.hourly_forecast;
    console.log('from wg body comp',this.hourlyForecast);
  }

}
