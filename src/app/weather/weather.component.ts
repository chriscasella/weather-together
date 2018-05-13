import { Component, OnInit, Input } from '@angular/core';
import { ZipcodeService } from '../zipcode.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ZipcodeService]
})
export class WeatherComponent implements OnInit {
  constructor(private ZipcodeService: ZipcodeService, private route: ActivatedRoute) { }
  

  
  ngOnInit() {
   this.route.params.subscribe(params => console.log('this is the params', params))
  }
  
  onLocalStation(res:any){
  }

}
