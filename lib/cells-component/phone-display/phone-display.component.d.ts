import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export declare class PhoneDisplayComponent implements OnInit, OnChanges {
    private fb;
    number: string;
    display: string;
    flag: string;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private normalize;
}
