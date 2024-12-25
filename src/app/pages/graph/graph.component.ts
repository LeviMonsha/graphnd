import { Component } from '@angular/core';
import { LineChartComponent } from './line-chart/line-chart.component';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [LineChartComponent],
  templateUrl: './graph.component.html',
})
export class GraphComponent {}
