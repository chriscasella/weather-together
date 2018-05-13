import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ZipcodeService } from '../zipcode.service';
import { Constants } from '../shared/constants';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-zipbox',
  templateUrl: './zipbox.component.html',
  styleUrls: ['./zipbox.component.css'],
  providers: [Constants]
})
export class ZipboxComponent implements OnInit {
zipCode:string;
zipBool:boolean = false;

  constructor(private router: Router, private Constants: Constants) {
   }
   //need event emitter for response of zip call to wg.
   //@Output () stationInfo: EventEmitter<any> = new EventEmitter();
   //This might actually need to pass this response obj to the weather component. Then navbar will inheirit the info as well. zip will then call data sources on weather page. 
   //Invoke the calls for services on the from onDestroy() event on this component. Preloading if you will.


  ngOnInit() {
  }

 isZip() {
   let pattern = /^\d{5}$/;
   console.log(pattern.test(this.zipCode), 'test', this.zipCode);
   pattern.test(this.zipCode) ? ( this.zipBool = true) : this.zipBool = false;
 }

 getZip(zipcode:string){
   this.router.navigate(['/weather/'+ zipcode]);
 };
}
