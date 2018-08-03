import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RegionsComponent } from "./regions/regions.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "../../node_modules/@angular/common/http";
import { SearchResultsPipe } from './search-results.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegionsComponent,
    SearchComponent,
    SearchResultsPipe
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
