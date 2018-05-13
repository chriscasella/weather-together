import { Component, OnInit, Input } from '@angular/core';
import { ZipcodeService } from '../../zipcode.service';
import { Observable } from 'rxjs/Observable';

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
    this.getZip();
  }
  getZip(){
    
    return Observable.of(this.localStation).subscribe( 
      res => console.log(res))
    
  }
}
