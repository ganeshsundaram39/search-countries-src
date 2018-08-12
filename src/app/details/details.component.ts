import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { DetailsService } from '../details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../shared';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  searchedData: Country;
  constructor(
    private _location: Location,
    private detailsService: DetailsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.searchedData = { name: '', flag: '', latlng: [] };
    setTimeout(() => {
      this.searchedData = this.detailsService.getDetails(
        this._activatedRoute.snapshot.params['alpha3Code']
      );
      console.log(this.searchedData);
    }, 2000);
  }
  goBack(): void {
    this._location.back();
  }
}
