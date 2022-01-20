import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CountryISO } from 'ngx-intl-tel-input';
export declare class PhoneDisplayComponent implements OnInit, OnChanges {
    number: string;
    display: string;
    flag: CountryISO;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private normalize;
}
