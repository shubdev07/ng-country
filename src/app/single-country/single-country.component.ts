import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  private capital;
  public countryDetails = { flag: 'src/assets/img/nasa-53884-unsplash.jpg' };
  public extraDetails = {};

  constructor(private _route: ActivatedRoute, private _http: HttpService) {
    this.capital = this._route.snapshot.paramMap.get('capital');
  }

  ngOnInit() {
    this._http.getSingleCountryDetails(this.capital)
      .subscribe(response => {
        if (response['status']) {
          console.log(response);
        } else {
          this.countryDetails = response[0];
          if (this.countryDetails['currencies']) {
            this.extraDetails['currencies'] = {};
            this.countryDetails['currencies'].forEach(currencyObj => {
              Object.keys(currencyObj).forEach(key => {
                this.extraDetails['currencies'][key] = currencyObj[key];
              });
            });
            delete this.countryDetails['currencies'];
          }
          if (this.countryDetails['languages']) {
            /* this.extraDetails['languages'] = {};
            this.countryDetails.languages.forEach(currencyObj => {
              Object.keys(currencyObj).forEach(key => {
                this.extraDetails['languages'][key] = currencyObj[key];
              });
            }); */
            delete this.countryDetails['languages'];
          }

          if (this.countryDetails['translations']) {
            delete this.countryDetails['translations'];
          }

          if (this.countryDetails['regionalBlocs']) {
            delete this.countryDetails['regionalBlocs'];
          }
          console.log('country details ', this.extraDetails);
        }
      });
  }

}
