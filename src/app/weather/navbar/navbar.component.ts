import { Component, OnInit, Input } from '@angular/core';
import { Constants } from '../../shared/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Constants]
})
export class NavbarComponent implements OnInit {
  @Input() zipCode: string;
  
  constructor(public Constants: Constants) { }
  
  ngOnInit() {
    console.log(this.Constants.zipCode)
  }
  
}
