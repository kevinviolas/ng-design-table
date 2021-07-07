import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
export declare class PriorityComponent implements OnInit, OnChanges {
    private service;
    icon: string;
    iconLabel: string;
    iconSrc: string;
    label: string;
    constructor(service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
