import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZipcodeService } from '../zipcode.service';



@Component({
  selector: 'app-zipbox',
  templateUrl: './zipbox.component.html',
  styleUrls: ['./zipbox.component.css'],
  providers: [ZipcodeService]
})
export class ZipboxComponent implements OnInit {
  
 zipCode:string;
 zipBool:boolean = false;

  constructor(private router: Router, private ZipcodeService: ZipcodeService) {
   }


  ngOnInit() {
  }

 isZip() {
   let pattern = /^\d{5}$/;
   console.log(pattern.test(this.zipCode), 'test', this.zipCode);
   pattern.test(this.zipCode) ? ( this.zipBool = true) : this.zipBool = false;
 }

 getZip(){
  this.ZipcodeService.getZip();
  this.onZip();
 }

 onZip(){
   this.router.navigate(['/weather']);
 }
}
