import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-wg-body',
  templateUrl: './wg-body.component.html',
  styleUrls: ['./wg-body.component.css']
})
export class WgBodyComponent implements OnInit, OnChanges {
  @Input() wgExtendedForecast:any;

  extendedForecast:any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.extendedForecast = this.wgExtendedForecast.forecast.simpleforecast.forecastday;
    console.log('from wg body comp',this.extendedForecast);
  }

}
