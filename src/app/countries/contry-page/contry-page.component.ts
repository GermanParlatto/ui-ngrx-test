import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from 'src/app/shared/models/country.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.reducer';
import {
    countrySelected,
    allRegions,
    allCountries,
} from 'src/app/store/countries/countries.selector';
import {
    UpdateRegion,
    UpdateCountry,
} from 'src/app/store/countries/countries.action';

@Component({
    selector: 'app-contry-page',
    templateUrl: './contry-page.component.html',
    styleUrls: ['./contry-page.component.scss'],
})
export class ContryPageComponent implements OnInit {
    regions$: Observable<string[]>;
    contries$: Observable<CountryModel[]>;
    country$: Observable<CountryModel>;

    constructor(private store: Store<IAppState>) {}

    ngOnInit(): void {
        this.country$ = this.store.pipe(select(countrySelected));
        this.contries$ = this.store.pipe(select(allCountries));
        this.regions$ = this.store.pipe(select(allRegions));
    }

    regionSelected(region: string) {
        this.store.dispatch(new UpdateRegion(region));
    }

    contrySelected(country: CountryModel) {
        this.store.dispatch(new UpdateCountry(country));
    }
}
