import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { gitIgnore } from './gitIgnore';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    wg_key = gitIgnore.wg_key
    constructor(private http: HttpClient){}
    
    getWgForecast(lat:string, lon:string){
        return this.http.get('http://api.wunderground.com/api/' + this.wg_key + '/conditions/q/' + lat + ',' + lon + '.json')
    };

}