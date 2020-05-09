import { inject, fakeAsync, TestBed, async } from '@angular/core/testing';
import {
    HttpTestingController,
    HttpClientTestingModule,
    TestRequest,
} from '@angular/common/http/testing';

import { CountryService } from './country.service';
import { CountriesMockResponse } from 'src/app/test-data/countries-data';
import { CountryModel } from '../models/country.model';
import { CurrencyModel } from '../models/currency.model';

const countryExpected = new CountryModel(
    'Austria',
    'Vienna',
    8725931,
    new CurrencyModel('Euro', 'EUR', '€'),
    'https://restcountries.eu/data/aut.svg'
);

describe('CountryService', () => {
    let service: CountryService;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {
                    provide: 'BASE_API_URL',
                    useValue: 'https://restcountries.eu/rest/v2/region',
                },
                CountryService,
            ],
        });
    }));

    // prettier-ignore
    beforeEach(async(
        inject(
            [CountryService, HttpTestingController],
            (_service, _httpMock) => {
                service = _service;
                httpMock = _httpMock;
            }
        )
    ));

    afterEach(() => {
        httpMock.verify();
    });

    describe('getCountriesByRegion', () => {
        const getCountriesCall = (region: string, resonse: any, callback) => {
            return fakeAsync(() => {
                let response;
                service.getCountriesByRegion(region).subscribe((_res) => {
                    response = _res;
                });
                const requestTest = httpMock.expectOne({ method: 'GET' });
                requestTest.flush(resonse);
                callback(requestTest, response);
            });
        };

        // prettier-ignore
        it('should retrieves countries',
            getCountriesCall('REGION_NAME',CountriesMockResponse,
                (req: TestRequest, res: CountryModel[]) => {
                    const countries = res;
                    expect(countries.length).toEqual(2,'Expected to find two countries');
                }
            )
        );

        // prettier-ignore
        it('should parse CountryModel',
            getCountriesCall('REGION_NAME',CountriesMockResponse,
                (req: TestRequest, res: CountryModel[]) => {
                    const country = res[0];
                    expect(country.Name).toEqual(countryExpected.Name,'Expected to parse Name');

                    expect(country.Capital).toEqual(countryExpected.Capital,'Expected to parse Capital');

                    expect(country.Population).toEqual(countryExpected.Population,'Expected to parse Population');

                    expect(country.FlagSVG).toEqual(countryExpected.FlagSVG,'Expected  to parse FlagURL');

                    expect(country.Currency.Code).toEqual(countryExpected.Currency.Code,'Expected to parse Currency code');

                    expect(country.Currency.Name).toEqual(countryExpected.Currency.Name,'Expected to parse Currency name');

                    expect(country.Currency.Symbol).toEqual(countryExpected.Currency.Symbol,'Expected to parse Currency symbol');
                }
            )
        );

        // prettier-ignore
        it('shoud be perform the right URL',
            getCountriesCall('REGION_NAME',CountriesMockResponse,
                (req: TestRequest, res: CountryModel[]) => {

                    expect(req.request.url).toEqual('https://restcountries.eu/rest/v2/region/REGION_NAME',
                                                    'Expected to find the url https://restcountries.eu/rest/v2/region/REGION_NAME ');

                }
            )
        );
    }); // end getCountriesByRegion
});
