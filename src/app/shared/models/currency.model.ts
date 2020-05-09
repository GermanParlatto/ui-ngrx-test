export class CurrencyModel {
    Name: string;
    Code: string;
    Symbol: string;
    constructor(name: string, code: string, symbol: string) {
        this.Name = name;
        this.Code = code;
        this.Symbol = symbol;
    }
}
