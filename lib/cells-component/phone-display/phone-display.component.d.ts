import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class PhoneDisplayComponent implements OnInit, OnChanges {
    number: string;
    display: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private normalize;
}
