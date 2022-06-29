import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
export declare class OriginComponent implements OnInit, OnChanges {
    service: TableService;
    icon: string;
    iconSrc: string;
    constructor(service: TableService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
