import { Component } from '@angular/core';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CsvUploadComponent } from '../../services/csv-upload/csv-upload.component';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [LineChartComponent, CsvUploadComponent],
  templateUrl: './graph.component.html',
})
export class GraphComponent {
  chartData: any[] = [];

  onDataLoaded(data: any[]) {
    this.chartData = data;
  }
}
