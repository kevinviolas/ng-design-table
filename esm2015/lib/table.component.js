import { __awaiter, __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellsComponentList } from './setting/CellsComponentRegistry';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CoreMatTable } from './core-data-table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from './table.service';
import { TranslateService } from './translate.service';
let TableComponent = class TableComponent {
    constructor(router, route, service, detector, translate, changeDetectorRef) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.detector = detector;
        this.translate = translate;
        this.changeDetectorRef = changeDetectorRef;
        this.displayDetail = false;
        this.btnOverride = false;
        this.callFunction = new EventEmitter();
        this.inputSearch = '';
        this.EmptyRow = false;
        this.blockDetails = false;
        this.clicked = new EventEmitter();
        this.filter = [];
        this.index = 0;
        this.open = '';
        this.search = '';
        this.cancelSearch = '';
        this.noResult = '';
        this.details = '';
        this.showTable = false;
    }
    expand(element) {
        if (this.blockDetails) {
            return;
        }
        if (this.expandedElement === element) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = element;
        }
        console.log(this.expandedElement);
    }
    ngOnInit() {
        this.service.emptyRow = this.EmptyRow;
        this.open = this.translate.translate(this.lang, 'OPEN');
        this.search = this.translate.translate(this.lang, 'SEARCH');
        this.cancelSearch = this.translate.translate(this.lang, 'CANCEL_SEARCH');
        this.noResult = this.translate.translate(this.lang, 'NO_RESULT');
        this.details = this.translate.translate(this.lang, 'DETAILS');
        if (this.data) {
            this.expandedElement = false;
            this.data.paginator = this.paginatorCurrent;
            this.data.sort = this.sortCurrent;
            this.data.pageNumber.subscribe((newpage) => {
                if (newpage > 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: newpage + 1 },
                        queryParamsHandling: 'merge',
                    });
                }
                else if (newpage === 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: null },
                        queryParamsHandling: 'merge',
                    });
                }
                if (this.data && this.data.paginator && this.data.paginator.pageIndex !== newpage) {
                    // this.data.paginator.pageIndex = newpage;
                    console.log('on passe dans la ligne 146', this.data.paginator.pageIndex, newpage);
                }
                this.changeDetectorRef.markForCheck();
            });
            const page = this.route.snapshot.queryParams['page'];
            if (page) {
                const currentPage = Number(page) - 1;
                this.data.startWith = currentPage;
                this.data.fetch(currentPage);
                this.data.number = currentPage;
            }
            this.PrivateColumnDefinitions = this.columnDefinitions;
            this.buildHeaders().catch((err) => console.log('Error build table', err));
            this.service.updateHeader.subscribe((status) => {
                if (status === true) {
                    this.displayedColumns = null;
                    this.columnsToDisplay = null;
                    this.PrivateColumnDefinitions = this.service.displayColumn;
                    console.log('Module table -> New column definitions', this.PrivateColumnDefinitions);
                    this.buildHeaders().catch((err) => console.log('Error build table', err));
                    this.detector.detectChanges();
                }
            });
        }
    }
    ngAfterViewChecked() {
        this.showTable = true;
    }
    buildHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            this.displayedColumns = yield this.sort();
            if (this.displayedColumns) {
                const tmp = [];
                for (let k of this.displayedColumns) {
                    tmp.push(k.key);
                }
                this.columnsToDisplay = [...tmp];
            }
            //console.log('Module Table New Update Column Definition',  this.columnsToDisplay);
        });
    }
    generateClass(Class) {
        const MyClass = ['default-table-class'];
        for (let c of Class) {
            if (c && c !== '') {
                MyClass.push(c);
            }
        }
        return MyClass;
    }
    sort() {
        return __awaiter(this, void 0, void 0, function* () {
            const compare = (a, b) => {
                return (a.order < b.order ? -1 : (a.order > b.order ? 1 : 0));
            };
            if (this.PrivateColumnDefinitions) {
                return [...this.PrivateColumnDefinitions.sort(compare)];
            }
        });
    }
    buildLink(override, element) {
        if (override.length >= 2) {
            let basePath = override[0];
            for (let i = 1; i < override.length; i++) {
                basePath += '/' + element[override[i]];
            }
            return basePath;
        }
    }
    Join(elem, override, joinKey = '\n') {
        const value = [];
        for (let x in elem) {
            if (override.indexOf(x) > -1) {
                value.push(elem[x]);
            }
        }
        return value.join(joinKey);
    }
    reset() {
        this.data.filter({
            target: {
                value: ''
            }
        });
        return true;
    }
    expandShow(template) {
    }
    ngOnChanges(changes) {
        if ((this.inputSearch.length > 1 || this.inputSearch.length === 0)
            && this.inputSearch.length < 200 && this.data) {
            this.data.filter(this.inputSearch);
            this.data.fetch(0);
        }
        //this.changeDetectorRef.markForCheck();
        if (changes.data && changes.data.isFirstChange()) {
            console.log('Init init');
            this.ngOnInit();
        }
        //
    }
};
TableComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: TableService },
    { type: ChangeDetectorRef },
    { type: TranslateService },
    { type: ChangeDetectorRef }
];
__decorate([
    ViewChild('MatPaginatorCurrent', { static: true }),
    __metadata("design:type", MatPaginator)
], TableComponent.prototype, "paginatorCurrent", void 0);
__decorate([
    ViewChild('table', { static: true }),
    __metadata("design:type", MatSort)
], TableComponent.prototype, "sortCurrent", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TableComponent.prototype, "columnDefinitions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TableComponent.prototype, "displayDetail", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TableComponent.prototype, "displayComponent", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TableComponent.prototype, "lang", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "btnOverride", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TableComponent.prototype, "callFunction", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "inputSearch", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "EmptyRow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "blockDetails", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TableComponent.prototype, "clicked", void 0);
TableComponent = __decorate([
    Component({
        selector: 'ngx-design-table',
        template: "<div class=\"table-wrapper\">\r\n  <div class=\"row\" style=\"height: 20px;background: transparent!important; box-shadow: none !important\">\r\n    <div class=\"\">\r\n      <!--<div class=\"col-lg-12 search-container\">\r\n        <mat-icon style=\"left: 16%; position: absolute; margin-top: 10px;\">search</mat-icon>\r\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\"\r\n        [value]=\"inputSearch\"\r\n        (change)=\"onChange($event)\"\r\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\r\n                        && $event.target.value.length < 200)\r\n                                       ? data.filter($event) : null)\"\r\n               #filterOngoing>\r\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\r\n           [matTooltip]=\"cancelSearch\"\r\n           (click)=\"reset() && filterOngoing.value = ''\">\r\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\r\n        </a>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n  <!-- Table -->\r\n  <table mat-table #table=\"matSort\" [dataSource]=\"data \" multiTemplateDataRows matSort class=\"\"\r\n    *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\r\n    (matSortChange)=\"data.sortIt($event)\">\r\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\r\n      <ng-container *ngIf=\"column.sort\">\r\n        <th mat-header-cell *matHeaderCellDef\r\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\r\n          mat-sort-header>\r\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n        </th>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!column.sort\">\r\n        <!-- Ajouter fonction generate Class -->\r\n        <ng-container *ngIf=\"column.clickable\">\r\n          <th mat-header-cell *matHeaderCellDef\r\n            (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\r\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\r\n            style=\"cursor: pointer;\">\r\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n            <app-is-mat-icon *ngIf=\"column.valueStatement && column.statement !== undefined\"\r\n              [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\r\n            </app-is-mat-icon>\r\n          </th>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!column.clickable\">\r\n          <th mat-header-cell *matHeaderCellDef\r\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\r\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n          </th>\r\n        </ng-container>\r\n        <th mat-header-cell *matHeaderCellDef\r\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\r\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n        </th>\r\n      </ng-container>\r\n\r\n      <td *ngIf=\"EmptyRow\" [attr.colspan]=\"columnsToDisplay.length\" class=\"empty-row\"></td>\r\n      <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\r\n        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\r\n        <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\r\n          <!-- Button click -->\r\n          <ng-container *ngSwitchCase=\"'button-click'\">\r\n            <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\">\r\n              <!--<ng-container *ngIf=\"column.display\">\r\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!column.display\">\r\n                {{element[column.key]}}\r\n              </ng-container>-->\r\n              {{ details }}\r\n            </a>\r\n          </ng-container>\r\n          <!-- Button link -->\r\n          <ng-container *ngSwitchCase=\"'button-link'\">\r\n            <!--                matBadge=\"*\" matBadgePosition=\"before\"\r\n               matBadgeColor=\"accent\" -->\r\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\" (click)=\"element.new = false\"\r\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\r\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\r\n              <ng-container *ngIf=\"column.display\">\r\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!column.display\">\r\n                {{element[column.key]}}\r\n              </ng-container>\r\n            </a>\r\n            <a *ngIf=\"!element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\"\r\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\r\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\r\n              <ng-container *ngIf=\"column.display\">\r\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!column.display\">\r\n                {{element[column.key]}}\r\n              </ng-container>\r\n            </a>\r\n          </ng-container>\r\n          <!-- Button link text -->\r\n          <ng-container *ngSwitchCase=\"'button-link-text'\">\r\n            <a [matTooltip]=\"open\" class=\"btn-link-text btn-xs\" (click)=\"element.new = false\"\r\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\r\n              {{ details }}\r\n            </a>\r\n          </ng-container>\r\n          <!-- icon custom-->\r\n          <ng-container *ngSwitchCase=\"'custom-icon'\">\r\n            <input type=\"hidden\" [value]=\"element[column.key]\">\r\n            <img *ngIf=\"element[column.key] && column.valueOverride\" [src]=\"column.valueOverride[element[column.key]]\"\r\n              style=\"width: 20px; height: 20px;\">\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'it-category'\">\r\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\r\n          </ng-container>\r\n          <!-- icon it status -->\r\n          <ng-container *ngSwitchCase=\"'it-status'\">\r\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\r\n          </ng-container>\r\n          <!-- icon customer rank -->\r\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\r\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\r\n          </ng-container>\r\n          <!-- icon priority-->\r\n          <ng-container *ngSwitchCase=\"'priority'\">\r\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\r\n          </ng-container>\r\n          <!-- icon gender avatar-->\r\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\r\n            <app-gender [type]=\"element[column.key]\"></app-gender>\r\n          </ng-container>\r\n\r\n          <!-- icon gender avatar-->\r\n          <ng-container *ngSwitchCase=\"'phone-display'\">\r\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\r\n          </ng-container>\r\n\r\n          <!-- icon gender avatar-->\r\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\r\n            <app-yes-nox\r\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\r\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\" [displayNo]=\"column.config.displayYes\"\r\n              [displayYes]=\"column.config.displayNo\">\r\n            </app-yes-nox>\r\n            <app-yes-nox\r\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\r\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\r\n            </app-yes-nox>\r\n          </ng-container>\r\n          <!-- icon origin-->\r\n          <ng-container *ngSwitchCase=\"'origin'\">\r\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\r\n          </ng-container>\r\n          <!-- icon name avatar-->\r\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\r\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\" [src]=\"element[column.key]\"\r\n              [matTooltipClass]=\"'my-tooltip'\">\r\n            </name-avatar>\r\n          </ng-container>\r\n          <!-- date format -->\r\n          <ng-container *ngSwitchCase=\"'date-format'\">\r\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\r\n          </ng-container>\r\n          <!-- count rows -->\r\n          <ng-container *ngSwitchCase=\"'count-row'\">\r\n            <span style=\"padding-left: 14px\">\r\n              {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\r\n            </span>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'custom-status'\">\r\n            <lib-status [label]=\"element[column.key]\" [value]=\"element[column.category]\"></lib-status>\r\n          </ng-container>\r\n          <ng-container *ngSwitchDefault>\r\n            {{element[column.key]}}\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"element === 'empty'\">\r\n      <td [ngClass]=\"'empty-row'\" mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n        empty row\r\n      </td>\r\n    </ng-container>\r\n\r\n    </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\r\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\r\n        [@detailExpand]=\"expandedElement && element == expandedElement ? 'expanded' : 'collapsed'\" style=\"height: 0\">\r\n        <div *ngIf=\"element['CaseNumber'] && expandedElement\">\r\n          <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\r\n          </div>\r\n\r\n          <a [class.nav-expanded]=\"element == expandedElement\" [routerLink]=\"['/ticket/', element['CaseNumber']]\"\r\n            [title]=\"open\">\r\n            <img class=\"detail-view-ticket\" src=\"/assets/icons/eye.png\">\r\n          </a>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n    <ng-container *ngIf=\"displayDetail\">\r\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"\r\n        [ngClass]=\"!element || element === 'empty'? 'empty-row-none': 'detail-row'\"\r\n        [class.expanded]=\"expandedElement == element\" (click)=\"expand(element)\">\r\n      </tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\"\r\n        [ngClass]=\"!expandedElement || !row || row === 'empty'? 'empty-row': 'detail-row'\">\r\n\r\n      </tr>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!displayDetail\">\r\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\">\r\n      </tr>\r\n    </ng-container>\r\n  </table>\r\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\r\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\r\n      <div class=\"\">\r\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\r\n          {{ noResult }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\r\n    [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\" (page)=\"data.fetch($event.pageIndex)\"\r\n    showFirstLastButtons></mat-paginator>\r\n</div>",
        animations: [trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])],
        encapsulation: ViewEncapsulation.None,
        styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span,app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:\"Nexa Text Bold\";font-size:14px!important;letter-spacing:0;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:no-repeat padding-box #e5e8ee;border-radius:4px;text-align:left;font:bold 12px/19px \"Nexa Text\";letter-spacing:0;color:#707070!important;cursor:pointer;padding:10px}.empty-row{background:0 0!important;height:10px!important}.empty-row td{background:0 0!important;height:0}.empty-row .ng-trigger-detailExpand,.empty-row-none{display:none!important}"]
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        TableService,
        ChangeDetectorRef,
        TranslateService,
        ChangeDetectorRef])
], TableComponent);
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBd0NyRCxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFjO0lBNkJsQixZQUFvQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBMkIsRUFDM0IsU0FBMkIsRUFDM0IsaUJBQW9DO1FBTHBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFT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RUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQzthQUN0RixDQUFDLENBQUM7UUFDSCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztxQ0E4QjRCLE1BQU07UUFDUCxjQUFjO1FBQ1osWUFBWTtRQUNYLGlCQUFpQjtRQUNoQixnQkFBZ0I7UUFDUixpQkFBaUI7R0FsQ3BELGNBQWMsQ0FnTW5CO0FBRUQsT0FBTyxFQUNMLFlBQVksRUFPWixrQkFBa0IsRUFDbEIsY0FBYyxFQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDZWxsc0NvbXBvbmVudExpc3R9IGZyb20gJy4vc2V0dGluZy9DZWxsc0NvbXBvbmVudFJlZ2lzdHJ5JztcclxuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcclxuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7Q29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0fSBmcm9tICcuL2NvcmUtZGF0YS10YWJsZSc7XHJcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSAnLi90YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcclxuXHJcblxyXG5pbnRlcmZhY2UgZGlzcGxheUNvbHVtbnNDb25maWcge1xyXG4gIHNpemVJY29uPzogbnVtYmVyO1xyXG4gIGRpc3BsYXlZZXM/OiBib29sZWFuO1xyXG4gIGRpc3BsYXlObz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIHtcclxuICBrZXk6IHN0cmluZzsgLy8gb2JqZWN0IGtleVxyXG4gIHZhbHVlOiBzdHJpbmc7IC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xyXG4gIHJhdGlvPzogbnVtYmVyO1xyXG4gIG9yZGVyPzogbnVtYmVyOyAvLyBzb3J0IGNvbHVtblxyXG4gIGNsYXNzPzogc3RyaW5nOyAvLyBjc3MgY2xhc3NcclxuICBtb2R1bGU/OiBDZWxsc0NvbXBvbmVudExpc3Q7XHJcbiAgb3ZlcnJpZGU/OiBzdHJpbmcgfCBzdHJpbmdbXTsgLy8gZm9yIGJ1aWxkaW5nIHVybCBvciBhdmF0YXIgbmFtZVxyXG4gIGRpc3BsYXk/OiBzdHJpbmc7IC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxyXG4gIGFsaWduPzogc3RyaW5nOyAvLyBjZWxsIGNvbnRlbnQgYWxpZ24gJ2xlZnQgY2VudGVyIHJpZ2h0J1xyXG4gIHNvcnQ/OiBib29sZWFuOyAvLyAnc29ydGFibGUgY29sdW1uJ1xyXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47IC8vIGVuYWJsZSBjbGlja2FibGUgY29sdW1uIHdoZW4gc29ydGluZyBpcyBkaXNhYmxlXHJcbiAgc3RhdGVtZW50PzogYm9vbGVhbjsgLy8gYnkgZGVmYXVsdCBzdGF0ZW1lbnQgaXMgZmFsc2UgYW5kIGlzIHVzZWQgd2l0aCAnY2xpY2thYmxlJyBvcHRpb25zXHJcbiAgdmFsdWVTdGF0ZW1lbnQ/OiBzdHJpbmdbXTtcclxuICBjb25maWc/OiBkaXNwbGF5Q29sdW1uc0NvbmZpZztcclxuICB2YWx1ZU92ZXJyaWRlPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXHJcbiAgfTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVzaWduLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2RldGFpbEV4cGFuZCcsIFtcclxuICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCcsIGRpc3BsYXk6ICdub25lJ30pKSxcclxuICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcclxuICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXHJcbiAgXSldLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZCgnTWF0UGFnaW5hdG9yQ3VycmVudCcsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3JDdXJyZW50OiBNYXRQYWdpbmF0b3I7XHJcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7c3RhdGljOiB0cnVlfSkgc29ydEN1cnJlbnQ6IE1hdFNvcnQ7XHJcblxyXG4gIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XHJcbiAgQElucHV0KCkgZGlzcGxheURldGFpbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlDb21wb25lbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJ0bk92ZXJyaWRlID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGNhbGxGdW5jdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBpbnB1dFNlYXJjaCA9ICcnO1xyXG4gIEBJbnB1dCgpIEVtcHR5Um93ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmxvY2tEZXRhaWxzID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nLCBzdGF0ZW1lbnQ6IGJvb2xlYW4gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXTtcclxuICBwdWJsaWMgZmlsdGVyOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IGFueTtcclxuICBwdWJsaWMgZXhwYW5kZWRFbGVtZW50OiBhbnk7XHJcbiAgcHVibGljIGluZGV4ID0gMDtcclxuICBwdWJsaWMgb3BlbiA9ICcnO1xyXG4gIHB1YmxpYyBzZWFyY2ggPSAnJztcclxuICBwdWJsaWMgY2FuY2VsU2VhcmNoID0gJyc7XHJcbiAgcHVibGljIG5vUmVzdWx0ID0gJyc7XHJcbiAgcHVibGljIGRldGFpbHMgPSAnJztcclxuICBwdWJsaWMgc2hvd1RhYmxlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBQcml2YXRlQ29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kKGVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLmJsb2NrRGV0YWlscykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5leHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5leHBhbmRlZEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZW1wdHlSb3cgPSB0aGlzLkVtcHR5Um93O1xyXG4gICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcclxuICAgIHRoaXMuc2VhcmNoID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ1NFQVJDSCcpO1xyXG4gICAgdGhpcy5jYW5jZWxTZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnQ0FOQ0VMX1NFQVJDSCcpO1xyXG4gICAgdGhpcy5ub1Jlc3VsdCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOT19SRVNVTFQnKTtcclxuICAgIHRoaXMuZGV0YWlscyA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdERVRBSUxTJyk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRhdGEucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3JDdXJyZW50O1xyXG4gICAgICB0aGlzLmRhdGEuc29ydCA9IHRoaXMuc29ydEN1cnJlbnQ7XHJcblxyXG4gICAgICB0aGlzLmRhdGEucGFnZU51bWJlci5zdWJzY3JpYmUoKG5ld3BhZ2U6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChuZXdwYWdlID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXHJcbiAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcclxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG5ld3BhZ2UgKyAxfSxcclxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3cGFnZSA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXHJcbiAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcclxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG51bGx9LFxyXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLnBhZ2luYXRvciAmJiB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCAhPT0gbmV3cGFnZSkge1xyXG4gICAgICAgICAgLy8gdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggPSBuZXdwYWdlO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdvbiBwYXNzZSBkYW5zIGxhIGxpZ25lIDE0NicsIHRoaXMuZGF0YS5wYWdpbmF0b3IucGFnZUluZGV4LCBuZXdwYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydwYWdlJ107XHJcbiAgICAgIGlmIChwYWdlKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2U6IG51bWJlciA9IE51bWJlcihwYWdlKSAtIDE7XHJcbiAgICAgICAgdGhpcy5kYXRhLnN0YXJ0V2l0aCA9IGN1cnJlbnRQYWdlO1xyXG4gICAgICAgIHRoaXMuZGF0YS5mZXRjaChjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IGN1cnJlbnRQYWdlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5jb2x1bW5EZWZpbml0aW9ucztcclxuICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBidWlsZCB0YWJsZScsIGVycikpO1xyXG4gICAgICB0aGlzLnNlcnZpY2UudXBkYXRlSGVhZGVyLnN1YnNjcmliZSgoc3RhdHVzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gbnVsbDtcclxuICAgICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuc2VydmljZS5kaXNwbGF5Q29sdW1uO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ01vZHVsZSB0YWJsZSAtPiBOZXcgY29sdW1uIGRlZmluaXRpb25zJywgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMpO1xyXG4gICAgICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBidWlsZCB0YWJsZScsIGVycikpO1xyXG4gICAgICAgICAgdGhpcy5kZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgIHRoaXMuc2hvd1RhYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGJ1aWxkSGVhZGVycygpIHtcclxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGF3YWl0IHRoaXMuc29ydCgpO1xyXG4gICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xyXG4gICAgICBjb25zdCB0bXA6IGFueSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBrIG9mIHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xyXG4gICAgICAgIHRtcC5wdXNoKGsua2V5KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBbLi4udG1wXTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coJ01vZHVsZSBUYWJsZSBOZXcgVXBkYXRlIENvbHVtbiBEZWZpbml0aW9uJywgIHRoaXMuY29sdW1uc1RvRGlzcGxheSk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUNsYXNzKENsYXNzOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgTXlDbGFzczogc3RyaW5nW10gPSBbJ2RlZmF1bHQtdGFibGUtY2xhc3MnXTtcclxuICAgIGZvciAobGV0IGMgb2YgQ2xhc3MpIHtcclxuICAgICAgaWYgKGMgJiYgYyAhPT0gJycpIHtcclxuICAgICAgICBNeUNsYXNzLnB1c2goYyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBNeUNsYXNzO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc29ydCgpIHtcclxuICAgIGNvbnN0IGNvbXBhcmUgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIChhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogKGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IDApKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIFsuLi50aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucy5zb3J0KGNvbXBhcmUpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZExpbmsob3ZlcnJpZGU6IHN0cmluZ1tdLCBlbGVtZW50KSB7XHJcbiAgICBpZiAob3ZlcnJpZGUubGVuZ3RoID49IDIpIHtcclxuICAgICAgbGV0IGJhc2VQYXRoOiBzdHJpbmcgPSBvdmVycmlkZVswXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvdmVycmlkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGJhc2VQYXRoICs9ICcvJyArIGVsZW1lbnRbb3ZlcnJpZGVbaV1dO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBiYXNlUGF0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBKb2luKGVsZW06IGFueSwgb3ZlcnJpZGU6IHN0cmluZ1tdLCBqb2luS2V5OiBzdHJpbmcgPSAnXFxuJyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nW10gPSBbXTtcclxuICAgIGZvciAobGV0IHggaW4gZWxlbSkge1xyXG4gICAgICBpZiAob3ZlcnJpZGUuaW5kZXhPZih4KSA+IC0xKSB7XHJcbiAgICAgICAgdmFsdWUucHVzaChlbGVtW3hdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlLmpvaW4oam9pbktleSk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuZGF0YS5maWx0ZXIoe1xyXG4gICAgICB0YXJnZXQ6IHtcclxuICAgICAgICB2YWx1ZTogJydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGV4cGFuZFNob3codGVtcGxhdGU6IHN0cmluZykge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICgodGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPiAxIHx8IHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID09PSAwKVxyXG4gICAgICAmJiB0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA8IDIwMCAmJiB0aGlzLmRhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKHRoaXMuaW5wdXRTZWFyY2gpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5mZXRjaCgwKTtcclxuXHJcbiAgICB9XHJcbiAgICAvL3RoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIGNoYW5nZXMuZGF0YS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0luaXQgaW5pdCcpXHJcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgIH1cclxuLy9cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIENvcmVNYXRUYWJsZSxcclxuICBGaWx0ZXJEYXRlSW50ZXJmYWNlLFxyXG4gIENvcmVNYXRUYWJsZUludGVyZmFjZSxcclxuICBQYWdlLFxyXG4gIFBhZ2VSZXF1ZXN0LFxyXG4gIFNvcnQsXHJcbiAgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSxcclxuICBDZWxsc0NvbXBvbmVudExpc3QsXHJcbiAgVGFibGVDb21wb25lbnRcclxufTtcclxuIl19