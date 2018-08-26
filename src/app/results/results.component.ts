import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { UserQuery } from '../shared';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  searchedText = '';
  searchedType = '';
  results: {}[] = [];
  showLoader = true;
  timer;
  constructor(
    private activateRoute: ActivatedRoute,
    private _dataStore: DataStorageService
  ) {}

  ngOnInit() {
    this.searchedType = this.activateRoute.snapshot.params['filter'];
    // get query parameter q if changed afterwards
    this.activateRoute.params.subscribe((params: Params) => {
      this.searchedType = params['filter'];
    });

    this.searchedText = this.activateRoute.snapshot.queryParams['q'];
    // get query parameter q if changed afterwards
    this.activateRoute.queryParams.subscribe((params: Params) => {
      this.searchedText = params['q'];
    });
    setTimeout(() => {
      this.showLoader = false;
      this.results = this._dataStore.longDataStore;
    }, 2000);

    this._dataStore.userQuery.subscribe((userQuery: UserQuery) => {
      // debounce
      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(() => {
        this.searchedText = userQuery.searchedText;
        this.searchedType = userQuery.searchedType;
      }, 1000);
    });
  }
}
