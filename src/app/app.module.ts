import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { PatternValidator } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ZipboxComponent } from './zipbox/zipbox.component';
import { WeatherComponent } from './weather/weather.component'
import { ZipcodeService } from './zipcode.service';
import { NavbarComponent } from './weather/navbar/navbar.component';
import { WunderGroundComponent } from './weather/wunder-ground/wunder-ground.component';
import { WeatherService } from './weather.service';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'weather/:zip', component: WeatherComponent 
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZipboxComponent,
    WeatherComponent,
    NavbarComponent,
    WunderGroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [WeatherService, ZipcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
