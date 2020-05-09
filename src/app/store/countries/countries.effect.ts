import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, exhaustMap, mergeMap, catchError } from 'rxjs/operators';
import { CountryService } from 'src/app/shared/services/country.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../app.reducer';
import {
    CountriesAction,
    CountriesActionTypes,
    UpdateRegion,
    CountriesLoaded,
    CountriesErrorLoad,
} from './countries.action';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesEffects {
    @Effect()
    loadCountries$ = this.actions$.pipe(
        ofType<UpdateRegion>(CountriesActionTypes.UpdateRegion),
        mergeMap((action) =>
            this.countryService.getCountriesByRegion(action.payload).pipe(
                map((countries) => new CountriesLoaded(countries)),
                catchError((error) => of(new CountriesErrorLoad(error)))
            )
        )
    );

    constructor(
        private actions$: Actions,
        private countryService: CountryService
    ) {}
}
