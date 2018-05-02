import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gitIgnore } from './gitIgnore';

@Injectable ()
export class ZipcodeService {
    constructor(private http: HttpClient){}
    wg_key = gitIgnore.wg_key;
    getZip(zip:string){
        console.log(zip);
       return this.http.post('http://api.wunderground.com/api/' + this.wg_key + '/geolookup/q/' + zip + '.json', zip);
    };
}