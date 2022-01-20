import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CountryISO } from 'ngx-intl-tel-input';
import { FormGroup } from '@angular/forms';
export declare class PhoneDisplayComponent implements OnInit, OnChanges {
    number: string;
    display: string;
    flag: CountryISO;
    phoneForm: FormGroup;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private normalize;
}
