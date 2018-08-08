import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() closedClicked = new EventEmitter<boolean>();
  searchedText: string;
  results: {}[] = [];
  constructor(private _dataStore: DataStorageService) {}

  ngOnInit() {
    this.results = this._dataStore.shortDataStore;
  }
  closeSearch() {
    this.closedClicked.emit(false);
  }
}
