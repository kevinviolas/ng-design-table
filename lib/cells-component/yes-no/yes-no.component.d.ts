import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
export declare class YesNoComponent implements OnInit, OnChanges {
    private service;
    valid: boolean;
    displayNo: boolean;
    displayYes: boolean;
    size: any;
    icon: string;
    css: any;
    constructor(service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
