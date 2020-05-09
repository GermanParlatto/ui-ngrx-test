import { ActionReducerMap } from '@ngrx/store';
import {
    ICountriesSatate,
    countriesReducer,
} from './countries/countries.reducer';

export interface IAppState {
    countries: ICountriesSatate;
}

export const appReducer: ActionReducerMap<IAppState, any> = {
    countries: countriesReducer,
};
