import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
export declare class GenderComponent implements OnInit, OnChanges {
    private service;
    type: string;
    size: number;
    icon: string;
    css: any;
    constructor(service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
