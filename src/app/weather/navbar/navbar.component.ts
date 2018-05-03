import { Component, OnInit, Input } from '@angular/core';
import { ZipcodeService } from '../../zipcode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ZipcodeService]
})
export class NavbarComponent implements OnInit {
  @Input() localStation: any;
  
  constructor(public ZipcodeService: ZipcodeService) { }
  
  ngOnInit() {
    console.log(this.ZipcodeService.zipCode);
  }
  
}
