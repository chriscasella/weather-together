import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { PatternValidator } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ZipboxComponent } from './zipbox/zipbox.component';
import { WeatherComponent } from './weather/weather.component'

const appRoutes: Routes = [
  {
    path: 'weather', component: WeatherComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZipboxComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
