import { Component, OnInit, Input } from '@angular/core';
import { ZipcodeService } from '../../zipcode.service';
import { Observable } from 'rxjs/Observable';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ZipcodeService]
})
export class NavbarComponent implements OnChanges {
  @Input() myLocalStation: any;
  
  constructor(public ZipcodeService: ZipcodeService) { }
  
  ngOnChanges() {
    console.log(this.myLocalStation)
  }

}
