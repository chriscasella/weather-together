import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZipcodeService } from '../zipcode.service';
import { Constants } from '../shared/constants';


@Component({
  selector: 'app-zipbox',
  templateUrl: './zipbox.component.html',
  styleUrls: ['./zipbox.component.css'],
  providers: [ZipcodeService, Constants]
})
export class ZipboxComponent implements OnInit {
  
 zipCode:string;
 zipBool:boolean = false;

  constructor(private router: Router, private ZipcodeService: ZipcodeService, private Constants: Constants) {
   }


  ngOnInit() {
  }

 isZip() {
   let pattern = /^\d{5}$/;
   console.log(pattern.test(this.zipCode), 'test', this.zipCode);
   pattern.test(this.zipCode) ? ( this.zipBool = true) : this.zipBool = false;
 }

 getZip(zipcode:string){
  this.ZipcodeService.getZip(zipcode).subscribe(
    (res)=>{
      console.log(res)
      this.onZip();
    } 
    , (err)=> {
      console.log(err)
    } 
  );
 }

 onZip(){
   //this.router.navigate(['/weather']);
   this.Constants.zipCode = this.zipCode;
 }
}
