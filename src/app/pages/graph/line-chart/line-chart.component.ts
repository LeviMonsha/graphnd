import { Component, Input } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { CommonModule } from '@angular/common';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-line-chart',
  imports: [CommonModule, PlotlyModule],
  template: `
    <plotly-plot
      *ngIf="graph"
      [data]="graph.data"
      [layout]="graph.layout"
      [config]="config"
    ></plotly-plot>
  `,
})
export class LineChartComponent {
  @Input() set data(data: any[]) {
    if (data && data.length > 0) {
      this.prepareGraphData(data);
    }
  }

  public graph: any;

  private prepareGraphData(data: any[]) {
    const xValues = data.map((row) => row.x);
    const yValues = data.map((row) => row.y);

    this.graph = {
      data: [
        {
          x: xValues,
          y: yValues,
          type: 'scatter',
          mode: 'lines+points',
          marker: { color: 'red' },
        },
      ],
      layout: { title: 'График из CSV', width: 320, height: 240 },
    };
  }
  public config = {
    staticPlot: true,
    displayModeBar: false,
  };
}
