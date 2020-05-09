import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
    DEFAULT_VALUE = '';

    @Input() label: string;
    @Input() options: any[];
    @Input() optionLabel: string = '';
    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngOnInit(): void {}

    onSelectOption(event: any) {
        let index = event.srcElement.selectedIndex - 1;
        this.onSelect.emit(this.options[index]);
    }
}
