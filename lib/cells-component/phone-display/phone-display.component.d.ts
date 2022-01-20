import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CountryISO } from 'ngx-intl-tel-input';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class PhoneDisplayComponent implements OnInit, OnChanges {
    private fb;
    number: string;
    display: string;
    flag: CountryISO;
    phoneForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private normalize;
}
