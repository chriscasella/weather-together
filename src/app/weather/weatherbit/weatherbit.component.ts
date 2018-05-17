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
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){
    console.log('this is the forecast', this.wbCurrentForecast)
    this.wb = this.wbCurrentForecast.data[0];
  }

}
