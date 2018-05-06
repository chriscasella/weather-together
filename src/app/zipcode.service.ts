import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { gitIgnore } from './gitIgnore';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
@Injectable ()
export class ZipcodeService {
   private _localStation = new Subject();
   public localStation$ = this._localStation.asObservable();
   @Output() onZip: EventEmitter<any> = new EventEmitter();

    wg_key = gitIgnore.wg_key;
    constructor(private http: HttpClient){}

    getZip(zip:string){
        this.http.post('http://api.wunderground.com/api/' + this.wg_key + '/geolookup/q/' + zip + '.json', zip).subscribe((res)=>
        this.onZip.emit(res) 
        )
    };
}