import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { gitIgnore } from './gitIgnore';
import { Subject } from 'rxjs/Subject';
import { mergeMap } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    wg_key = gitIgnore.wg_key
    ds_key = gitIgnore.ds_key
    wb_key = gitIgnore.wb_key
    //from wg initial call
    lat:string
    lon:string
    constructor(private http: HttpClient){}
    
    getWgForecast(lat:string, lon:string){
        this.lat = lat;
        this.lon = lon;
        return this.http.get('http://api.wunderground.com/api/' + this.wg_key + '/conditions/q/' + lat + ',' + lon + '.json')
    };

    getDsForecast(){
        return this.http.get('https://api.darksky.net/forecast/' + this.ds_key + '/' + this.lat + ',' + this.lon)
    }

    getNwsForecast(){
        console.log('hello')
        return this.http.get('https://api.weather.gov/points/' + this.lat + ',' + this.lon).switchMap(res=> {
           let _res = res;
           console.log(_res)
            return this.http.get(_res.properties.forecast)
        })
    };

    getWbForecast(){
        return this.http.get('https://api.weatherbit.io/v2.0/current?lat=' + this.lat + '&lon=' + this.lon + '&key=' + this.wb_key + '&units=I');
    };
}
