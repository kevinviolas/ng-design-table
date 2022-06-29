import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
export declare class EquipementTypeComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    private service;
    name: string;
    type: string;
    size: number | string;
    icon: string;
    css: any;
    constructor(changeDetectorRefs: ChangeDetectorRef, service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
