import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "../../../node_modules/@angular/router";
import { DataStorageService } from "../data-storage.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  searchedText: string = "";
  searchedType: string = "";
  results: {}[] = [];
  showLoader: boolean = true;
  constructor(
    private activateRoute: ActivatedRoute,
    private _dataStore: DataStorageService
  ) {}

  ngOnInit() {
    this.searchedType = this.activateRoute.snapshot.params["filter"];
    // get query parameter q if changed afterwards
    this.activateRoute.params.subscribe((params: Params) => {
      this.searchedType = params["filter"];
    });

    this.searchedText = this.activateRoute.snapshot.queryParams["q"];
    // get query parameter q if changed afterwards
    this.activateRoute.queryParams.subscribe((params: Params) => {
      this.searchedText = params["q"];
    });
    setTimeout(() => {
      this.showLoader = false;
      this.results = this._dataStore.longDataStore;
    }, 2000);
  }
  userEnteringText(searchedText: string): void {
    // get searched text from navbar component using component event binding
    this.searchedText = searchedText;
  }

  userSelectingCategory(searchedType: string): void {
    // get selected category from navbar component using component event binding
    this.searchedType = searchedType;
  }
}
