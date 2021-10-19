import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
export declare class CustomerRankComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    private service;
    type: string;
    typeClass: string;
    private _type;
    constructor(changeDetectorRefs: ChangeDetectorRef, service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
