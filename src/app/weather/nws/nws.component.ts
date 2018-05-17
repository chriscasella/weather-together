import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-nws',
  templateUrl: './nws.component.html',
  styleUrls: ['./nws.component.css', '../weather-icons.css']
})
export class NwsComponent implements OnChanges {
  @Input() nwsCurrentForecast:any;
  public nws:any;
  constructor() { }

  ngOnChanges() {
    console.log(this.nwsCurrentForecast);
    this.nws = this.nwsCurrentForecast.properties.periods[0];
  }

}
