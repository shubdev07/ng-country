import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContinentComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { SingleCountryComponent } from './single-country/single-country.component';

@NgModule({
  declarations: [
    AppComponent,
    ContinentComponent,
    HomeComponent,
    SingleCountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    FilterPipeModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
