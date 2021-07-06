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
        this.callFunction = new EventEmitter();
        this.filter = [];
        this.index = 0;
        this.open = '';
        this.search = '';
        this.cancelSearch = '';
        this.noResult = '';
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.open = this.translate.translate(this.lang, 'OPEN');
        this.search = this.translate.translate(this.lang, 'SEARCH');
        this.cancelSearch = this.translate.translate(this.lang, 'CANCEL_SEARCH');
        this.noResult = this.translate.translate(this.lang, 'NO_RESULT');
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
                        console.log('Module Table New Update Column Definition', this.columnsToDisplay);
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
        Output(),
        __metadata("design:type", EventEmitter)
    ], TableComponent.prototype, "callFunction", void 0);
    TableComponent = __decorate([
        Component({
            selector: 'ngx-design-table',
            template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n    <div class=\" elevation-z1\">\n      <div class=\"col-lg-12 search-container\">\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"cancelSearch\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\"\n         [dataSource]=\"data \" multiTemplateDataRows matSort\n         class=\"mat-elevation-z8\" *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements\"\n         (matSortChange)=\"data.sortIt($event)\">\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort\">\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <td mat-cell *matCellDef=\"let element\"\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a [matTooltip]=\"open\"\n               class=\"mat-button nowboard-btn btn-xs\"\n               (click)=\"callFunction.emit(element[column.key])\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n               class=\"mat-button link-btn btn-xs\"\n               (click)=\"element.new = false\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\"\n               matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\"\n               [matTooltip]=\"open\"\n               class=\"mat-button link-btn btn-xs\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element[column.key]\" [iconLabel]=\"element.IconLabel || null\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n              [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n            >\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                         [src]=\"element[column.key]\"\n                         [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            {{element[column.key]}}\n          </ng-container>\n        </ng-container>\n\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n          [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\"\n          style=\"height: 0\">\n        <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n        </div>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\"\n          [class.expanded]=\"expandedElement == element\"\n          (click)=\"expandedElement === element? expandedElement = null : expandedElement = element\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\" class=\"detail-row\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"\">\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n          {{ noResult }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                 [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                 (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n",
            animations: [trigger('detailExpand', [
                    state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ])],
            encapsulation: ViewEncapsulation.None,
            styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .element-row .mat-cell{padding-right:5px}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span,app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font:900 14px/20px nexa;letter-spacing:0;text-align:center;text-decoration:underline}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBa0N2RDtJQXNCRSx3QkFBb0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQTRCLEVBQzVCLFNBQTJCO1FBSjNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzVCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBcEJ0QyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUk5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bnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NlbGxzQ29tcG9uZW50TGlzdH0gZnJvbSBcIi4vc2V0dGluZy9DZWxsc0NvbXBvbmVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHtDb3JlTWF0VGFibGUsIENvcmVNYXRUYWJsZUludGVyZmFjZSwgRmlsdGVyRGF0ZUludGVyZmFjZSwgUGFnZSwgUGFnZVJlcXVlc3QsIFNvcnR9IGZyb20gXCIuL2NvcmUtZGF0YS10YWJsZVwiO1xuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi90YWJsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5cblxuaW50ZXJmYWNlIGRpc3BsYXlDb2x1bW5zQ29uZmlnIHtcbiAgc2l6ZUljb24/OiBudW1iZXI7XG4gIGRpc3BsYXlZZXM/OiBib29sZWFuO1xuICBkaXNwbGF5Tm8/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSB7XG4gIGtleTogc3RyaW5nLCAvLyBvYmplY3Qga2V5XG4gIHZhbHVlOiBzdHJpbmcsIC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xuICByYXRpbz86IG51bWJlcixcbiAgb3JkZXI/OiBudW1iZXIsIC8vIHNvcnQgY29sdW1uXG4gIGNsYXNzPzogc3RyaW5nLCAvLyBjc3MgY2xhc3NcbiAgbW9kdWxlPzogQ2VsbHNDb21wb25lbnRMaXN0LFxuICBvdmVycmlkZT86IHN0cmluZyB8IHN0cmluZ1tdLCAvLyBmb3IgYnVpbGRpbmcgdXJsIG9yIGF2YXRhciBuYW1lXG4gIGRpc3BsYXk/OiBzdHJpbmcsIC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxuICBhbGlnbj86IHN0cmluZywgLy8gY2VsbCBjb250ZW50IGFsaWduICdsZWZ0IGNlbnRlciByaWdodCdcbiAgc29ydD86IGJvb2xlYW4sIC8vICdzb3J0YWJsZSBjb2x1bW4nXG4gIGNvbmZpZz86IGRpc3BsYXlDb2x1bW5zQ29uZmlnXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kZXNpZ24tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCcsIGRpc3BsYXk6ICdub25lJ30pKSxcbiAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSksXG4gICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgXSldLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ01hdFBhZ2luYXRvckN1cnJlbnQnLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yQ3VycmVudDogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKCd0YWJsZScsIHtzdGF0aWM6IHRydWV9KSBzb3J0Q3VycmVudDogTWF0U29ydDtcblxuXG4gIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gIEBJbnB1dCgpIGRpc3BsYXlEZXRhaWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzcGxheUNvbXBvbmVudDogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcbiAgQE91dHB1dCgpIGNhbGxGdW5jdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHVibGljIGNvbHVtbnNUb0Rpc3BsYXk6IHN0cmluZ1tdO1xuICBwdWJsaWMgZmlsdGVyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zOiBhbnk7XG4gIHB1YmxpYyBleHBhbmRlZEVsZW1lbnQ6IGFueTtcbiAgcHVibGljIGluZGV4ID0gMDtcbiAgcHJpdmF0ZSBQcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gIHB1YmxpYyBvcGVuID0gJyc7XG4gIHB1YmxpYyBzZWFyY2ggPSAnJztcbiAgcHVibGljIGNhbmNlbFNlYXJjaCA9ICcnO1xuICBwdWJsaWMgbm9SZXN1bHQgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGV0ZWN0b3IgOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdPUEVOJyk7XG4gICAgdGhpcy5zZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnU0VBUkNIJyk7XG4gICAgdGhpcy5jYW5jZWxTZWFyY2ggPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnQ0FOQ0VMX1NFQVJDSCcpO1xuICAgIHRoaXMubm9SZXN1bHQgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnTk9fUkVTVUxUJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yQ3VycmVudDtcbiAgICAgIHRoaXMuZGF0YS5zb3J0ID0gdGhpcy5zb3J0Q3VycmVudDtcblxuICAgICAgdGhpcy5kYXRhLnBhZ2VOdW1iZXIuc3Vic2NyaWJlKChuZXdwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKG5ld3BhZ2UgPiAwKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBuZXdwYWdlICsgMX0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld3BhZ2UgPT09IDApIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge3BhZ2U6IG51bGx9LFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IgJiYgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggIT09IG5ld3BhZ2UpIHtcbiAgICAgICAgICB0aGlzLmRhdGEucGFnaW5hdG9yLnBhZ2VJbmRleCA9IG5ld3BhZ2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwYWdlXCJdO1xuICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2U6IG51bWJlciA9IE51bWJlcihwYWdlKSAtIDE7XG4gICAgICAgIHRoaXMuZGF0YS5zdGFydFdpdGggPSBjdXJyZW50UGFnZTtcbiAgICAgICAgdGhpcy5kYXRhLmZldGNoKGN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IGN1cnJlbnRQYWdlO1xuICAgICAgfVxuICAgICAgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMgPSB0aGlzLmNvbHVtbkRlZmluaXRpb25zO1xuICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBidWlsZCB0YWJsZScsIGVycikpO1xuICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZUhlYWRlci5zdWJzY3JpYmUoKHN0YXR1czogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBudWxsO1xuICAgICAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5zZXJ2aWNlLmRpc3BsYXlDb2x1bW47XG4gICAgICAgICAgY29uc29sZS5sb2coJ01vZHVsZSB0YWJsZSAtPiBOZXcgY29sdW1uIGRlZmluaXRpb25zJywgdGhpcy5Qcml2YXRlQ29sdW1uRGVmaW5pdGlvbnMpO1xuICAgICAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcbiAgICAgICAgICB0aGlzLmRldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYnVpbGRIZWFkZXJzKCkge1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGF3YWl0IHRoaXMuc29ydCgpO1xuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgIGNvbnN0IHRtcCA6IGFueSA9IFtdO1xuICAgICAgZm9yIChsZXQgayBvZiB0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgdG1wLnB1c2goay5rZXkpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gWy4uLnRtcF07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdNb2R1bGUgVGFibGUgTmV3IFVwZGF0ZSBDb2x1bW4gRGVmaW5pdGlvbicsICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkpO1xuICB9XG5cbiAgZ2VuZXJhdGVDbGFzcyhDbGFzczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBNeUNsYXNzOiBzdHJpbmdbXSA9IFsnZGVmYXVsdC10YWJsZS1jbGFzcyddO1xuICAgIGZvciAobGV0IGMgb2YgQ2xhc3MpIHtcbiAgICAgIGlmIChjICYmIGMgIT09ICcnKSB7XG4gICAgICAgIE15Q2xhc3MucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE15Q2xhc3M7XG4gIH1cblxuICBhc3luYyBzb3J0KCkge1xuICAgIGNvbnN0IGNvbXBhcmUgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAoYS5vcmRlciA8IGIub3JkZXIgPyAtMSA6IChhLm9yZGVyID4gYi5vcmRlciA/IDEgOiAwKSlcbiAgICB9O1xuICAgIGlmICh0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucykge1xuICAgICAgcmV0dXJuIFsuLi50aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucy5zb3J0KGNvbXBhcmUpXTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYnVpbGRMaW5rKG92ZXJyaWRlOiBzdHJpbmdbXSwgZWxlbWVudCkge1xuICAgIGlmIChvdmVycmlkZS5sZW5ndGggPj0gMikge1xuICAgICAgbGV0IGJhc2VQYXRoOiBzdHJpbmcgPSBvdmVycmlkZVswXTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3ZlcnJpZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmFzZVBhdGggKz0gJy8nICsgZWxlbWVudFtvdmVycmlkZVtpXV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYmFzZVBhdGg7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIEpvaW4oZWxlbTogYW55LCBvdmVycmlkZTogc3RyaW5nW10sIGpvaW5LZXk6IHN0cmluZyA9ICdcXG4nKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGxldCB4IGluIGVsZW0pIHtcbiAgICAgIGlmIChvdmVycmlkZS5pbmRleE9mKHgpID4gLTEpIHtcbiAgICAgICAgdmFsdWUucHVzaChlbGVtW3hdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLmpvaW4oam9pbktleSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZGF0YS5maWx0ZXIoe1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhwYW5kU2hvdyh0ZW1wbGF0ZTogc3RyaW5nKSB7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxufVxuXG5leHBvcnQge1xuICBDb3JlTWF0VGFibGUsXG4gIEZpbHRlckRhdGVJbnRlcmZhY2UsXG4gIENvcmVNYXRUYWJsZUludGVyZmFjZSxcbiAgUGFnZSxcbiAgUGFnZVJlcXVlc3QsXG4gIFNvcnQsXG4gIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsXG4gIENlbGxzQ29tcG9uZW50TGlzdCxcbiAgVGFibGVDb21wb25lbnRcbn1cbiJdfQ==