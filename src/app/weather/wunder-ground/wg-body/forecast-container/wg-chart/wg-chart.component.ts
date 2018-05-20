import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?:any
}


@Component({
  selector: 'app-wg-chart',
  templateUrl: './wg-chart.component.html',
  styleUrls: ['./wg-chart.component.css']
})
export class WgChartComponent implements OnChanges {
  @Input() WgCharts:any;

  public charts: Chart[];
  ngOnChanges(){
    console.log('chart!', this.WgCharts)
  }
  data = this.WgCharts; 
  // {
  //   "labels": [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec"
  //   ],
  //   "series": [
  //     [
  //       5,
  //       4,
  //       3,
  //       7,
  //       5,
  //       10,
  //       3,
  //       4,
  //       8,
  //       10,
  //       6,
  //       8
  //     ],
  //     [
  //       3,
  //       2,
  //       9,
  //       5,
  //       4,
  //       6,
  //       4,
  //       6,
  //       7,
  //       8,
  //       7,
  //       4
  //     ]
  //   ]
  // }

  options = {
    low: 0,
    showArea: true
  };

  constructor() {
    this.charts = [
      {
        data: this.data,
        type: 'Line',
        options: this.options
      }
    ];
  }

}
