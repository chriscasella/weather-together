import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrls: ['./forecast-container.component.css']
})
export class ForecastContainerComponent implements OnInit, OnChanges {
  @Output() WgChartData:EventEmitter<any> = new EventEmitter;
  @Input() wgHourlyForecast;
  isWgHourlyForecast:boolean = false;
  numOfDays = {};
  WgCharts = [];
  constructor() { }
  
  ngOnInit() {
  }
  ngOnChanges(){
    console.log('from container', this.wgHourlyForecast)
    this.parseDaysFromHourly();
  }
  public wgHourlyParsedDays = [];
  parseDaysFromHourly(){
    this.isWgHourlyForecast = true;
    let currentDay = this.wgHourlyForecast[0].FCTTIME.weekday_name;
    let payLoad = [];
    let chartsPayload;
    let series = [];
    let loopSeries = [];
    let labels = [];
    let loopLabels = [];
    for(let hour of this.wgHourlyForecast){
      // console.log(hour);
      if(hour.FCTTIME.weekday_name == currentDay){
        payLoad.push(hour)
        labels.push(hour.FCTTIME.civil)
        series.push(hour.temp.english);
        // console.log('pushed', payLoad)
      } else {
        this.wgHourlyParsedDays.push(payLoad);
        chartsPayload = {
          series: [series],
          labels: labels
        }
        this.WgCharts.push(chartsPayload);
        series = [];
        labels = [];
        payLoad = [];
        currentDay = hour.FCTTIME.weekday_name;
        payLoad.push(hour);
        // console.log('wiped, pushed', payLoad)
      }
    }
    console.log('parsed Days', this.wgHourlyParsedDays);
    if(this.wgHourlyParsedDays.length == 1){

    }
    this.emitCharts();
  }

  // buildChartData(){
  //   const data = this.wgHourlyParsedDays;
  //   //series is an array of arrays series : [ [0,1,2], [3,2,1] ]
  //   let series = [];
  //   //lables is an array of data labels : ['Mon', 'Tue']
  //   let labels = [];
  //   let chart = { 
  //     labels: labels,
  //     series: series
  //   };
  //   let loopSeries = [];

  //   const chartsPayLoad  = data.map( day => { 
  //     day.forEach(hour => {
  //       labels.push(hour.FCTTIME.civil);
  //       series.push(hour.temp.english)
  //       if(day.length == day.indexOf(hour)){
          
  //         series = [];
  //         labels = [];  
  //       }
  //     });
  //   })
  //   console.log(chartsPayLoad);
  //   this.WgCharts = chartsPayLoad;
  //   this.emitCharts
  // };
  
  emitCharts(){
    this.WgChartData.emit(this.WgCharts);
  };

  checkWeatherIcon(w){
    console.log(w);
    switch (w) {
      case 'Chance of Flurries':
         return 'wi wi-snow-wind';
      case 'Rain':
         return 'wi wi-rain';
      case 'Chance of Rain':
         return 'wi wi-showers';
      case 'Chance Rain':
         return 'wi wi-showers';
      case 'Chance of Snow':
         return 'wi wi-snow';
      case 'Chance of Thunderstorms':
         return 'wi wi-thunderstorm';
      case 'Clear':
         return 'wi wi-day-sunny';
      case 'Cloudy':
         return 'wi wi-cloudy';
      case 'Flurries':
         return 'wi wi-snow-wind';
      case 'Fog':
         return 'wi wi-fog';
      case 'Haze':
         return 'wi wi-day-haze';
      case 'Mostly Cloudy':
         return 'wi wi-cloud';
      case 'Mostly Sunny':
         return 'wi wi-day-sunny';
      case 'Partly Cloudy':
         return 'wi wi-day-cloudy';
      case 'Partly Sunny':
         return 'wi wi-day-cloudy';
      case 'Freezing Rain':
         return 'wi wi-sleet';
      case 'Sleet':
         return 'wi wi-sleet';
      case 'Snow':
         return 'wi wi-snow';
      case 'Sunny':
         return 'wi wi-day-sunny';
      case 'Thunderstorm' || 'Thunderstorms':
         return 'wi wi-thunderstorm';
      case 'Uknown':
         return 'wi wi-tornado';
      case 'Scattered Clouds':
         return 'wi wi-day-cloudy-high';
    }
  };
}
