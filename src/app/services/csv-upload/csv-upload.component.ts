import { Component, EventEmitter, Output } from "@angular/core";
import * as Papa from "papaparse";

@Component({
  selector: "app-csv-upload",
  template: `
    <div class="mb-4">
      <input
        type="file"
        (change)="onFileChange($event)"
        accept=".csv"
        class="block w-full text-white border border-gray-700 rounded-md bg-gray-800 p-2"
      />
    </div>
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
