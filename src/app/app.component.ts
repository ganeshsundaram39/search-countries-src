import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "./data-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private _dataStore: DataStorageService) {}
  ngOnInit() {
    this._dataStore.processData();
  }
}
