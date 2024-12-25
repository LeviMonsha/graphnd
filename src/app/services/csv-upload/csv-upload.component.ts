import { Component, EventEmitter, Output } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-csv-upload',
  template: `
    <input type="file" (change)="onFileChange($event)" accept=".csv" />
  `,
})
export class CsvUploadComponent {
  @Output() dataLoaded = new EventEmitter<any[]>();

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvData = e.target?.result;
        this.parseCsv(csvData as string);
      };
      reader.readAsText(file);
    }
  }

  parseCsv(csvData: string) {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        this.dataLoaded.emit(results.data);
      },
    });
  }
}
