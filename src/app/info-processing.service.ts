import { Injectable } from "@angular/core";
import { AllInfoHttpService } from "./all-info-http.service";

@Injectable({
  providedIn: "root"
})
export class InfoProcessingService {
  data: {}[] = [];
  names: {}[] = [];
  constructor(private _httpService: AllInfoHttpService) {}
  public getDataFromApi(): {}[] {
    this._httpService.getAllData().subscribe(
      (response: { name?: string }[]) => {
        this.names = response.map(r => r.name);
        this.data.push(...response);
      },
      error => {
        console.log(error);
      }
    );
    return this.data;
  }
  getNamesFromApi() {
    return this.names;
  }
}
