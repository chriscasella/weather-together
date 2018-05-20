import { Component, OnInit } from '@angular/core';
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
export class WgChartComponent {

  public charts: Chart[];

  data = {
    "labels": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "series": [
      [
        5,
        4,
        3,
        7,
        5,
        10,
        3,
        4,
        8,
        10,
        6,
        8
      ],
      [
        3,
        2,
        9,
        5,
        4,
        6,
        4,
        6,
        7,
        8,
        7,
        4
      ]
    ]
  }

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
      }/*,
      {
        data: data.Line,
        type: 'Line'
      },
      {
        data: data.Line2,
        type: 'Line'
      },
      {
        data: data.Scatter,
        options: {
          axisX: {
            labelInterpolationFnc(value: number, index: number): string | null {
              return index % 13 === 0 ? `W${value}` : null;
            }
          },
          showLine: false
        },
        responsiveOptions: [
          [
            'screen and (min-width: 640px)',
            {
              axisX: {
                labelInterpolationFnc(
                  value: number,
                  index: number
                ): string | null {
                  return index % 4 === 0 ? `W${value}` : null;
                }
              }
            }
          ]
        ],
        type: 'Line'
      },
      {
        data: data.LineWithArea,
        options: {
          low: 0,
          showArea: true
        },
        type: 'Line'
      },
      {
        data: data['Bi-PolarBar'],
        options: {
          axisX: {
            labelInterpolationFnc(value: number, index: number): number | null {
              return index % 2 === 0 ? value : null;
            }
          },
          high: 10,
          low: -10
        },
        type: 'Bar'
      },
      {
        data: data.DistributedSeries,
        options: {
          distributeSeries: true
        },
        type: 'Bar'
      },
      {
        data: data.Pie,
        options: {
          donut: true,
          donutWidth: 60,
          showLabel: false,
          startAngle: 270,
          total: 200
        },
        type: 'Pie'
      },
      {
        data: data.Pie,
        options: {
          donut: true,
          showLabel: false
        },
        type: 'Pie'
      }*/
    ];
  }

}
