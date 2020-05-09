import {
    async,
    ComponentFixture,
    TestBed,
    fakeAsync,
} from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DropdownComponent', () => {
    let component: DropdownComponent;
    let fixture: ComponentFixture<DropdownComponent>;
    let el: DebugElement;
    let expectedOptions = ['Asia', 'Europe'];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DropdownComponent],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(DropdownComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
                fixture.detectChanges();
            });
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should bing options', () => {
        let expectedOptions = ['Asia', 'Europe'];
        component.options = expectedOptions;

        // fixture.detectChanges();

        let optionsRedered = el
            .queryAll(By.css('.dropdown__select__option'))
            .map((debugEl) => debugEl.nativeElement.value);

        expect(optionsRedered).toBe(optionsRedered);
    });

    it('should bing label', () => {
        let labelExpected = 'Regions';
        component.label = labelExpected;

        fixture.detectChanges();

        let labelDe = el.query(By.css('.dropdown__label'));

        expect(labelDe.nativeElement.innerText).toBe(labelExpected);
    });

    it('should reaise selected option', fakeAsync(() => {
        let selectedOption;
        component.options = expectedOptions;
        component.onSelect.subscribe((option) => (selectedOption = option));

        let selectDe = el.query(By.css('.dropdown__select'));
        let eventObj = { srcElement: { selectedIndex: 1 } };
        selectDe.triggerEventHandler('change', eventObj);

        expect(expectedOptions).toContain(selectedOption);
    }));
});
