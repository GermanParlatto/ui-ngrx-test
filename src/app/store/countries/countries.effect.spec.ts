import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/shared/services/country.service';
import { CountriesEffects } from './countries.effect';
import {
    UpdateRegion,
    CountriesLoaded,
    CountriesErrorLoad,
} from './countries.action';
import { CountryModel } from 'src/app/shared/models/country.model';
import { CurrencyModel } from 'src/app/shared/models/currency.model';

describe('CountriesEffects', () => {
    let actions: Observable<any>;
    let effects: CountriesEffects;
    let countryService: jasmine.SpyObj<CountryService>;
    const currency = new CurrencyModel('Euro', 'EUR', '€');
    const countryModelExpect = new CountryModel(
        'Belgian',
        'Brussels',
        11319511,
        currency,
        'FLAG'
    );
    const countriesExpected = [countryModelExpect];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CountriesEffects,
                provideMockActions(() => actions),
                {
                    provide: CountryService,
                    useValue: {
                        getCountriesByRegion: jasmine.createSpy(),
                    },
                },
            ],
        });

        effects = TestBed.get(CountriesEffects);
        countryService = TestBed.get(CountryService);
    });

    describe('loadCounrties', () => {
        it('should return CountriesLoadedd action', () => {
            const action = new UpdateRegion('REGION_NAME');
            const outcome = new CountriesLoaded(countriesExpected);

            actions = hot('-a', { a: action });
            const response = cold('-a|', { a: countriesExpected });
            countryService.getCountriesByRegion.and.returnValue(response);

            const expected = cold('--b', { b: outcome });
            expect(effects.loadCountries$).toBeObservable(expected);
        });

        it('should fail and return CountriesErrorLoad action', () => {
            const action = new UpdateRegion('REGION_NAME');
            const error = 'SOME_ERROR';
            const outcome = new CountriesErrorLoad(error);

            actions = hot('-a', { a: action });
            const response = cold('-#|', {}, error);
            countryService.getCountriesByRegion.and.returnValue(response);

            const expected = cold('--b', { b: outcome });
            expect(effects.loadCountries$).toBeObservable(expected);
        });
    });
});
