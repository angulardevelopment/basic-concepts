import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, Input, signal } from '@angular/core';
  import { effect } from '@angular/core';
import { prettyPrintJson } from 'pretty-print-json';

@Component({
  selector: 'app-zoneless-signals',
  imports: [JsonPipe],
  templateUrl: './zoneless-signals.component.html',
  styleUrl: './zoneless-signals.component.scss',
  standalone: true,
})
export class ZonelessSignalsComponent {

constructor(private http: HttpClient) {

     // Automatically log the data whenever it changes (using effect)
    effect(() => {
      console.log('User data changed:', this.data());
       console.log('Count changed:', this.count());
    });
}
public ChangeDetectionCount = 0
public get GetChangeDetectionCount() {
  return this.ChangeDetectionCount++
}
  count = signal(0);  // reactive signal

  increment() {
    this.count.update(c => c + 1);
  }

 username = signal('sunny7899');  // Using signal for input value
  data = signal<any>(null);  // Signal for async data
html = '';
 userStatus = computed(() => {
    return this.data() ? 'Data loaded' : 'No data';
  });

  fetchData() {
    // Manually update the signals
    this.http.get(`https://api.github.com/users/${this.username()}`)
      .subscribe((response) => {
        this.data.set(response);  // Set new data
        const elem = document.getElementById('account');
elem.innerHTML = prettyPrintJson.toHtml(this.data());
   

      });
  }
}
