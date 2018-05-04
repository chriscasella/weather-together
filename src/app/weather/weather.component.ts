import { Component, OnInit, Input } from '@angular/core';
import { ZipcodeService } from '../zipcode.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ZipcodeService]
})
export class WeatherComponent implements OnInit {
  zipCode = this.ZipcodeService.zipCode;
  constructor(private ZipcodeService: ZipcodeService) { }
  
  
  ngOnInit() {
    this.ZipcodeService.getZip(this.zipCode).subscribe(res=>console.log('from weather!!!!', res));
  }
  
  onLocalStation(res:any){
  }

}
