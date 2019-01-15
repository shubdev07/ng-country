import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'https://restcountries.eu/rest/v2';

  constructor(private _http: HttpClient) { }

  public getAllCountries(region) {
    return this._http.get(`${this.baseUrl}/region/${region}`);
  }

  public getSingleCountryDetails(capital) {
    return this._http.get(`${this.baseUrl}/capital/${capital}`);
  }
}
