import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { PatternValidator } from '@angular/forms';
import { ChartistModule } from 'ng-chartist';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ZipboxComponent } from './zipbox/zipbox.component';
import { WeatherComponent } from './weather/weather.component'
import { ZipcodeService } from './zipcode.service';
import { NavbarComponent } from './weather/navbar/navbar.component';
import { WunderGroundComponent } from './weather/wunder-ground/wunder-ground.component';
import { WeatherService } from './weather.service';
import { StationNavComponent } from './weather/station-nav/station-nav.component';
import { DarkSkyComponent } from './weather/dark-sky/dark-sky.component';
import { NwsComponent } from './weather/nws/nws.component';
import { WeatherbitComponent } from './weather/weatherbit/weatherbit.component';
import { WgBodyComponent } from './weather/wunder-ground/wg-body/wg-body.component';
import { ForecastContainerComponent } from './weather/wunder-ground/wg-body/forecast-container/forecast-container.component';
import { WgChartComponent } from './weather/wunder-ground/wg-body/forecast-container/wg-chart/wg-chart.component';




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
    WunderGroundComponent,
    StationNavComponent,
    DarkSkyComponent,
    NwsComponent,
    WeatherbitComponent,
    WgBodyComponent,
    ForecastContainerComponent,
    WgChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ChartistModule
  ],
  providers: [WeatherService, ZipcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
