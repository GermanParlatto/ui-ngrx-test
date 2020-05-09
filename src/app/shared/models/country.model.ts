import { CurrencyModel } from './currency.model';

export class CountryModel {
    Name: string;
    Capital: string;
    Population: number;
    Currency: CurrencyModel;
    FlagSVG: string;

    constructor(
        name: string,
        capital: string,
        population: number,
        currency: CurrencyModel,
        flag: string
    ) {
        this.Name = name;
        this.Capital = capital;
        this.Population = population;
        this.Currency = currency;
        this.FlagSVG = flag;
    }
}
