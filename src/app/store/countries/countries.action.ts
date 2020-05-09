import { CountryModel } from 'src/app/shared/models/country.model';
import { Action } from '@ngrx/store';

export enum CountriesActionTypes {
    CountriesLoaded = '[Countries] Data Loaded',
    CountriesErrorLoad = '[Countries] Error Load',
    UpdateCountry = '[Countries] Update Country',
    UpdateRegion = '[Countries] Update Region',
}

export class CountriesLoaded implements Action {
    readonly type = CountriesActionTypes.CountriesLoaded;
    constructor(public payload: CountryModel[]) {}
}

export class UpdateCountry implements Action {
    readonly type = CountriesActionTypes.UpdateCountry;
    constructor(public payload: CountryModel) {}
}

export class UpdateRegion implements Action {
    readonly type = CountriesActionTypes.UpdateRegion;
    constructor(public payload: string) {}
}

export class CountriesErrorLoad implements Action {
    readonly type = CountriesActionTypes.CountriesErrorLoad;
    constructor(public payload: string) {}
}

export type CountriesAction =
    | CountriesLoaded
    | UpdateCountry
    | UpdateRegion
    | CountriesErrorLoad;
