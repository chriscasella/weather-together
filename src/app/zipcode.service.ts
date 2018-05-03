import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gitIgnore } from './gitIgnore';

@Injectable ()
export class ZipcodeService {
    zipCode:string;
    wg_key = gitIgnore.wg_key;
    constructor(private http: HttpClient){}
    getZip(zip:string){
        console.log(zip);
        this.zipCode = zip;
       return this.http.post('http://api.wunderground.com/api/' + this.wg_key + '/geolookup/q/' + zip + '.json', zip);
    };
}