import { ICountriesSatate } from './countries.reducer';
import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.reducer';

export const selectCountries = (state: IAppState) => state.countries;

export const countrySelected = createSelector(
    selectCountries,
    (state: ICountriesSatate) => state.CountrySelected
);

export const allCountries = createSelector(
    selectCountries,
    (state: ICountriesSatate) => state.Countries
);

export const regionSelected = createSelector(
    selectCountries,
    (state: ICountriesSatate) => state.RegionSelected
);

export const allRegions = createSelector(
    selectCountries,
    (state: ICountriesSatate) => state.Regions
);
