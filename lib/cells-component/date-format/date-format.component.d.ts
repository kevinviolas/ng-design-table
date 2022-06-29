import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class DateFormatComponent implements OnInit, OnChanges {
    date: string;
    timezone: string;
    display: string;
    constructor();
    ngOnInit(): void;
    run(date: string): string;
    ngOnChanges(changes: SimpleChanges): void;
}
