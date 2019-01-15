import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class ContinentComponent implements OnInit {
  private region;
  private allCountries: any;
  public userFilter: any = { capital: '', name: '' };

  constructor(private _route: ActivatedRoute, private _http: HttpService) {
    this.region = this._route.snapshot.paramMap.get('region');
  }

  ngOnInit() {
    this._http.getAllCountries(this.region)
      .subscribe(response => {
        if (response['status']) {
          console.log(response);
        } else {
          this.allCountries = response;
        }
      });
  }

}
