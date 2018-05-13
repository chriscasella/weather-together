import { Component, OnInit, Input } from '@angular/core';
import { ZipcodeService } from '../../zipcode.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ZipcodeService]
})
export class NavbarComponent implements OnChanges {
  @Input() localStation: any;
  myStation:any; 
  constructor(public ZipcodeService: ZipcodeService) { }
  
  ngOnChanges() {
    this.localStation.subscribe(res => this.myStation=res, console.log('from navbar'))
  }
  
}
