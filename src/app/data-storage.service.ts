import { Injectable } from '@angular/core';
import { AllInfoHttpService } from './all-info-http.service';
import { Subject } from 'rxjs';
import { ShortDataType, UserQuery, Country } from './shared';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private _fullDataStore: {}[] = [];
  private _shortDataStore: ShortDataType[] = [];
  userQuery = new Subject<UserQuery>();

  constructor(private _httpService: AllInfoHttpService) {}

  processData() {
    this._httpService.getAllData().subscribe(
      (response: ShortDataType[]) => {
        this._shortDataStore = response.map(r => {
          return {
            name: r.name,
            flag: r.flag,
            alpha3Code: r.alpha3Code.toLowerCase()
          };
        });

        this._fullDataStore = response;
      },
      error => {
        console.log(error);
      }
    );
  }
  get longDataStore(): Country[] {
    return this._fullDataStore;
  }
  get shortDataStore(): ShortDataType[] {
    return this._shortDataStore;
  }
}
