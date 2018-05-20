import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wg-body',
  templateUrl: './wg-body.component.html',
  styleUrls: ['./wg-body.component.css']
})
export class WgBodyComponent implements OnInit, OnChanges {
  @Output() wgHourlyEmitter:EventEmitter<any> = new EventEmitter; 
  @Input() wgHourlyForecast:any;

  hourlyForecast:any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.wgHourlyForecast = this.wgHourlyForecast.hourly_forecast;
    // console.log('from wg body comp',this.wgHourlyForecast);
    this.emitWgHourly();
  }

  emitWgHourly(){
    this.wgHourlyEmitter.emit(this.wgHourlyForecast);
  }
}
