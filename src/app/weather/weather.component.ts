import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ZipcodeService } from '../zipcode.service';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css', './weather-icons.css'],
  providers: [WeatherService, ZipcodeService]
})
export class WeatherComponent implements OnInit {
  @Output() localStation:EventEmitter<any> = new EventEmitter();
  @Output() wgForecast:EventEmitter<any> = new EventEmitter();
  @Input() activeSation:any;
  
  myLocalStation:any;

  wunderGround:boolean = true;
  darkSky:boolean = false;
  weatherbit:boolean = false;
  nws:boolean = false;

  wgCurrentForecast:any;
  
  constructor(private ZipcodeService: ZipcodeService, private WeatherService: WeatherService, private route: ActivatedRoute) { }
  
  
  ngOnInit() {
   this.route.params.subscribe(
     params => {
     console.log(params)
      this.getLocalStation(params.zip)
    })
    this.activeSation.subscribe(res=>console.log(res))
  }
  
  getLocalStation(zipCode:any){
    this.ZipcodeService.getZip(zipCode).subscribe(res=> {
      console.log(res)
      this.myLocalStation = res
      this.emitLocalStation();
      //console.log(this.localStation, 'local')
      })
  }

  emitLocalStation(){
    this.localStation.emit(this.myLocalStation)
    this.getWgForecast();
  };

  emitWgForecast(){
    this.wgForecast.emit(this.wgCurrentForecast);
  };

  getWgForecast(){
    const lat = this.myLocalStation.location.lat;
    const lon = this.myLocalStation.location.lon;
    this.WeatherService.getWgForecast(lat,lon).subscribe(res=> {
      //console.log(res);
      this.wgCurrentForecast = res;
      this.emitWgForecast();
    })
  };

  setLocalStation(){
    this.activeSation.subscribe(res => console.log('res'));
  };
}
