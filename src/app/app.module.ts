import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { ContryPageComponent } from './countries/contry-page/contry-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffects } from './store/countries/countries.effect';

@NgModule({
    declarations: [
        AppComponent,
        DropdownComponent,
        ContryPageComponent,
        CountryDetailComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(appReducer),
        EffectsModule.forRoot([CountriesEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            // logOnly: environment.production, // Restrict extension to log-only mode
        }),
    ],
    providers: [
        {
            provide: 'BASE_API_URL',
            useValue: 'https://restcountries.eu/rest/v2/region',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
