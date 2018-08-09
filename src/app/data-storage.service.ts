import { Injectable } from '@angular/core';
import { AllInfoHttpService } from './all-info-http.service';
import { Subject } from 'rxjs';

interface ShortDataType {
  name?: string;
  flag?: string;
  alpha3Code?: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private _fullDataStore: {}[] = [];
  private _shortDataStore: {}[] = [];
  userQuery = new Subject<{ searchedText: string; searchedType: string }>();

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
