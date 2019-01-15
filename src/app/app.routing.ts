import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContinentComponent } from './countries/countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'countries/:region', component: ContinentComponent, pathMatch: 'full' },
    { path: 'country/:capital', component: SingleCountryComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
