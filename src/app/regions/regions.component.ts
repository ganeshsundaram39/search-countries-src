import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions: string[];
  constructor() {}

  ngOnInit() {
    this.regions = ['americas', 'europe', 'africa', 'asia', 'oceania'];
  }

  getImage = region => `./assets/regions/${region}.svg`;
  getAlt = region => `region ${region}`;
}
