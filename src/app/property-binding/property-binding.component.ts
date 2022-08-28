import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
  isUnchanged = true;
  heroImageUrl = 'https://i.picsum.photos/id/556/200/300.jpg?hmac=TLwE28gIMuw2BUTndMuC3hoTlK6FtrE6Mx1UnR2dzu8';
  classes = 'special';
  title = 'Template Syntax';
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  imageName = "logo-nav2x.png";
  items = {id:1, name: 'test'};
data= [

  {
  
  setup: "windows",
  
  punchline: "easy to use",
  
  hide: false
  
  },
  
  {
  
  setup: "linux",
  
  punchline: "long live",
  
  hide: true
  
  },
  
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
