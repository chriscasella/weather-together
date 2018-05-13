import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomBackground: string = 'assets/images/lake.mp4';
  constructor(public router: Router) { }

  ngOnInit() {
    this.randomizeBackground();
  }
  randomizeBackground = () => {
    const backgrounds = ['citysky.mp4', 'clouds.mp4', 'lake.mp4'];
    const bkLen = backgrounds.length;
    const rand = Math.floor(Math.random() * bkLen);
    console.log('assets/images/' + backgrounds[rand]);
    this.randomBackground = './assets/images/' + backgrounds[rand];
  }
}
