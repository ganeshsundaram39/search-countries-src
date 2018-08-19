import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import {Country} from './shared';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor(private dataStorage: DataStorageService) {}

  getDetails(code: string): Country {
    return this.dataStorage.longDataStore.find(
      d => d['alpha3Code'].toLowerCase() === code
    );
  }
}
