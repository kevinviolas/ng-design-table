import { __awaiter, __decorate, __generator, __metadata, __read, __spread, __values } from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellsComponentList } from "./setting/CellsComponentRegistry";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { CoreMatTable } from "./core-data-table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { ActivatedRoute, Router } from "@angular/router";
import { TableService } from "./table.service";
import { TranslateService } from './translate.service';
var TableComponent = /** @class */ (function () {
    function TableComponent(router, route, service, detector, translate) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.detector = detector;
        this.translate = translate;
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
        this.cancelFilters = '';
    }
    TableComponent.prototype.expand = function (element) {
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
    };
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.emptyRow = this.EmptyRow;
        this.open = this.translate.translate(this.lang, 'OPEN');
        this.search = this.translate.translate(this.lang, 'SEARCH');
        this.cancelSearch = this.translate.translate(this.lang, 'CANCEL_SEARCH');
        this.noResult = this.translate.translate(this.lang, 'NO_RESULT');
        this.details = this.translate.translate(this.lang, 'DETAILS');
        this.cancelFilters = this.translate.translate(this.lang, 'CANCEL_FILTER');
        if (this.data) {
            this.expandedElement = false;
            this.data.paginator = this.paginatorCurrent;
            this.data.sort = this.sortCurrent;
            this.data.pageNumber.subscribe(function (newpage) {
                if (newpage > 0) {
                    _this.router.navigate([], {
                        relativeTo: _this.route,
                        queryParams: { page: newpage + 1 },
                        queryParamsHandling: 'merge',
                    });
                }
                else if (newpage === 0) {
                    _this.router.navigate([], {
                        relativeTo: _this.route,
                        queryParams: { page: null },
                        queryParamsHandling: 'merge',
                    });
                }
                if (_this.data && _this.data.paginator && _this.data.paginator.pageIndex !== newpage) {
                    _this.data.paginator.pageIndex = newpage;
                }
            });
            var page = this.route.snapshot.queryParams["page"];
            if (page) {
                var currentPage = Number(page) - 1;
                this.data.startWith = currentPage;
                this.data.fetch(currentPage);
                this.data.number = currentPage;
            }
            this.PrivateColumnDefinitions = this.columnDefinitions;
            this.buildHeaders().catch(function (err) { return console.log('Error build table', err); });
            this.service.updateHeader.subscribe(function (status) {
                if (status === true) {
                    _this.displayedColumns = null;
                    _this.columnsToDisplay = null;
                    _this.PrivateColumnDefinitions = _this.service.displayColumn;
                    console.log('Module table -> New column definitions', _this.PrivateColumnDefinitions);
                    _this.buildHeaders().catch(function (err) { return console.log('Error build table', err); });
                    _this.detector.detectChanges();
                }
            });
        }
    };
    TableComponent.prototype.ngAfterViewChecked = function () {
        this.showTable = true;
    };
    TableComponent.prototype.buildHeaders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, tmp, _b, _c, k;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sort()];
                    case 1:
                        _a.displayedColumns = _e.sent();
                        if (this.displayedColumns) {
                            tmp = [];
                            try {
                                for (_b = __values(this.displayedColumns), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    k = _c.value;
                                    tmp.push(k.key);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            this.columnsToDisplay = __spread(tmp);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TableComponent.prototype.generateClass = function (Class) {
        var e_2, _a;
        var MyClass = ['default-table-class'];
        try {
            for (var Class_1 = __values(Class), Class_1_1 = Class_1.next(); !Class_1_1.done; Class_1_1 = Class_1.next()) {
                var c = Class_1_1.value;
                if (c && c !== '') {
                    MyClass.push(c);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (Class_1_1 && !Class_1_1.done && (_a = Class_1.return)) _a.call(Class_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return MyClass;
    };
    TableComponent.prototype.sort = function () {
        return __awaiter(this, void 0, void 0, function () {
            var compare;
            return __generator(this, function (_a) {
                compare = function (a, b) {
                    return (a.order < b.order ? -1 : (a.order > b.order ? 1 : 0));
                };
                if (this.PrivateColumnDefinitions) {
                    return [2 /*return*/, __spread(this.PrivateColumnDefinitions.sort(compare))];
                }
                return [2 /*return*/];
            });
        });
    };
    TableComponent.prototype.buildLink = function (override, element) {
        if (override.length >= 2) {
            var basePath = override[0];
            for (var i = 1; i < override.length; i++) {
                basePath += '/' + element[override[i]];
            }
            return basePath;
        }
    };
    TableComponent.prototype.Join = function (elem, override, joinKey) {
        if (joinKey === void 0) { joinKey = '\n'; }
        var value = [];
        for (var x in elem) {
            if (override.indexOf(x) > -1) {
                value.push(elem[x]);
            }
        }
        return value.join(joinKey);
    };
    TableComponent.prototype.reset = function () {
        this.data.filter({
            target: {
                value: ''
            }
        });
        return true;
    };
    TableComponent.prototype.expandShow = function (template) {
    };
    TableComponent.prototype.ngOnChanges = function (changes) {
        if ((this.inputSearch.length > 1 || this.inputSearch.length === 0)
            && this.inputSearch.length < 200) {
            if (this.data) {
                console.log(this.data);
                this.data.filter(this.inputSearch);
            }
        }
        this.ngOnInit();
    };
    TableComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: TableService },
        { type: ChangeDetectorRef },
        { type: TranslateService }
    ]; };
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
            template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 20px;background: transparent!important; box-shadow: none !important\">\n    <div class=\"\">\n      <!--<div class=\"col-lg-12 search-container\">\n        <mat-icon style=\"left: 16%; position: absolute; margin-top: 10px;\">search</mat-icon>\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\"\n        [value]=\"inputSearch\"\n        (change)=\"onChange($event)\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"cancelSearch\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>-->\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\"\n         [dataSource]=\"data \" multiTemplateDataRows matSort\n         class=\"\" *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\n         (matSortChange)=\"data.sortIt($event)\">\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort\">\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <ng-container *ngIf=\"column.clickable\">\n          <th mat-header-cell *matHeaderCellDef\n              (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\n              [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n              style=\"cursor: pointer;\">\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n            <app-is-mat-icon\n              *ngIf=\"column.valueStatement && column.statement !== undefined\"\n              [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\n            </app-is-mat-icon>\n          </th>\n        </ng-container>\n        <ng-container *ngIf=\"!column.clickable\">\n          <th mat-header-cell *matHeaderCellDef\n              [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n          </th>\n        </ng-container>\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n\n      <td *ngIf=\"EmptyRow\" [attr.colspan]=\"columnsToDisplay.length\" class=\"empty-row\"></td>\n      <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a [matTooltip]=\"open\"\n               class=\"btn-link-text\"\n               (click)=\"callFunction.emit(element[column.key])\">\n              <!--<ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>-->\n              {{ details }}\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <!--                matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\" -->\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n               class=\"mat-button btn-xs\"\n               (click)=\"element.new = false\"\n               [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\"\n               [matTooltip]=\"open\"\n               class=\"mat-button btn-xs\"\n               [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link text -->\n          <ng-container *ngSwitchCase=\"'button-link-text'\">\n            <a [matTooltip]=\"open\"\n               class=\"btn-link-text btn-xs\"\n               (click)=\"element.new = false\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              {{ details }}\n            </a>\n          </ng-container>\n          <!-- icon custom-->\n          <ng-container *ngSwitchCase=\"'custom-icon'\">\n            <input type=\"hidden\" [value]=\"element[column.key]\">\n            <img *ngIf=\"element[column.key] && column.valueOverride\" [src]=\"column.valueOverride[element[column.key]]\" style=\"width: 20px; height: 20px;\">\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n              [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n            >\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                         [src]=\"element[column.key]\"\n                         [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            {{element[column.key]}}\n          </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"element === 'empty'\">\n      <td [ngClass]=\"'empty-row'\" mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n        empty row\n      </td>\n    </ng-container>\n\n    </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n          [@detailExpand]=\"expandedElement && element == expandedElement ? 'expanded' : 'collapsed'\"\n          style=\"height: 0\">\n        <div *ngIf=\"element['CaseNumber'] && expandedElement\">\n          <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n          </div>\n\n          <a [class.nav-expanded]=\"element == expandedElement\"\n             [routerLink]=\"['/ticket/', element['CaseNumber']]\" [title]=\"open\">\n            <img class=\"detail-view-ticket\" src=\"/assets/icons/eye.png\">\n          </a>\n        </div>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\"\n          [ngClass]=\"!element || element === 'empty'? 'empty-row-none': 'detail-row'\"\n          [class.expanded]=\"expandedElement == element\"\n          (click)=\"expand(element)\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\"\n          [ngClass]=\"!expandedElement || !row || row === 'empty'? 'empty-row': 'detail-row'\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"\">\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n          {{ noResult }}\n        </div>\n      </div>\n\n      <a (click)=\"reset()\"> {{ cancelFilters }} </a>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                 [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                 (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n",
            animations: [trigger('detailExpand', [
                    state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ])],
            encapsulation: ViewEncapsulation.None,
            styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span,app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:\"Nexa Text Bold\";font-size:14px!important;letter-spacing:0;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:no-repeat padding-box #e5e8ee;border-radius:4px;text-align:left;font:bold 12px/19px \"Nexa Text\";letter-spacing:0;color:#707070!important;cursor:pointer;padding:10px}.empty-row{background:0 0!important;height:10px!important}.empty-row td{background:0 0!important;height:0}.empty-row-none{display:none!important}"]
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            TableService,
            ChangeDetectorRef,
            TranslateService])
    ], TableComponent);
    return TableComponent;
}());
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBd0NyRDtJQThCRSx3QkFBb0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQTJCLEVBQzNCLFNBQTJCO1FBSjNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBN0J0QyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUkv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LENBQUM7WUFDSCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7U0FDdEMsQ0FBQzt5Q0ErQjRCLE1BQU07WUFDUCxjQUFjO1lBQ1osWUFBWTtZQUNYLGlCQUFpQjtZQUNoQixnQkFBZ0I7T0FsQzNDLGNBQWMsQ0EyTG5CO0lBQUQscUJBQUM7Q0FBQSxBQTNMRCxJQTJMQztBQUVELE9BQU8sRUFDTCxZQUFZLEVBT1osa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2VsbHNDb21wb25lbnRMaXN0fSBmcm9tIFwiLi9zZXR0aW5nL0NlbGxzQ29tcG9uZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7TWF0U29ydH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge0NvcmVNYXRUYWJsZSwgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLCBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBQYWdlLCBQYWdlUmVxdWVzdCwgU29ydH0gZnJvbSBcIi4vY29yZS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5cblxuaW50ZXJmYWNlIGRpc3BsYXlDb2x1bW5zQ29uZmlnIHtcbiAgc2l6ZUljb24/OiBudW1iZXI7XG4gIGRpc3BsYXlZZXM/OiBib29sZWFuO1xuICBkaXNwbGF5Tm8/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSB7XG4gIGtleTogc3RyaW5nOyAvLyBvYmplY3Qga2V5XG4gIHZhbHVlOiBzdHJpbmc7IC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xuICByYXRpbz86IG51bWJlcjtcbiAgb3JkZXI/OiBudW1iZXI7IC8vIHNvcnQgY29sdW1uXG4gIGNsYXNzPzogc3RyaW5nOyAvLyBjc3MgY2xhc3NcbiAgbW9kdWxlPzogQ2VsbHNDb21wb25lbnRMaXN0O1xuICBvdmVycmlkZT86IHN0cmluZyB8IHN0cmluZ1tdOyAvLyBmb3IgYnVpbGRpbmcgdXJsIG9yIGF2YXRhciBuYW1lXG4gIGRpc3BsYXk/OiBzdHJpbmc7IC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxuICBhbGlnbj86IHN0cmluZzsgLy8gY2VsbCBjb250ZW50IGFsaWduICdsZWZ0IGNlbnRlciByaWdodCdcbiAgc29ydD86IGJvb2xlYW47IC8vICdzb3J0YWJsZSBjb2x1bW4nXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47IC8vIGVuYWJsZSBjbGlja2FibGUgY29sdW1uIHdoZW4gc29ydGluZyBpcyBkaXNhYmxlXG4gIHN0YXRlbWVudD86IGJvb2xlYW47IC8vIGJ5IGRlZmF1bHQgc3RhdGVtZW50IGlzIGZhbHNlIGFuZCBpcyB1c2VkIHdpdGggJ2NsaWNrYWJsZScgb3B0aW9uc1xuICB2YWx1ZVN0YXRlbWVudD86IHN0cmluZ1tdO1xuICBjb25maWc/OiBkaXNwbGF5Q29sdW1uc0NvbmZpZztcbiAgdmFsdWVPdmVycmlkZT86IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRlc2lnbi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJywgZGlzcGxheTogJ25vbmUnfSkpLFxuICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcbiAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICBdKV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5jbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnTWF0UGFnaW5hdG9yQ3VycmVudCcsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3JDdXJyZW50OiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJywge3N0YXRpYzogdHJ1ZX0pIHNvcnRDdXJyZW50OiBNYXRTb3J0O1xuXG4gIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gIEBJbnB1dCgpIGRpc3BsYXlEZXRhaWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzcGxheUNvbXBvbmVudDogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcbiAgQElucHV0KCkgYnRuT3ZlcnJpZGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNhbGxGdW5jdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgaW5wdXRTZWFyY2ggPSAnJztcbiAgQElucHV0KCkgRW1wdHlSb3cgPSBmYWxzZTtcbiAgQElucHV0KCkgYmxvY2tEZXRhaWxzID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZywgc3RhdGVtZW50OiBib29sZWFuIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXTtcbiAgcHVibGljIGZpbHRlcjogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogYW55O1xuICBwdWJsaWMgZXhwYW5kZWRFbGVtZW50OiBhbnk7XG4gIHB1YmxpYyBpbmRleCA9IDA7XG4gIHB1YmxpYyBvcGVuID0gJyc7XG4gIHB1YmxpYyBzZWFyY2ggPSAnJztcbiAgcHVibGljIGNhbmNlbFNlYXJjaCA9ICcnO1xuICBwdWJsaWMgbm9SZXN1bHQgPSAnJztcbiAgcHVibGljIGRldGFpbHMgPSAnJztcbiAgcHVibGljIHNob3dUYWJsZSA9IGZhbHNlO1xuICBwdWJsaWMgY2FuY2VsRmlsdGVycyA9ICcnO1xuICBwcml2YXRlIFByaXZhdGVDb2x1bW5EZWZpbml0aW9uczogW2Rpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gIH1cblxuICBleHBhbmQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLmJsb2NrRGV0YWlscykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5leHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZXhwYW5kZWRFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5lbXB0eVJvdyA9IHRoaXMuRW1wdHlSb3c7XG4gICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdTRUFSQ0gnKTtcbiAgICB0aGlzLmNhbmNlbFNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdDQU5DRUxfU0VBUkNIJyk7XG4gICAgdGhpcy5ub1Jlc3VsdCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOT19SRVNVTFQnKTtcbiAgICB0aGlzLmRldGFpbHMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuICAgIHRoaXMuY2FuY2VsRmlsdGVycyA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdDQU5DRUxfRklMVEVSJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yQ3VycmVudDtcbiAgICAgIHRoaXMuZGF0YS5zb3J0ID0gdGhpcy5zb3J0Q3VycmVudDtcblxuICAgICAgdGhpcy5kYXRhLnBhZ2VOdW1iZXIuc3Vic2NyaWJlKChuZXdwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKG5ld3BhZ2UgPiAwKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBuZXdwYWdlICsgMX0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld3BhZ2UgPT09IDApIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG51bGx9LFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IgJiYgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggIT09IG5ld3BhZ2UpIHtcbiAgICAgICAgICB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCA9IG5ld3BhZ2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwYWdlXCJdO1xuICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2U6IG51bWJlciA9IE51bWJlcihwYWdlKSAtIDE7XG4gICAgICAgIHRoaXMuZGF0YS5zdGFydFdpdGggPSBjdXJyZW50UGFnZTtcbiAgICAgICAgdGhpcy5kYXRhLmZldGNoKGN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IGN1cnJlbnRQYWdlO1xuICAgICAgfVxuICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLmNvbHVtbkRlZmluaXRpb25zO1xuICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBidWlsZCB0YWJsZScsIGVycikpO1xuICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZUhlYWRlci5zdWJzY3JpYmUoKHN0YXR1czogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBudWxsO1xuICAgICAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5zZXJ2aWNlLmRpc3BsYXlDb2x1bW47XG4gICAgICAgICAgY29uc29sZS5sb2coJ01vZHVsZSB0YWJsZSAtPiBOZXcgY29sdW1uIGRlZmluaXRpb25zJywgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMpO1xuICAgICAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcbiAgICAgICAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuc2hvd1RhYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIGJ1aWxkSGVhZGVycygpIHtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBhd2FpdCB0aGlzLnNvcnQoKTtcbiAgICBpZiAodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XG4gICAgICBjb25zdCB0bXA6IGFueSA9IFtdO1xuICAgICAgZm9yIChsZXQgayBvZiB0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgdG1wLnB1c2goay5rZXkpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gWy4uLnRtcF07XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ01vZHVsZSBUYWJsZSBOZXcgVXBkYXRlIENvbHVtbiBEZWZpbml0aW9uJywgIHRoaXMuY29sdW1uc1RvRGlzcGxheSk7XG4gIH1cblxuICBnZW5lcmF0ZUNsYXNzKENsYXNzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IE15Q2xhc3M6IHN0cmluZ1tdID0gWydkZWZhdWx0LXRhYmxlLWNsYXNzJ107XG4gICAgZm9yIChsZXQgYyBvZiBDbGFzcykge1xuICAgICAgaWYgKGMgJiYgYyAhPT0gJycpIHtcbiAgICAgICAgTXlDbGFzcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTXlDbGFzcztcbiAgfVxuXG4gIGFzeW5jIHNvcnQoKSB7XG4gICAgY29uc3QgY29tcGFyZSA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogKGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IDApKVxuICAgIH07XG4gICAgaWYgKHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKSB7XG4gICAgICByZXR1cm4gWy4uLnRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zLnNvcnQoY29tcGFyZSldO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBidWlsZExpbmsob3ZlcnJpZGU6IHN0cmluZ1tdLCBlbGVtZW50KSB7XG4gICAgaWYgKG92ZXJyaWRlLmxlbmd0aCA+PSAyKSB7XG4gICAgICBsZXQgYmFzZVBhdGg6IHN0cmluZyA9IG92ZXJyaWRlWzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvdmVycmlkZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBiYXNlUGF0aCArPSAnLycgKyBlbGVtZW50W292ZXJyaWRlW2ldXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlUGF0aDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgSm9pbihlbGVtOiBhbnksIG92ZXJyaWRlOiBzdHJpbmdbXSwgam9pbktleTogc3RyaW5nID0gJ1xcbicpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IHggaW4gZWxlbSkge1xuICAgICAgaWYgKG92ZXJyaWRlLmluZGV4T2YoeCkgPiAtMSkge1xuICAgICAgICB2YWx1ZS5wdXNoKGVsZW1beF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWUuam9pbihqb2luS2V5KVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhLmZpbHRlcih7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleHBhbmRTaG93KHRlbXBsYXRlOiBzdHJpbmcpIHtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICgodGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPiAxIHx8IHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID09PSAwKVxuICAgICAgJiYgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPCAyMDApIHtcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5kYXRhLmZpbHRlcih0aGlzLmlucHV0U2VhcmNoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxufVxuXG5leHBvcnQge1xuICBDb3JlTWF0VGFibGUsXG4gIEZpbHRlckRhdGVJbnRlcmZhY2UsXG4gIENvcmVNYXRUYWJsZUludGVyZmFjZSxcbiAgUGFnZSxcbiAgUGFnZVJlcXVlc3QsXG4gIFNvcnQsXG4gIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsXG4gIENlbGxzQ29tcG9uZW50TGlzdCxcbiAgVGFibGVDb21wb25lbnRcbn1cbiJdfQ==