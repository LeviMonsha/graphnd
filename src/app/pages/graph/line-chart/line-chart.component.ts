import { Component } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [PlotlyModule],
  template:
    '<plotly-plot [data]="graph.data" [layout]="graph.layout"  [config]="config"></plotly-plot>',
})
export class LineChartComponent {
  public graph = {
    data: [
      {
        x: [1, 2, 3],
        y: [2, 6, 3],
        type: 'scatter',
        mode: 'lines+points',
        marker: { color: 'red' },
      },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: { width: 320, height: 240, title: 'A Fancy Plot' },
  };

  public config = {
    staticPlot: true,
    displayModeBar: false,
  };
}
