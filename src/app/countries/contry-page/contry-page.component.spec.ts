import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContryPageComponent } from './contry-page.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/store/app.reducer';

describe('ContryPageComponent', () => {
    let component: ContryPageComponent;
    let fixture: ComponentFixture<ContryPageComponent>;

    // prettier-ignore
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContryPageComponent],
            providers:[
              StoreModule.forRoot(appReducer)
            ]
        }).compileComponents()
          .then(() => {
              fixture = TestBed.createComponent(ContryPageComponent);
              component = fixture.componentInstance;
              fixture.detectChanges();
          });
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
