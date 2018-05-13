import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-wunder-ground',
  templateUrl: './wunder-ground.component.html',
  styleUrls: ['./wunder-ground.component.css']
})
export class WunderGroundComponent implements OnChanges {
  @Input() public wgCurrentForecast:any;
  constructor() { }

  ngOnChanges() {
    console.log('this is the forecast', this.wgCurrentForecast)
  }

}
