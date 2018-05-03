import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
  }
  
  @Input() 
  onLocalStation(res:any){
    console.log('from weather component!',res);
  }

}
