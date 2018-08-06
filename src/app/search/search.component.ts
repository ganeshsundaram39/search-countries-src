import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataStorageService } from "../data-storage.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @ViewChild("f") signupForm: NgForm;
  @Output() closedClicked = new EventEmitter<boolean>();
  searchedText: string = "";
  results: {}[] = [];
  constructor(private _dataStore: DataStorageService) {}

  ngOnInit() {
    this.results = this._dataStore.shortDataStore;
  }
  onSubmit() {}
  closeSearch() {
    this.closedClicked.emit(false);
  }
}
