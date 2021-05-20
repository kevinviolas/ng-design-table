import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CellsComponentList } from "./setting/CellsComponentRegistry";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { CoreMatTable, CoreMatTableInterface, FilterDateInterface, Page, PageRequest, Sort } from "./core-data-table";
import { ActivatedRoute, Router } from "@angular/router";
import { TableService } from "./table.service";
interface displayColumnsConfig {
    sizeIcon?: number;
    displayYes?: boolean;
    displayNo?: boolean;
}
interface displayedColumnsInterface {
    key: string;
    value: string;
    ratio?: number;
    order?: number;
    class?: string;
    module?: CellsComponentList;
    override?: string | string[];
    display?: string;
    align?: string;
    sort?: boolean;
    config?: displayColumnsConfig;
}
declare class TableComponent implements OnInit, OnChanges {
    private router;
    private route;
    private service;
    private detector;
    paginatorCurrent: MatPaginator;
    sortCurrent: MatSort;
    columnDefinitions: [displayedColumnsInterface];
    displayDetail: boolean;
    displayComponent: string;
    data: CoreMatTableInterface;
    callFunction: EventEmitter<any>;
    columnsToDisplay: string[];
    filter: Array<string>;
    displayedColumns: any;
    expandedElement: any;
    index: number;
    constructor(router: Router, route: ActivatedRoute, service: TableService, detector: ChangeDetectorRef);
    ngOnInit(): void;
    buildHeaders(): Promise<void>;
    generateClass(Class: string[]): string[];
    sort(): Promise<[displayedColumnsInterface]>;
    buildLink(override: string[], element: any): string;
    Join(elem: any, override: string[], joinKey?: string): string;
    reset(): boolean;
    expandShow(template: string): void;
    ngOnChanges(changes: SimpleChanges): void;
}
export { CoreMatTable, FilterDateInterface, CoreMatTableInterface, Page, PageRequest, Sort, displayedColumnsInterface, CellsComponentList, TableComponent };
