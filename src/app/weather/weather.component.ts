import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() localStation:EventEmitter<any> = new EventEmitter();
  myLocalStation:any;
  constructor(private ZipcodeService: ZipcodeService, private route: ActivatedRoute) { }
  
  
  ngOnInit() {
   this.route.params.subscribe(
     params => {
     console.log(params)
      this.getLocalStation(params.zip)
    })
  }
  
  getLocalStation(zipCode:any){
    this.ZipcodeService.getZip(zipCode).subscribe(res=> {
      console.log(res)
      this.myLocalStation = res
      this.localStation.emit(res)
      //console.log(this.localStation, 'local')
      })
  }

}
