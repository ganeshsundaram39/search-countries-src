import { Injectable } from "@angular/core";
import { InfoProcessingService } from "./info-processing.service";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  private _dataStore: {}[] = [];

  constructor(private _processedData: InfoProcessingService) {
    this._dataStore = this._processedData.getDataFromApi();
  }

  get dataStore(): {}[] {
    return this._dataStore;
  }
  get names(): {}[] {
    return this._processedData.getNamesFromApi();
  }
}
