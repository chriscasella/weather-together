import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wg-body',
  templateUrl: './wg-body.component.html',
  styleUrls: ['./wg-body.component.css']
})
export class WgBodyComponent implements OnInit {
  @Input() wgExtendedForecast:any;
  constructor() { }

  ngOnInit() {
  }

}
