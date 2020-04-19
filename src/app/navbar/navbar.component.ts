import { Component, OnInit, Input } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() searchedText: string;
  @Input() searchedType = 'name';
  categories: string[] = ['name', 'region', 'currency', 'language'];
  showFilter = false;

  constructor(private _dataStore: DataStorageService) { }
  ngOnInit() { }
  onSubmit() { }
  userQuerying() {
    // emit the entered text by user
    this._dataStore.userQuery.next({
      searchedText: this.searchedText,
      searchedType: this.searchedType
    });
  }
}
