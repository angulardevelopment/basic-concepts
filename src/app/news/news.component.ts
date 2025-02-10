import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  // imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  standalone: false
})
export class NewsComponent {
  articles;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.get().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
