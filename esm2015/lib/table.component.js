import { __awaiter, __decorate, __metadata } from "tslib";
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CoreMatTable } from './core-data-table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CellsComponentList } from './setting/CellsComponentRegistry';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
            console.log('---------override----------', override);
            console.log('---------basePath----------', basePath);
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
        template: "<div class=\"table-wrapper\">\r\n  <div class=\"row\" style=\"height: 20px;background: transparent!important; box-shadow: none !important\">\r\n    <div class=\"\">\r\n      <!--<div class=\"col-lg-12 search-container\">\r\n        <mat-icon style=\"left: 16%; position: absolute; margin-top: 10px;\">search</mat-icon>\r\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\"\r\n        [value]=\"inputSearch\"\r\n        (change)=\"onChange($event)\"\r\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\r\n                        && $event.target.value.length < 200)\r\n                                       ? data.filter($event) : null)\"\r\n               #filterOngoing>\r\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\r\n           [matTooltip]=\"cancelSearch\"\r\n           (click)=\"reset() && filterOngoing.value = ''\">\r\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\r\n        </a>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n  <!-- Table -->\r\n  <table mat-table #table=\"matSort\" [dataSource]=\"data \" multiTemplateDataRows matSort class=\"\"\r\n    *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\r\n    (matSortChange)=\"data.sortIt($event)\">\r\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\r\n      <ng-container *ngIf=\"column.sort\">\r\n        <th mat-header-cell *matHeaderCellDef\r\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\r\n          mat-sort-header>\r\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n        </th>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!column.sort\">\r\n        <!-- Ajouter fonction generate Class -->\r\n        <ng-container *ngIf=\"column.clickable\">\r\n          <th mat-header-cell *matHeaderCellDef\r\n            (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\r\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\r\n            style=\"cursor: pointer;\">\r\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n            <app-is-mat-icon *ngIf=\"column.valueStatement && column.statement !== undefined\"\r\n              [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\r\n            </app-is-mat-icon>\r\n          </th>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!column.clickable\">\r\n          <th mat-header-cell *matHeaderCellDef\r\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\r\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n          </th>\r\n        </ng-container>\r\n        <th mat-header-cell *matHeaderCellDef\r\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\r\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n        </th>\r\n      </ng-container>\r\n\r\n      <td *ngIf=\"EmptyRow\" [attr.colspan]=\"columnsToDisplay.length\" class=\"empty-row\"></td>\r\n      <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\r\n        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\r\n        <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\r\n          <!-- Button click -->\r\n          <ng-container *ngSwitchCase=\"'button-click'\">\r\n            <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\">\r\n              <!--<ng-container *ngIf=\"column.display\">\r\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!column.display\">\r\n                {{element[column.key]}}\r\n              </ng-container>-->\r\n              {{ details }}\r\n            </a>\r\n          </ng-container>\r\n          <!-- Button link -->\r\n          <ng-container *ngSwitchCase=\"'button-link'\">\r\n            <!--                matBadge=\"*\" matBadgePosition=\"before\"\r\n               matBadgeColor=\"accent\" -->\r\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\" (click)=\"element.new = false\"\r\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\r\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\r\n              <ng-container *ngIf=\"column.display\">\r\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!column.display\">\r\n                {{element[column.key]}}\r\n              </ng-container>\r\n            </a>\r\n            <a *ngIf=\"!element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\"\r\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\r\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\r\n              <ng-container *ngIf=\"column.display\">\r\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!column.display\">\r\n                {{element[column.key]}}\r\n              </ng-container>\r\n            </a>\r\n          </ng-container>\r\n          <!-- Button link text -->\r\n          <ng-container *ngSwitchCase=\"'button-link-text'\">\r\n            <a [matTooltip]=\"open\" class=\"btn-link-text btn-xs\" (click)=\"element.new = false\"\r\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\r\n              {{ details }}\r\n            </a>\r\n          </ng-container>\r\n          <!-- icon custom-->\r\n          <ng-container *ngSwitchCase=\"'custom-icon'\">\r\n            <input type=\"hidden\" [value]=\"element[column.key]\">\r\n            <img *ngIf=\"element[column.key] && column.valueOverride\" [src]=\"column.valueOverride[element[column.key]]\"\r\n              style=\"width: 20px; height: 20px;\">\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'it-category'\">\r\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\r\n          </ng-container>\r\n          <!-- icon it status -->\r\n          <ng-container *ngSwitchCase=\"'it-status'\">\r\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\r\n          </ng-container>\r\n          <!-- icon customer rank -->\r\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\r\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\r\n          </ng-container>\r\n          <!-- icon priority-->\r\n          <ng-container *ngSwitchCase=\"'priority'\">\r\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\r\n          </ng-container>\r\n          <!-- icon gender avatar-->\r\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\r\n            <app-gender [type]=\"element[column.key]\"></app-gender>\r\n          </ng-container>\r\n\r\n          <!-- icon gender avatar-->\r\n          <ng-container *ngSwitchCase=\"'phone-display'\">\r\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\r\n          </ng-container>\r\n\r\n          <!-- icon gender avatar-->\r\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\r\n            <app-yes-nox\r\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\r\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\" [displayNo]=\"column.config.displayYes\"\r\n              [displayYes]=\"column.config.displayNo\">\r\n            </app-yes-nox>\r\n            <app-yes-nox\r\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\r\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\r\n            </app-yes-nox>\r\n          </ng-container>\r\n          <!-- icon origin-->\r\n          <ng-container *ngSwitchCase=\"'origin'\">\r\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\r\n          </ng-container>\r\n          <!-- icon name avatar-->\r\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\r\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\" [src]=\"element[column.key]\"\r\n              [matTooltipClass]=\"'my-tooltip'\">\r\n            </name-avatar>\r\n          </ng-container>\r\n          <!-- date format -->\r\n          <ng-container *ngSwitchCase=\"'date-format'\">\r\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\r\n          </ng-container>\r\n          <!-- count rows -->\r\n          <ng-container *ngSwitchCase=\"'count-row'\">\r\n            <span style=\"padding-left: 14px\">\r\n              {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\r\n            </span>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'custom-cell'\">\r\n            <lib-custom-cell [title]=\"element[column.key]\" [subTitle]=\"element[column.subTitle]\"\r\n              [class]=\"element[column.addClass]\"></lib-custom-cell>\r\n          </ng-container>\r\n          <ng-container *ngSwitchDefault>\r\n            {{element[column.key]}}\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"element === 'empty'\">\r\n      <td [ngClass]=\"'empty-row'\" mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n        empty row\r\n      </td>\r\n    </ng-container>\r\n\r\n    </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\r\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\r\n        [@detailExpand]=\"expandedElement && element == expandedElement ? 'expanded' : 'collapsed'\" style=\"height: 0\">\r\n        <div *ngIf=\"element['CaseNumber'] && expandedElement\">\r\n          <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\r\n          </div>\r\n\r\n          <a [class.nav-expanded]=\"element == expandedElement\" [routerLink]=\"['/ticket/', element['CaseNumber']]\"\r\n            [title]=\"open\">\r\n            <img class=\"detail-view-ticket\" src=\"/assets/icons/eye.png\">\r\n          </a>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n    <ng-container *ngIf=\"displayDetail\">\r\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"\r\n        [ngClass]=\"!element || element === 'empty'? 'empty-row-none': 'detail-row'\"\r\n        [class.expanded]=\"expandedElement == element\" (click)=\"expand(element)\">\r\n      </tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\"\r\n        [ngClass]=\"!expandedElement || !row || row === 'empty'? 'empty-row': 'detail-row'\">\r\n\r\n      </tr>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!displayDetail\">\r\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\">\r\n      </tr>\r\n    </ng-container>\r\n  </table>\r\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\r\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\r\n      <div class=\"\">\r\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\r\n          {{ noResult }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\r\n    [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\" (page)=\"data.fetch($event.pageIndex)\"\r\n    showFirstLastButtons></mat-paginator>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixNQUFNLEVBQ04sYUFBYSxFQUNiLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBdUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0SCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBNEN2RCxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFjO0lBNkJsQixZQUFvQixNQUFjLEVBQ3hCLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQTJCLEVBQzNCLFNBQTJCLEVBQzNCLGlCQUFvQztRQUwxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFDM0IsY0FBUyxHQUFULFNB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QUUsQ0FBQyxDQUFDO2dCQUM3RSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDdEYsQ0FBQyxDQUFDO1FBQ0gsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7cUNBOEI0QixNQUFNO1FBQ2pCLGNBQWM7UUFDWixZQUFZO1FBQ1gsaUJBQWlCO1FBQ2hCLGdCQUFnQjtRQUNSLGlCQUFpQjtHQWxDMUMsY0FBYyxDQW1NbkI7QUFFRCxPQUFPLEVBQ0wsWUFBWSxFQU9aLGtCQUFrQixFQUNsQixjQUFjLEVBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0IH0gZnJvbSAnLi9jb3JlLWRhdGEtdGFibGUnO1xyXG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmltcG9ydCB7IENlbGxzQ29tcG9uZW50TGlzdCB9IGZyb20gJy4vc2V0dGluZy9DZWxsc0NvbXBvbmVudFJlZ2lzdHJ5JztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgTWF0U29ydCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xyXG5pbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tICcuL3RhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgZGlzcGxheUNvbHVtbnNDb25maWcge1xyXG4gIHNpemVJY29uPzogbnVtYmVyO1xyXG4gIGRpc3BsYXlZZXM/OiBib29sZWFuO1xyXG4gIGRpc3BsYXlObz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIHtcclxuICBrZXk6IHN0cmluZzsgLy8gb2JqZWN0IGtleVxyXG4gIHZhbHVlOiBzdHJpbmc7IC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xyXG4gIHJhdGlvPzogbnVtYmVyO1xyXG4gIG9yZGVyPzogbnVtYmVyOyAvLyBzb3J0IGNvbHVtblxyXG4gIGNsYXNzPzogc3RyaW5nOyAvLyBjc3MgY2xhc3NcclxuICBhZGRDbGFzcz86IHN0cmluZzsgLy8gY3NzIGNsYXNzXHJcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7Ly8gc3RhdHVzIGNhdGVnb3J5XHJcbiAgbW9kdWxlPzogQ2VsbHNDb21wb25lbnRMaXN0O1xyXG4gIG92ZXJyaWRlPzogc3RyaW5nIHwgc3RyaW5nW107IC8vIGZvciBidWlsZGluZyB1cmwgb3IgYXZhdGFyIG5hbWVcclxuICBkaXNwbGF5Pzogc3RyaW5nOyAvLyBmb3JjZSBkaXNwbGF5aW5nIG90aGVyIHN0dWZmIHRoYW4gZWxlbWVudFtmb2N1c11cclxuICBhbGlnbj86IHN0cmluZzsgLy8gY2VsbCBjb250ZW50IGFsaWduICdsZWZ0IGNlbnRlciByaWdodCdcclxuICBzb3J0PzogYm9vbGVhbjsgLy8gJ3NvcnRhYmxlIGNvbHVtbidcclxuICBjbGlja2FibGU/OiBib29sZWFuOyAvLyBlbmFibGUgY2xpY2thYmxlIGNvbHVtbiB3aGVuIHNvcnRpbmcgaXMgZGlzYWJsZVxyXG4gIHN0YXRlbWVudD86IGJvb2xlYW47IC8vIGJ5IGRlZmF1bHQgc3RhdGVtZW50IGlzIGZhbHNlIGFuZCBpcyB1c2VkIHdpdGggJ2NsaWNrYWJsZScgb3B0aW9uc1xyXG4gIHZhbHVlU3RhdGVtZW50Pzogc3RyaW5nW107XHJcbiAgZm9udFNpemU/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgc3ViVGl0bGU/OiBzdHJpbmc7XHJcbiAgY29uZmlnPzogZGlzcGxheUNvbHVtbnNDb25maWc7XHJcbiAgdmFsdWVPdmVycmlkZT86IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG4gIH07XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRlc2lnbi10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXHJcbiAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJywgZGlzcGxheTogJ25vbmUnIH0pKSxcclxuICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpLFxyXG4gICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcclxuICBdKV0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5jbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdNYXRQYWdpbmF0b3JDdXJyZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcGFnaW5hdG9yQ3VycmVudDogTWF0UGFnaW5hdG9yO1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJywgeyBzdGF0aWM6IHRydWUgfSkgc29ydEN1cnJlbnQ6IE1hdFNvcnQ7XHJcblxyXG4gIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XHJcbiAgQElucHV0KCkgZGlzcGxheURldGFpbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlDb21wb25lbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJ0bk92ZXJyaWRlID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGNhbGxGdW5jdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBpbnB1dFNlYXJjaCA9ICcnO1xyXG4gIEBJbnB1dCgpIEVtcHR5Um93ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmxvY2tEZXRhaWxzID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nLCBzdGF0ZW1lbnQ6IGJvb2xlYW4gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXTtcclxuICBwdWJsaWMgZmlsdGVyOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IGFueTtcclxuICBwdWJsaWMgZXhwYW5kZWRFbGVtZW50OiBhbnk7XHJcbiAgcHVibGljIGluZGV4ID0gMDtcclxuICBwdWJsaWMgb3BlbiA9ICcnO1xyXG4gIHB1YmxpYyBzZWFyY2ggPSAnJztcclxuICBwdWJsaWMgY2FuY2VsU2VhcmNoID0gJyc7XHJcbiAgcHVibGljIG5vUmVzdWx0ID0gJyc7XHJcbiAgcHVibGljIGRldGFpbHMgPSAnJztcclxuICBwdWJsaWMgc2hvd1RhYmxlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBQcml2YXRlQ29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIGV4cGFuZChlbGVtZW50KSB7XHJcbiAgICBpZiAodGhpcy5ibG9ja0RldGFpbHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZXhwYW5kZWRFbGVtZW50ID09PSBlbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZXhwYW5kZWRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmVtcHR5Um93ID0gdGhpcy5FbXB0eVJvdztcclxuICAgIHRoaXMub3BlbiA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdPUEVOJyk7XHJcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdTRUFSQ0gnKTtcclxuICAgIHRoaXMuY2FuY2VsU2VhcmNoID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0NBTkNFTF9TRUFSQ0gnKTtcclxuICAgIHRoaXMubm9SZXN1bHQgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnTk9fUkVTVUxUJyk7XHJcbiAgICB0aGlzLmRldGFpbHMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yQ3VycmVudDtcclxuICAgICAgdGhpcy5kYXRhLnNvcnQgPSB0aGlzLnNvcnRDdXJyZW50O1xyXG5cclxuICAgICAgdGhpcy5kYXRhLnBhZ2VOdW1iZXIuc3Vic2NyaWJlKChuZXdwYWdlOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAobmV3cGFnZSA+IDApIHtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxyXG4gICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXHJcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcGFnZTogbmV3cGFnZSArIDEgfSxcclxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3cGFnZSA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXHJcbiAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcclxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBwYWdlOiBudWxsIH0sXHJcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEucGFnaW5hdG9yICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IucGFnZUluZGV4ICE9PSBuZXdwYWdlKSB7XHJcbiAgICAgICAgICAvLyB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCA9IG5ld3BhZ2U7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ29uIHBhc3NlIGRhbnMgbGEgbGlnbmUgMTQ2JywgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXgsIG5ld3BhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3BhZ2UnXTtcclxuICAgICAgaWYgKHBhZ2UpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFnZTogbnVtYmVyID0gTnVtYmVyKHBhZ2UpIC0gMTtcclxuICAgICAgICB0aGlzLmRhdGEuc3RhcnRXaXRoID0gY3VycmVudFBhZ2U7XHJcbiAgICAgICAgdGhpcy5kYXRhLmZldGNoKGN1cnJlbnRQYWdlKTtcclxuICAgICAgICB0aGlzLmRhdGEubnVtYmVyID0gY3VycmVudFBhZ2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLmNvbHVtbkRlZmluaXRpb25zO1xyXG4gICAgICB0aGlzLmJ1aWxkSGVhZGVycygpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yIGJ1aWxkIHRhYmxlJywgZXJyKSk7XHJcbiAgICAgIHRoaXMuc2VydmljZS51cGRhdGVIZWFkZXIuc3Vic2NyaWJlKChzdGF0dXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5zZXJ2aWNlLmRpc3BsYXlDb2x1bW47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTW9kdWxlIHRhYmxlIC0+IE5ldyBjb2x1bW4gZGVmaW5pdGlvbnMnLCB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyk7XHJcbiAgICAgICAgICB0aGlzLmJ1aWxkSGVhZGVycygpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yIGJ1aWxkIHRhYmxlJywgZXJyKSk7XHJcbiAgICAgICAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgdGhpcy5zaG93VGFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgYnVpbGRIZWFkZXJzKCkge1xyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gYXdhaXQgdGhpcy5zb3J0KCk7XHJcbiAgICBpZiAodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XHJcbiAgICAgIGNvbnN0IHRtcDogYW55ID0gW107XHJcbiAgICAgIGZvciAobGV0IGsgb2YgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XHJcbiAgICAgICAgdG1wLnB1c2goay5rZXkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IFsuLi50bXBdO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZygnTW9kdWxlIFRhYmxlIE5ldyBVcGRhdGUgQ29sdW1uIERlZmluaXRpb24nLCAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5KTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ2xhc3MoQ2xhc3M6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBNeUNsYXNzOiBzdHJpbmdbXSA9IFsnZGVmYXVsdC10YWJsZS1jbGFzcyddO1xyXG4gICAgZm9yIChsZXQgYyBvZiBDbGFzcykge1xyXG4gICAgICBpZiAoYyAmJiBjICE9PSAnJykge1xyXG4gICAgICAgIE15Q2xhc3MucHVzaChjKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE15Q2xhc3M7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzb3J0KCkge1xyXG4gICAgY29uc3QgY29tcGFyZSA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gKGEub3JkZXIgPCBiLm9yZGVyID8gLTEgOiAoYS5vcmRlciA+IGIub3JkZXIgPyAxIDogMCkpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucykge1xyXG4gICAgICByZXR1cm4gWy4uLnRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zLnNvcnQoY29tcGFyZSldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkTGluayhvdmVycmlkZTogc3RyaW5nW10sIGVsZW1lbnQpIHtcclxuICAgIGlmIChvdmVycmlkZS5sZW5ndGggPj0gMikge1xyXG4gICAgICBsZXQgYmFzZVBhdGg6IHN0cmluZyA9IG92ZXJyaWRlWzBdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG92ZXJyaWRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYmFzZVBhdGggKz0gJy8nICsgZWxlbWVudFtvdmVycmlkZVtpXV07XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLW92ZXJyaWRlLS0tLS0tLS0tLScsIG92ZXJyaWRlKTtcclxuICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLWJhc2VQYXRoLS0tLS0tLS0tLScsIGJhc2VQYXRoKTtcclxuXHJcbiAgICAgIHJldHVybiBiYXNlUGF0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBKb2luKGVsZW06IGFueSwgb3ZlcnJpZGU6IHN0cmluZ1tdLCBqb2luS2V5OiBzdHJpbmcgPSAnXFxuJyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nW10gPSBbXTtcclxuICAgIGZvciAobGV0IHggaW4gZWxlbSkge1xyXG4gICAgICBpZiAob3ZlcnJpZGUuaW5kZXhPZih4KSA+IC0xKSB7XHJcbiAgICAgICAgdmFsdWUucHVzaChlbGVtW3hdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlLmpvaW4oam9pbktleSk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuZGF0YS5maWx0ZXIoe1xyXG4gICAgICB0YXJnZXQ6IHtcclxuICAgICAgICB2YWx1ZTogJydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGV4cGFuZFNob3codGVtcGxhdGU6IHN0cmluZykge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICgodGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPiAxIHx8IHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID09PSAwKVxyXG4gICAgICAmJiB0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA8IDIwMCAmJiB0aGlzLmRhdGEpIHtcclxuICAgICAgdGhpcy5kYXRhLmZpbHRlcih0aGlzLmlucHV0U2VhcmNoKTtcclxuICAgICAgdGhpcy5kYXRhLmZldGNoKDApO1xyXG5cclxuICAgIH1cclxuICAgIC8vdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEgJiYgY2hhbmdlcy5kYXRhLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5pdCBpbml0JylcclxuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIENvcmVNYXRUYWJsZSxcclxuICBGaWx0ZXJEYXRlSW50ZXJmYWNlLFxyXG4gIENvcmVNYXRUYWJsZUludGVyZmFjZSxcclxuICBQYWdlLFxyXG4gIFBhZ2VSZXF1ZXN0LFxyXG4gIFNvcnQsXHJcbiAgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSxcclxuICBDZWxsc0NvbXBvbmVudExpc3QsXHJcbiAgVGFibGVDb21wb25lbnRcclxufTtcclxuIl19