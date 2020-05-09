import { Component, OnInit, Input } from '@angular/core';
import { CountryModel } from 'src/app/shared/models/country.model';

@Component({
    selector: 'app-country-detail',
    templateUrl: './country-detail.component.html',
    styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
    @Input() country: CountryModel;
    constructor() {}

    ngOnInit(): void {}

    getCurrency() {
        if (this.country)
            return `${this.country.Currency.Name}, ${this.country.Currency.Code}, ${this.country.Currency.Symbol}`;
        return '';
    }
}
