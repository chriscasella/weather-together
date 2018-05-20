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
  @Output() wgHourlyEmitter:EventEmitter<any> = new EventEmitter();
  @Output() dsForecast:EventEmitter<any> = new EventEmitter();
  @Output() nwsForecast:EventEmitter<any> = new EventEmitter();
  @Output() wbForecast:EventEmitter<any> = new EventEmitter();

  @Input() activeSation:any;
  
  myLocalStation:any;

  activeStation:string = 'wg';

  wgCurrentForecast:any = null;
  dsCurrentForecast:any = null;
  nwsCurrentForecast:any = null;
  wbCurrentForecast:any = null;

  wgHourlyForecast:any = null;

  constructor(private ZipcodeService: ZipcodeService, private WeatherService: WeatherService, private route: ActivatedRoute) { }
  
  
  ngOnInit() {
   this.route.params.subscribe(
     params => {
     console.log(params)
      this.getLocalStation(params.zip)
    })
    // this.activeSation.subscribe(res=>console.log(res))
  }
  
  getLocalStation(zipCode:any){
    this.ZipcodeService.getZip(zipCode).subscribe(res=> {
      console.log(res)
      this.myLocalStation = res
      this.emitLocalStation();
      //console.log(this.localStation, 'local')
      })
  }

  getStationData(){
    switch (this.activeStation){
      case 'wg':
        this.getWgForecast();
      case 'ds':
        this.getDsForecast();
      case 'nws':
        this.getNwsForecast();
      case 'wb':
        this.getWbForecast();
    }
  };

  emitLocalStation(){
    this.localStation.emit(this.myLocalStation)
    this.getWgForecast();
  };

  emitDsForecast(){
    this.dsForecast.emit(this.dsCurrentForecast);
  };

  emitWgForecast(){
    this.wgForecast.emit(this.wgCurrentForecast);
  };

  emitWgHourlyForecast(){
    this.wgHourlyEmitter.emit(this.wgHourlyForecast);
  };

  emitNwsForecast(){
    this.nwsForecast.emit(this.nwsCurrentForecast);
  };

  emitWbForecast(){
    this.wbForecast.emit(this.wbCurrentForecast);
  };

  getDsForecast(){
    if(this.dsCurrentForecast == null){
      this.WeatherService.getDsForecast().subscribe(res=>{
        this.dsCurrentForecast = res;
        this.emitDsForecast();
      })
    } else {
      this.emitDsForecast();
    }
  };

  getWgForecast(){
    const lat = this.myLocalStation.location.lat;
    const lon = this.myLocalStation.location.lon;
    this.WeatherService.getWgForecast(lat,lon).subscribe(res=> {
      //console.log(res);
      this.getWgHourlyForecast();
      this.wgCurrentForecast = res;
      this.emitWgForecast();
    })
  };

  getWgHourlyForecast(){
    if(this.wgHourlyForecast == null ){
      this.WeatherService.getWgHourlyForecast().subscribe(res=>{
        console.log('wg extended forecast',res);
        this.wgHourlyForecast = res;
        this.emitWgHourlyForecast();
      })
    }else{
      this.emitWgHourlyForecast();
    }
  }

  getNwsForecast(){
    if(this.nwsCurrentForecast == null){
      this.WeatherService.getNwsForecast().subscribe(res=>{
        this.nwsCurrentForecast = res;
        this.emitNwsForecast();
      }) 
    } else {
      this.emitNwsForecast();
    }
  };

  getWbForecast(){
    if(this.wbCurrentForecast == null){
      this.WeatherService.getWbForecast().subscribe(res=>{
        this.wbCurrentForecast = res;
        // this.wbForecast.emit(this.wbCurrentForecast)
        this.emitWbForecast();
      });
    } else {
      this.emitWbForecast();
    }
  };

  setLocalStation($event: any){
    this.activeStation = $event;
    console.log(this.activeStation)
    this.getStationData();
  };
}
