import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-dark-sky',
  templateUrl: './dark-sky.component.html',
  styleUrls: ['./dark-sky.component.css']
})
export class DarkSkyComponent implements OnChanges {

  constructor() { }

  ngOnChanges() {
  }

}
