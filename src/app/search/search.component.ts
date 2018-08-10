import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() closedClicked = new EventEmitter<boolean>();
  searchedText: string;
  results: {}[] = [];
  constructor(private _dataStore: DataStorageService, private router: Router) {}

  ngOnInit() {
    this.results = this._dataStore.shortDataStore;
  }
  closeSearch() {
    this.closedClicked.emit(false);
  }
  onSubmit() {
    this.router.navigate(['/results', 'name'], {
      queryParams: { q: this.searchedText }
    });
  }
}
