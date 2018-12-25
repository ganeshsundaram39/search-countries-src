import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { DetailsService } from '../details.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../shared';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  searchedData: Country;
  translations: string[];
  showTranslations: boolean;
  toggleText: string;
  population: string;
  constructor(
    private _location: Location,
    private _detailsService: DetailsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.searchedData = { name: '', flag: '', latlng: [] };
    this.population = '';
    this.showTranslations = false;
    this.toggleText = 'Show';
    setTimeout(() => {
      this.searchedData = this._detailsService.getDetails(
        this._activatedRoute.snapshot.params['alpha3Code']
      );
      this.population = parseInt(
        this.searchedData.population,
        10
      ).toLocaleString();
    }, 2000);
  }
  goBack(): void {
    this._location.back();
  }
  toggleTranslations(): void {
    this.showTranslations = !this.showTranslations;
    this.toggleText = this.toggleText === 'Show' ? 'Hide' : 'Show';
  }
}
