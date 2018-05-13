import { Component, OnInit, Input } from '@angular/core';
import { ZipcodeService } from '../zipcode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ZipcodeService]
})
export class WeatherComponent implements OnInit {
  constructor(private ZipcodeService: ZipcodeService) { }
  
  getZip = Observable.fromPromise(this.ZipcodeService.getZip(null));
  
  ngOnInit() {
    return this.getZip.map(x=> console.log(x) )
  }
  
  onLocalStation(res:any){
  }

}
