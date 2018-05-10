import { Component, OnInit, Input } from '@angular/core';
import { ZipcodeService } from '../zipcode.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ZipcodeService]
})
export class WeatherComponent implements OnInit {
  constructor(private ZipcodeService: ZipcodeService) { }
  
  
  ngOnInit() {
    this.ZipcodeService.getZip(null).subscribe((res)=>console.log('from weather component', res))
  }
  
  onLocalStation(res:any){
  }

}
