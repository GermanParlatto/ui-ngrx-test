import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpParams, HttpClientModule, HttpClient } from '@angular/common/http';
import { CountryModel } from '../models/country.model';
import { CurrencyModel } from '../models/currency.model';

@Injectable({
    providedIn: 'root',
})
export class CountryService {
    baseApiUrl: string;
    constructor(
        @Inject('BASE_API_URL') baseApiUrl: string,
        private http: HttpClient
    ) {
        this.baseApiUrl = baseApiUrl;
    }

    getCountriesByRegion(region: string): Observable<CountryModel[]> {
        return this.http.get<any>(`${this.baseApiUrl}/${region}`).pipe(
            map((response) =>
                response.map((country) => {
                    let {
                        name,
                        capital,
                        population,
                        currencies,
                        flag,
                    } = country;
                    let currency = new CurrencyModel(
                        currencies[0].name,
                        currencies[0].code,
                        currencies[0].symbol
                    );
                    return new CountryModel(
                        name,
                        capital,
                        population,
                        currency,
                        flag
                    );
                })
            )
        );
    }
}
