import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { CsvUploadComponent } from "../../services/csv-upload/csv-upload.component";
import { ScatterPlotComponent } from "./scatter-plot/scatter-plot.component";

@Component({
  selector: "app-graph",
  standalone: true,
  imports: [
    CommonModule,
    LineChartComponent,
    ScatterPlotComponent,
    CsvUploadComponent,
  ],
  templateUrl: "./graph.component.html",
})
export class GraphComponent {
  chartData: any[] = [];
  selectedChartType: "scatter" | "line" | null = null;

  onDataLoaded(data: any[]) {
    this.chartData = data;
  }

  selectChart(type: "scatter" | "line") {
    this.selectedChartType = type;
  }
}
