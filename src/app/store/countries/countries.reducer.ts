import { CountryModel } from 'src/app/shared/models/country.model';
import { CountriesAction, CountriesActionTypes } from './countries.action';
import { Action } from '@ngrx/store';

export interface ICountriesSatate {
    CountrySelected: CountryModel;
    Countries: CountryModel[];
    RegionSelected: string;
    Regions: string[];
    ErrorLoad: string;
}

export const initialState: ICountriesSatate = {
    CountrySelected: null,
    Countries: [],
    RegionSelected: null,
    Regions: ['Asia', 'Europe'],
    ErrorLoad: null,
};

export function countriesReducer(
    state = initialState,
    action: CountriesAction
): ICountriesSatate {
    switch (action.type) {
        case CountriesActionTypes.CountriesLoaded: {
            return {
                ...state,
                Countries: action.payload,
                CountrySelected: null,
            };
        }
        case CountriesActionTypes.UpdateCountry: {
            return { ...state, CountrySelected: action.payload };
        }
        case CountriesActionTypes.UpdateRegion: {
            return { ...state, RegionSelected: action.payload };
        }
        case CountriesActionTypes.CountriesErrorLoad: {
            return { ...state, ErrorLoad: action.payload };
        }
        default:
            return state;
    }
}
