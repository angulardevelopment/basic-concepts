import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { prettyPrintJson } from 'pretty-print-json';

@Component({
     standalone: true,
  selector: 'app-zonejs-based',
  templateUrl: './zone.js-based.component.html',
  styleUrl: './zone.js-based.component.scss',
   imports: [JsonPipe, HttpClientModule],
        // changeDetection: ChangeDetectionStrategy.OnPush

})
export class ZoneJsBasedComponent {
      // <h1>Zone.js Based Change Detection</h1>
  constructor(  public readonly CD: ChangeDetectorRef, private http: HttpClient
) {
  // this.CD.detectChanges()

}
  count = 0;
public ChangeDetectionCount = 0
public get GetChangeDetectionCount() {
  return this.ChangeDetectionCount++
}
  increment() {
    this.count++;
  }

     @Input() username = 'sunny7899';
  data: any;
html = '';

  fetchData() {
    this.http.get(`https://api.github.com/users/${this.username}`)
      .subscribe((response) => {
        this.data = response;
             this.html = prettyPrintJson.toHtml(this.data);
      });
  }
}
