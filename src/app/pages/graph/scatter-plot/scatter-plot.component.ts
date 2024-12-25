import { Component, Input } from "@angular/core";
import * as PlotlyJS from "plotly.js-dist-min";
import { PlotlyModule } from "angular-plotly.js";
import { CommonModule } from "@angular/common";

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: "app-scatter-plot",
  standalone: true,
  imports: [CommonModule, PlotlyModule],
  template: `
    <div *ngIf="graph" class="p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-white mb-4">Scatter Plot</h2>
      <plotly-plot
        [data]="graph.data"
        [layout]="graph.layout"
        [config]="config"
      ></plotly-plot>
    </div>
  `,
})
export class ScatterPlotComponent {
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
          mode: "markers",
          type: "scatter",
          marker: { color: "rgb(153, 0, 255)", size: 10 },
        },
      ],
      layout: {
        title: "Пример Scatter Plot",
        xaxis: {
          title: "X-axis",
          color: "rgb(255, 255, 255)",
        },
        yaxis: {
          title: "Y-axis",
          color: "rgb(255, 255, 255)",
        },
        plot_bgcolor: "rgba(0,0,0,0)",
        paper_bgcolor: "rgba(0,0,0)",
      },
    };
  }

  public config = {
    staticPlot: true,
    displayModeBar: false,
  };
}
