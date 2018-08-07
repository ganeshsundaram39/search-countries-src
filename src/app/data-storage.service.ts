import { Injectable } from '@angular/core';
import { AllInfoHttpService } from './all-info-http.service';

interface ShortDataType {
  name?: string;
  flag?: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private _fullDataStore: {}[] = [];
  private _shortDataStore: {}[] = [];

  constructor(private _httpService: AllInfoHttpService) {}

  processData() {
    this._httpService.getAllData().subscribe(
      (response: ShortDataType[]) => {
        this._shortDataStore = response.map(r => {
          return {
            name: r.name,
            flag: r.flag
          };
        });

        this._fullDataStore.push(...response);
      },
      error => {
        console.log(error);
      }
    );
  }
  get longDataStore(): {}[] {
    return this._fullDataStore;
  }
  get shortDataStore(): {}[] {
    return this._shortDataStore;
  }
}
