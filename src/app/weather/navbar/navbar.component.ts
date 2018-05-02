import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  zipCode = this.Constants.zipCode;

  constructor(public Constants: Constants) { }

  ngOnInit() {
  }

}
