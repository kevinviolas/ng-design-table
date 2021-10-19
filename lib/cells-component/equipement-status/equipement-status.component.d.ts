import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
export declare class EquipementStatusComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    private service;
    type: string;
    icon: string;
    size: number | string;
    css: any;
    constructor(changeDetectorRefs: ChangeDetectorRef, service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
