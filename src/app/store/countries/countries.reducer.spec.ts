import { countriesReducer, initialState } from './countries.reducer';
import {
    UpdateCountry,
    UpdateRegion,
    CountriesLoaded,
    CountriesErrorLoad,
} from './countries.action';
import { CountryModel } from 'src/app/shared/models/country.model';
import { CurrencyModel } from 'src/app/shared/models/currency.model';

describe('Countries Reducer', () => {
    const currency = new CurrencyModel('Euro', 'EUR', '€');
    const countryModelExpect = new CountryModel(
        'Belgian',
        'Brussels',
        11319511,
        currency,
        'FLAG'
    );
    const countriesExpected = [countryModelExpect];

    it('UpdateCountry action', () => {
        const action = new UpdateCountry(countryModelExpect);

        const state = countriesReducer(initialState, action);

        expect(state.CountrySelected).toEqual(
            countryModelExpect,
            'Expected to fin a Country object passed to the action'
        );
    });

    it('Update Region action', () => {
        const regionExpected = 'Asia';
        const action = new UpdateRegion(regionExpected);

        const state = countriesReducer(initialState, action);

        expect(state.RegionSelected).toEqual(
            regionExpected,
            'Expected to find region passed to the action'
        );
    });

    it('Countries Loaded action', () => {
        const action = new CountriesLoaded(countriesExpected);

        const state = countriesReducer(initialState, action);

        expect(state.Countries).toEqual(
            countriesExpected,
            'Expected to find countries array passed to the action'
        );
        expect(state.CountrySelected).toEqual(
            null,
            'Expected to reset country selected as null'
        );
    });

    it('Countries Error Load action', () => {
        const errorExpected = 'ERROR_LOAD';
        const action = new CountriesErrorLoad(errorExpected);

        const state = countriesReducer(initialState, action);

        expect(state.ErrorLoad).toEqual(
            errorExpected,
            'Expected to find countries array passed to the action'
        );
        expect(state.CountrySelected).toEqual(
            null,
            'Expected to reset country selected as null'
        );
    });
});
