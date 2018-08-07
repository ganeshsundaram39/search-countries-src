import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegionsComponent } from './regions/regions.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultsPipe } from './search-results.pipe';

import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'results/:filter', component: ResultsComponent },
  { path: 'details/:name', component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegionsComponent,
    SearchComponent,
    SearchResultsPipe,
    ResultsComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
