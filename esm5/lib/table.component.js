import { __awaiter, __decorate, __generator, __metadata, __read, __spread, __values } from "tslib";
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CoreMatTable } from './core-data-table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CellsComponentList } from './setting/CellsComponentRegistry';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableService } from './table.service';
import { TranslateService } from './translate.service';
var TableComponent = /** @class */ (function () {
    function TableComponent(router, route, service, detector, translate, changeDetectorRef) {
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
                    // this.data.paginator.pageIndex = newpage;
                    console.log('on passe dans la ligne 146', _this.data.paginator.pageIndex, newpage);
                }
                _this.changeDetectorRef.markForCheck();
            });
            var page = this.route.snapshot.queryParams['page'];
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
    };
    TableComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: TableService },
        { type: ChangeDetectorRef },
        { type: TranslateService },
        { type: ChangeDetectorRef }
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
            template: "<div class=\"table-wrapper\">\r\n  <div class=\"row\" style=\"height: 20px;background: transparent!important; box-shadow: none !important\">\r\n    <div class=\"\">\r\n      <!--<div class=\"col-lg-12 search-container\">\r\n        <mat-icon style=\"left: 16%; position: absolute; margin-top: 10px;\">search</mat-icon>\r\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\"\r\n        [value]=\"inputSearch\"\r\n        (change)=\"onChange($event)\"\r\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\r\n                        && $event.target.value.length < 200)\r\n                                       ? data.filter($event) : null)\"\r\n               #filterOngoing>\r\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\r\n           [matTooltip]=\"cancelSearch\"\r\n           (click)=\"reset() && filterOngoing.value = ''\">\r\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\r\n        </a>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n  <!-- Table -->\r\n  <table mat-table #table=\"matSort\" [dataSource]=\"data \" multiTemplateDataRows matSort class=\"\"\r\n    *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\r\n    (matSortChange)=\"data.sortIt($event)\">\r\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\r\n      <ng-container *ngIf=\"column.sort\">\r\n        <th mat-header-cell *matHeaderCellDef\r\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\r\n          mat-sort-header>\r\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n        </th>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!column.sort\">\r\n        <!-- Ajouter fonction generate Class -->\r\n        <ng-container *ngIf=\"column.clickable\">\r\n          <th mat-header-cell *matHeaderCellDef\r\n            (click)=\"clicked.emit({key : column.key, statement : (column.statement = !column.statement)})\"\r\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\r\n            style=\"cursor: pointer;\">\r\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n            <app-is-mat-icon *ngIf=\"column.valueStatement && column.statement !== undefined\"\r\n              [input]=\"column.valueStatement[column.statement ? 1 : 0]\">\r\n            </app-is-mat-icon>\r\n          </th>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!column.clickable\">\r\n          <th mat-header-cell *matHeaderCellDef\r\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\r\n            <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n          </th>\r\n        </ng-container>\r\n        <th mat-header-cell *matHeaderCellDef\r\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\r\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\r\n        </th>\r\n      </ng-container>\r\n\r\n      <td *ngIf=\"EmptyRow\" [attr.colspan]=\"columnsToDisplay.length\" class=\"empty-row\"></td>\r\n      <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\r\n        [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\r\n        <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\r\n          <!-- Button click -->\r\n          <ng-container *ngSwitchCase=\"'button-click'\">\r\n            <a [matTooltip]=\"open\" class=\"btn-link-text\" (click)=\"callFunction.emit(element[column.key])\">\r\n              <!--<ng-container *ngIf=\"column.display\">\r\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!column.display\">\r\n                {{element[column.key]}}\r\n              </ng-container>-->\r\n              {{ details }}\r\n            </a>\r\n          </ng-container>\r\n          <!-- Button link -->\r\n          <ng-container *ngSwitchCase=\"'button-link'\">\r\n            <!--                matBadge=\"*\" matBadgePosition=\"before\"\r\n               matBadgeColor=\"accent\" -->\r\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\" (click)=\"element.new = false\"\r\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\r\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\r\n              <ng-container *ngIf=\"column.display\">\r\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!column.display\">\r\n                {{element[column.key]}}\r\n              </ng-container>\r\n            </a>\r\n            <a *ngIf=\"!element.new\" [matTooltip]=\"open\" class=\"mat-button btn-xs\"\r\n              [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\r\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\r\n              <ng-container *ngIf=\"column.display\">\r\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!column.display\">\r\n                {{element[column.key]}}\r\n              </ng-container>\r\n            </a>\r\n          </ng-container>\r\n          <!-- Button link text -->\r\n          <ng-container *ngSwitchCase=\"'button-link-text'\">\r\n            <a [matTooltip]=\"open\" class=\"btn-link-text btn-xs\" (click)=\"element.new = false\"\r\n              routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\r\n              {{ details }}\r\n            </a>\r\n          </ng-container>\r\n          <!-- icon custom-->\r\n          <ng-container *ngSwitchCase=\"'custom-icon'\">\r\n            <input type=\"hidden\" [value]=\"element[column.key]\">\r\n            <img *ngIf=\"element[column.key] && column.valueOverride\" [src]=\"column.valueOverride[element[column.key]]\"\r\n              style=\"width: 20px; height: 20px;\">\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'it-category'\">\r\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\r\n          </ng-container>\r\n          <!-- icon it status -->\r\n          <ng-container *ngSwitchCase=\"'it-status'\">\r\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\r\n          </ng-container>\r\n          <!-- icon customer rank -->\r\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\r\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\r\n          </ng-container>\r\n          <!-- icon priority-->\r\n          <ng-container *ngSwitchCase=\"'priority'\">\r\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\r\n          </ng-container>\r\n          <!-- icon gender avatar-->\r\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\r\n            <app-gender [type]=\"element[column.key]\"></app-gender>\r\n          </ng-container>\r\n\r\n          <!-- icon gender avatar-->\r\n          <ng-container *ngSwitchCase=\"'phone-display'\">\r\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\r\n          </ng-container>\r\n\r\n          <!-- icon gender avatar-->\r\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\r\n            <app-yes-nox\r\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\r\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\" [displayNo]=\"column.config.displayYes\"\r\n              [displayYes]=\"column.config.displayNo\">\r\n            </app-yes-nox>\r\n            <app-yes-nox\r\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\r\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\r\n            </app-yes-nox>\r\n          </ng-container>\r\n          <!-- icon origin-->\r\n          <ng-container *ngSwitchCase=\"'origin'\">\r\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\r\n          </ng-container>\r\n          <!-- icon name avatar-->\r\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\r\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\" [src]=\"element[column.key]\"\r\n              [matTooltipClass]=\"'my-tooltip'\">\r\n            </name-avatar>\r\n          </ng-container>\r\n          <!-- date format -->\r\n          <ng-container *ngSwitchCase=\"'date-format'\">\r\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\r\n          </ng-container>\r\n          <!-- count rows -->\r\n          <ng-container *ngSwitchCase=\"'count-row'\">\r\n            <span style=\"padding-left: 14px\">\r\n              {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\r\n            </span>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'custom-status'\">\r\n            <lib-status [label]=\"element[column.key]\" [class]=\"element[column.class]\"></lib-status>\r\n          </ng-container>\r\n          <ng-container *ngSwitchDefault>\r\n            {{element[column.key]}}\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"element === 'empty'\">\r\n      <td [ngClass]=\"'empty-row'\" mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n        empty row\r\n      </td>\r\n    </ng-container>\r\n\r\n    </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\r\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\r\n        [@detailExpand]=\"expandedElement && element == expandedElement ? 'expanded' : 'collapsed'\" style=\"height: 0\">\r\n        <div *ngIf=\"element['CaseNumber'] && expandedElement\">\r\n          <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\r\n          </div>\r\n\r\n          <a [class.nav-expanded]=\"element == expandedElement\" [routerLink]=\"['/ticket/', element['CaseNumber']]\"\r\n            [title]=\"open\">\r\n            <img class=\"detail-view-ticket\" src=\"/assets/icons/eye.png\">\r\n          </a>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n    <ng-container *ngIf=\"displayDetail\">\r\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\"\r\n        [ngClass]=\"!element || element === 'empty'? 'empty-row-none': 'detail-row'\"\r\n        [class.expanded]=\"expandedElement == element\" (click)=\"expand(element)\">\r\n      </tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\"\r\n        [ngClass]=\"!expandedElement || !row || row === 'empty'? 'empty-row': 'detail-row'\">\r\n\r\n      </tr>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!displayDetail\">\r\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"element-row\">\r\n      </tr>\r\n    </ng-container>\r\n  </table>\r\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\r\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\r\n      <div class=\"\">\r\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\r\n          {{ noResult }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\r\n    [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\" (page)=\"data.fetch($event.pageIndex)\"\r\n    showFirstLastButtons></mat-paginator>\r\n</div>",
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
    return TableComponent;
}());
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixNQUFNLEVBQ04sYUFBYSxFQUNiLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBdUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0SCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBeUN2RDtJQTZCRSx3QkFBb0IsTUFBYyxFQUN4QixLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUEyQixFQUMzQixTQUEyQixFQUMzQixpQkFBb0M7UUFMMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLHNCQUFpQixHQUFq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TSxFQUFFLENBQUMsQ0FBQztvQkFDN0UsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDekMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2lCQUN0RixDQUFDLENBQUM7WUFDSCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7U0FDdEMsQ0FBQzt5Q0E4QjRCLE1BQU07WUFDakIsY0FBYztZQUNaLFlBQVk7WUFDWCxpQkFBaUI7WUFDaEIsZ0JBQWdCO1lBQ1IsaUJBQWlCO09BbEMxQyxjQUFjLENBZ01uQjtJQUFELHFCQUFDO0NBQUEsQUFoTUQsSUFnTUM7QUFFRCxPQUFPLEVBQ0wsWUFBWSxFQU9aLGtCQUFrQixFQUNsQixjQUFjLEVBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0IH0gZnJvbSAnLi9jb3JlLWRhdGEtdGFibGUnO1xyXG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmltcG9ydCB7IENlbGxzQ29tcG9uZW50TGlzdCB9IGZyb20gJy4vc2V0dGluZy9DZWxsc0NvbXBvbmVudFJlZ2lzdHJ5JztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgTWF0U29ydCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xyXG5pbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tICcuL3RhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgZGlzcGxheUNvbHVtbnNDb25maWcge1xyXG4gIHNpemVJY29uPzogbnVtYmVyO1xyXG4gIGRpc3BsYXlZZXM/OiBib29sZWFuO1xyXG4gIGRpc3BsYXlObz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIHtcclxuICBrZXk6IHN0cmluZzsgLy8gb2JqZWN0IGtleVxyXG4gIHZhbHVlOiBzdHJpbmc7IC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xyXG4gIHJhdGlvPzogbnVtYmVyO1xyXG4gIG9yZGVyPzogbnVtYmVyOyAvLyBzb3J0IGNvbHVtblxyXG4gIGNsYXNzPzogc3RyaW5nOyAvLyBjc3MgY2xhc3NcclxuICBjYXRlZ29yeT86IHN0cmluZzsvLyBzdGF0dXMgY2F0ZWdvcnlcclxuICBtb2R1bGU/OiBDZWxsc0NvbXBvbmVudExpc3Q7XHJcbiAgb3ZlcnJpZGU/OiBzdHJpbmcgfCBzdHJpbmdbXTsgLy8gZm9yIGJ1aWxkaW5nIHVybCBvciBhdmF0YXIgbmFtZVxyXG4gIGRpc3BsYXk/OiBzdHJpbmc7IC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxyXG4gIGFsaWduPzogc3RyaW5nOyAvLyBjZWxsIGNvbnRlbnQgYWxpZ24gJ2xlZnQgY2VudGVyIHJpZ2h0J1xyXG4gIHNvcnQ/OiBib29sZWFuOyAvLyAnc29ydGFibGUgY29sdW1uJ1xyXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47IC8vIGVuYWJsZSBjbGlja2FibGUgY29sdW1uIHdoZW4gc29ydGluZyBpcyBkaXNhYmxlXHJcbiAgc3RhdGVtZW50PzogYm9vbGVhbjsgLy8gYnkgZGVmYXVsdCBzdGF0ZW1lbnQgaXMgZmFsc2UgYW5kIGlzIHVzZWQgd2l0aCAnY2xpY2thYmxlJyBvcHRpb25zXHJcbiAgdmFsdWVTdGF0ZW1lbnQ/OiBzdHJpbmdbXTtcclxuICBmb250U2l6ZT86IHN0cmluZztcclxuICBjb25maWc/OiBkaXNwbGF5Q29sdW1uc0NvbmZpZztcclxuICB2YWx1ZU92ZXJyaWRlPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXHJcbiAgfTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVzaWduLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2RldGFpbEV4cGFuZCcsIFtcclxuICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnLCBkaXNwbGF5OiAnbm9uZScgfSkpLFxyXG4gICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSksXHJcbiAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxyXG4gIF0pXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBWaWV3Q2hpbGQoJ01hdFBhZ2luYXRvckN1cnJlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwYWdpbmF0b3JDdXJyZW50OiBNYXRQYWdpbmF0b3I7XHJcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzb3J0Q3VycmVudDogTWF0U29ydDtcclxuXHJcbiAgQElucHV0KCkgY29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcclxuICBASW5wdXQoKSBkaXNwbGF5RGV0YWlsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzcGxheUNvbXBvbmVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRhdGE6IENvcmVNYXRUYWJsZUludGVyZmFjZTtcclxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYnRuT3ZlcnJpZGUgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgY2FsbEZ1bmN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIGlucHV0U2VhcmNoID0gJyc7XHJcbiAgQElucHV0KCkgRW1wdHlSb3cgPSBmYWxzZTtcclxuICBASW5wdXQoKSBibG9ja0RldGFpbHMgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHN0YXRlbWVudDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIGNvbHVtbnNUb0Rpc3BsYXk6IHN0cmluZ1tdO1xyXG4gIHB1YmxpYyBmaWx0ZXI6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogYW55O1xyXG4gIHB1YmxpYyBleHBhbmRlZEVsZW1lbnQ6IGFueTtcclxuICBwdWJsaWMgaW5kZXggPSAwO1xyXG4gIHB1YmxpYyBvcGVuID0gJyc7XHJcbiAgcHVibGljIHNlYXJjaCA9ICcnO1xyXG4gIHB1YmxpYyBjYW5jZWxTZWFyY2ggPSAnJztcclxuICBwdWJsaWMgbm9SZXN1bHQgPSAnJztcclxuICBwdWJsaWMgZGV0YWlscyA9ICcnO1xyXG4gIHB1YmxpYyBzaG93VGFibGUgPSBmYWxzZTtcclxuICBwcml2YXRlIFByaXZhdGVDb2x1bW5EZWZpbml0aW9uczogW2Rpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kKGVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLmJsb2NrRGV0YWlscykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5leHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5leHBhbmRlZEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZW1wdHlSb3cgPSB0aGlzLkVtcHR5Um93O1xyXG4gICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcclxuICAgIHRoaXMuc2VhcmNoID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ1NFQVJDSCcpO1xyXG4gICAgdGhpcy5jYW5jZWxTZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnQ0FOQ0VMX1NFQVJDSCcpO1xyXG4gICAgdGhpcy5ub1Jlc3VsdCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOT19SRVNVTFQnKTtcclxuICAgIHRoaXMuZGV0YWlscyA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdERVRBSUxTJyk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRhdGEucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3JDdXJyZW50O1xyXG4gICAgICB0aGlzLmRhdGEuc29ydCA9IHRoaXMuc29ydEN1cnJlbnQ7XHJcblxyXG4gICAgICB0aGlzLmRhdGEucGFnZU51bWJlci5zdWJzY3JpYmUoKG5ld3BhZ2U6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChuZXdwYWdlID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXHJcbiAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcclxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBwYWdlOiBuZXdwYWdlICsgMSB9LFxyXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdwYWdlID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHBhZ2U6IG51bGwgfSxcclxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IgJiYgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggIT09IG5ld3BhZ2UpIHtcclxuICAgICAgICAgIC8vIHRoaXMuZGF0YS5wYWdpbmF0b3IucGFnZUluZGV4ID0gbmV3cGFnZTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnb24gcGFzc2UgZGFucyBsYSBsaWduZSAxNDYnLCB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCwgbmV3cGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1sncGFnZSddO1xyXG4gICAgICBpZiAocGFnZSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlOiBudW1iZXIgPSBOdW1iZXIocGFnZSkgLSAxO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zdGFydFdpdGggPSBjdXJyZW50UGFnZTtcclxuICAgICAgICB0aGlzLmRhdGEuZmV0Y2goY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5udW1iZXIgPSBjdXJyZW50UGFnZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbnM7XHJcbiAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcclxuICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZUhlYWRlci5zdWJzY3JpYmUoKHN0YXR1czogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLnNlcnZpY2UuZGlzcGxheUNvbHVtbjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdNb2R1bGUgdGFibGUgLT4gTmV3IGNvbHVtbiBkZWZpbml0aW9ucycsIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKTtcclxuICAgICAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcclxuICAgICAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICB0aGlzLnNob3dUYWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBidWlsZEhlYWRlcnMoKSB7XHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBhd2FpdCB0aGlzLnNvcnQoKTtcclxuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcclxuICAgICAgY29uc3QgdG1wOiBhbnkgPSBbXTtcclxuICAgICAgZm9yIChsZXQgayBvZiB0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcclxuICAgICAgICB0bXAucHVzaChrLmtleSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gWy4uLnRtcF07XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKCdNb2R1bGUgVGFibGUgTmV3IFVwZGF0ZSBDb2x1bW4gRGVmaW5pdGlvbicsICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDbGFzcyhDbGFzczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IE15Q2xhc3M6IHN0cmluZ1tdID0gWydkZWZhdWx0LXRhYmxlLWNsYXNzJ107XHJcbiAgICBmb3IgKGxldCBjIG9mIENsYXNzKSB7XHJcbiAgICAgIGlmIChjICYmIGMgIT09ICcnKSB7XHJcbiAgICAgICAgTXlDbGFzcy5wdXNoKGMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTXlDbGFzcztcclxuICB9XHJcblxyXG4gIGFzeW5jIHNvcnQoKSB7XHJcbiAgICBjb25zdCBjb21wYXJlID0gKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiAoYS5vcmRlciA8IGIub3JkZXIgPyAtMSA6IChhLm9yZGVyID4gYi5vcmRlciA/IDEgOiAwKSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKSB7XHJcbiAgICAgIHJldHVybiBbLi4udGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMuc29ydChjb21wYXJlKV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGRMaW5rKG92ZXJyaWRlOiBzdHJpbmdbXSwgZWxlbWVudCkge1xyXG4gICAgaWYgKG92ZXJyaWRlLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgIGxldCBiYXNlUGF0aDogc3RyaW5nID0gb3ZlcnJpZGVbMF07XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3ZlcnJpZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBiYXNlUGF0aCArPSAnLycgKyBlbGVtZW50W292ZXJyaWRlW2ldXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYmFzZVBhdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgSm9pbihlbGVtOiBhbnksIG92ZXJyaWRlOiBzdHJpbmdbXSwgam9pbktleTogc3RyaW5nID0gJ1xcbicpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdmFsdWU6IHN0cmluZ1tdID0gW107XHJcbiAgICBmb3IgKGxldCB4IGluIGVsZW0pIHtcclxuICAgICAgaWYgKG92ZXJyaWRlLmluZGV4T2YoeCkgPiAtMSkge1xyXG4gICAgICAgIHZhbHVlLnB1c2goZWxlbVt4XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZS5qb2luKGpvaW5LZXkpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmRhdGEuZmlsdGVyKHtcclxuICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBleHBhbmRTaG93KHRlbXBsYXRlOiBzdHJpbmcpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoKHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID4gMSB8fCB0aGlzLmlucHV0U2VhcmNoLmxlbmd0aCA9PT0gMClcclxuICAgICAgJiYgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPCAyMDAgJiYgdGhpcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5maWx0ZXIodGhpcy5pbnB1dFNlYXJjaCk7XHJcbiAgICAgIHRoaXMuZGF0YS5mZXRjaCgwKTtcclxuXHJcbiAgICB9XHJcbiAgICAvL3RoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIGNoYW5nZXMuZGF0YS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0luaXQgaW5pdCcpXHJcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgIH1cclxuICAgIC8vXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBDb3JlTWF0VGFibGUsXHJcbiAgRmlsdGVyRGF0ZUludGVyZmFjZSxcclxuICBDb3JlTWF0VGFibGVJbnRlcmZhY2UsXHJcbiAgUGFnZSxcclxuICBQYWdlUmVxdWVzdCxcclxuICBTb3J0LFxyXG4gIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsXHJcbiAgQ2VsbHNDb21wb25lbnRMaXN0LFxyXG4gIFRhYmxlQ29tcG9uZW50XHJcbn07XHJcbiJdfQ==