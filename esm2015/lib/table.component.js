import { __awaiter, __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellsComponentList } from "./setting/CellsComponentRegistry";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { CoreMatTable } from "./core-data-table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { ActivatedRoute, Router } from "@angular/router";
import { TableService } from "./table.service";
import { TranslateService } from './translate.service';
let TableComponent = class TableComponent {
    constructor(router, route, service, detector, translate) {
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
                    this.data.paginator.pageIndex = newpage;
                }
            });
            const page = this.route.snapshot.queryParams["page"];
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
            && this.inputSearch.length < 200) {
            if (this.data) {
                this.data.filter(this.inputSearch);
            }
        }
        this.ngOnInit();
    }
};
TableComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: TableService },
    { type: ChangeDetectorRef },
    { type: TranslateService }
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
TableComponent = __decorate([
    Component({
        selector: 'ngx-design-table',
        template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 20px;background: transparent!important; box-shadow: none !important\">\n    <div class=\"\">\n      <!--<div class=\"col-lg-12 search-container\">\n        <mat-icon style=\"left: 16%; position: absolute; margin-top: 10px;\">search</mat-icon>\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\" \n        [value]=\"inputSearch\"\n        (change)=\"onChange($event)\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"cancelSearch\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>-->\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\"\n         [dataSource]=\"data \" multiTemplateDataRows matSort\n         class=\"\" *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\n         (matSortChange)=\"data.sortIt($event)\">\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort && column?.key != 'A_quitt_la_soci_t__c'\">\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            mat-sort-header>\n            <input type=\"hidden\" [value]=\"column.key\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"column.sort && column?.key == 'A_quitt_la_soci_t__c'\">\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            mat-sort-header>\n            <input type=\"hidden\" [value]=\"column.key\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n          <a style=\"color: black; text-decoration: none; cursor: pointer;\" id=\"show-hide-collab\">\n            <mat-icon *ngIf=\"column.key == 'A_quitt_la_soci_t__c'\" id=\"show-collab-icon\" style=\"display: none;\">visibility</mat-icon>\n            <mat-icon *ngIf=\"column.key == 'A_quitt_la_soci_t__c'\" id=\"hide-collab-icon\">visibility_off</mat-icon>\n          </a>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n\n      <td *ngIf=\"EmptyRow\" [attr.colspan]=\"columnsToDisplay.length\" class=\"empty-row\"></td>\n      <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a [matTooltip]=\"open\"\n               class=\"btn-link-text\"\n               (click)=\"callFunction.emit(element[column.key])\">\n              <!--<ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>-->\n              {{ details }}\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <!--                matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\" -->\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n               class=\"mat-button btn-xs\"\n               (click)=\"element.new = false\"\n               [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\"\n               [matTooltip]=\"open\"\n               class=\"mat-button btn-xs\"\n               [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link text -->\n          <ng-container *ngSwitchCase=\"'button-link-text'\">\n            <a [matTooltip]=\"open\"\n               class=\"btn-link-text btn-xs\"\n               (click)=\"element.new = false\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                {{ details }}\n            </a>\n          </ng-container>\n          <!-- icon custom-->\n          <ng-container *ngSwitchCase=\"'custom-icon'\">\n            <img *ngIf=\"element[column.key]\" [src]=\"column.align\" style=\"width: 20px; height: 20px;\">\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n              [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n            >\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                         [src]=\"element[column.key]\"\n                         [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            {{element[column.key]}}\n          </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"element === 'empty'\">\n          <td [ngClass]=\"'empty-row'\" mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n            empty row\n          </td>\n        </ng-container>\n\n      </td>\n    </ng-container>\n\n      <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n        <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n            [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\"\n            style=\"height: 0\">\n          <div *ngIf=\"element['CaseNumber']\">\n            <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n            </div>\n\n            <a [class.nav-expanded]=\"element == expandedElement\"\n            [routerLink]=\"['/ticket/', element['CaseNumber']]\" [title]=\"open\">\n              <img class=\"detail-view-ticket\" src=\"/assets/icons/eye.png\">\n            </a>\n          </div>\n        </td>\n      </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\"\n          [ngClass]=\"element === 'empty'? 'empty-row-none': 'detail-row'\"\n          [class.expanded]=\"expandedElement == element\"\n          (click)=\"expand(element)\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\" [ngClass]=\"row === 'empty'? 'empty-row': 'detail-row'\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"\">\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n          {{ noResult }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                 [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                 (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n",
        animations: [trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])],
        encapsulation: ViewEncapsulation.None,
        styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span,app-is-mat-icon span{margin:auto}.link-btn{color:#171f26;font-family:\"Nexa Text Bold\";font-size:14px!important;letter-spacing:0;text-align:center;text-decoration:underline}.expanded>.mat-cell>.link-btn{text-decoration:none;font-weight:400}.btn-link-text{background:no-repeat padding-box #e5e8ee;border-radius:4px;text-align:left;font:bold 12px/19px \"Nexa Text\";letter-spacing:0;color:#707070!important;cursor:pointer;padding:10px}.empty-row{background:0 0!important;height:20px!important}.empty-row td{background:0 0!important}.empty-row-none{display:none!important}"]
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        TableService,
        ChangeDetectorRef,
        TranslateService])
], TableComponent);
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBa0N2RCxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFjO0lBNEJsQixZQUFvQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBNEIsRUFDNUIsU0FBMkI7UUFKM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUEzQnRD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RUFBRTs7bURBQXFCO0FBQ25CO0lBQVQsTUFBTSxFQUFFOzhCQUFlLFlBQVk7b0RBQWdDO0FBQzNEO0lBQVIsS0FBSyxFQUFFOzttREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7O2dEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7b0RBQXNCO0FBYjFCLGNBQWM7SUFYbkIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1Qix3blhBQXFDO1FBRXJDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7Z0JBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUMzRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO2dCQUN2QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDdEYsQ0FBQyxDQUFDO1FBQ0gsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7cUNBNkI0QixNQUFNO1FBQ1AsY0FBYztRQUNaLFlBQVk7UUFDVixpQkFBaUI7UUFDakIsZ0JBQWdCO0dBaEMzQyxjQUFjLENBc0xuQjtBQUVELE9BQU8sRUFDTCxZQUFZLEVBT1osa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2VsbHNDb21wb25lbnRMaXN0fSBmcm9tIFwiLi9zZXR0aW5nL0NlbGxzQ29tcG9uZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7TWF0U29ydH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge0NvcmVNYXRUYWJsZSwgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLCBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBQYWdlLCBQYWdlUmVxdWVzdCwgU29ydH0gZnJvbSBcIi4vY29yZS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuXG5pbnRlcmZhY2UgZGlzcGxheUNvbHVtbnNDb25maWcge1xuICBzaXplSWNvbj86IG51bWJlcjtcbiAgZGlzcGxheVllcz86IGJvb2xlYW47XG4gIGRpc3BsYXlObz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlIHtcbiAga2V5OiBzdHJpbmcsIC8vIG9iamVjdCBrZXlcbiAgdmFsdWU6IHN0cmluZywgLy8gZGlzcGxheSBjb2x1bW4gdmFsdWVzXG4gIHJhdGlvPzogbnVtYmVyLFxuICBvcmRlcj86IG51bWJlciwgLy8gc29ydCBjb2x1bW5cbiAgY2xhc3M/OiBzdHJpbmcsIC8vIGNzcyBjbGFzc1xuICBtb2R1bGU/OiBDZWxsc0NvbXBvbmVudExpc3QsXG4gIG92ZXJyaWRlPzogc3RyaW5nIHwgc3RyaW5nW10sIC8vIGZvciBidWlsZGluZyB1cmwgb3IgYXZhdGFyIG5hbWVcbiAgZGlzcGxheT86IHN0cmluZywgLy8gZm9yY2UgZGlzcGxheWluZyBvdGhlciBzdHVmZiB0aGFuIGVsZW1lbnRbZm9jdXNdXG4gIGFsaWduPzogc3RyaW5nLCAvLyBjZWxsIGNvbnRlbnQgYWxpZ24gJ2xlZnQgY2VudGVyIHJpZ2h0J1xuICBzb3J0PzogYm9vbGVhbiwgLy8gJ3NvcnRhYmxlIGNvbHVtbidcbiAgY29uZmlnPzogZGlzcGxheUNvbHVtbnNDb25maWdcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRlc2lnbi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJywgZGlzcGxheTogJ25vbmUnfSkpLFxuICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcbiAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICBdKV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5jbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnTWF0UGFnaW5hdG9yQ3VycmVudCcsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3JDdXJyZW50OiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJywge3N0YXRpYzogdHJ1ZX0pIHNvcnRDdXJyZW50OiBNYXRTb3J0O1xuXG4gIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gIEBJbnB1dCgpIGRpc3BsYXlEZXRhaWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzcGxheUNvbXBvbmVudDogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcbiAgQElucHV0KCkgYnRuT3ZlcnJpZGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNhbGxGdW5jdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgaW5wdXRTZWFyY2ggPSAnJztcbiAgQElucHV0KCkgRW1wdHlSb3cgPSBmYWxzZTtcbiAgQElucHV0KCkgYmxvY2tEZXRhaWxzID0gZmFsc2U7XG4gIFxuICBwdWJsaWMgY29sdW1uc1RvRGlzcGxheTogc3RyaW5nW107XG4gIHB1YmxpYyBmaWx0ZXI6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IGFueTtcbiAgcHVibGljIGV4cGFuZGVkRWxlbWVudDogYW55O1xuICBwdWJsaWMgaW5kZXggPSAwO1xuICBwcml2YXRlIFByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcbiAgcHVibGljIG9wZW4gPSAnJztcbiAgcHVibGljIHNlYXJjaCA9ICcnO1xuICBwdWJsaWMgY2FuY2VsU2VhcmNoID0gJyc7XG4gIHB1YmxpYyBub1Jlc3VsdCA9ICcnO1xuICBwdWJsaWMgZGV0YWlscyA9ICcnO1xuICBwdWJsaWMgc2hvd1RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGRldGVjdG9yIDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gIH1cblxuICBleHBhbmQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLmJsb2NrRGV0YWlscykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZih0aGlzLmV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudCkgeyBcbiAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gbnVsbDsgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gZWxlbWVudFxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5lbXB0eVJvdyA9IHRoaXMuRW1wdHlSb3c7XG4gICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdTRUFSQ0gnKTtcbiAgICB0aGlzLmNhbmNlbFNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdDQU5DRUxfU0VBUkNIJyk7XG4gICAgdGhpcy5ub1Jlc3VsdCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOT19SRVNVTFQnKTtcbiAgICB0aGlzLmRldGFpbHMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuXG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvckN1cnJlbnQ7XG4gICAgICB0aGlzLmRhdGEuc29ydCA9IHRoaXMuc29ydEN1cnJlbnQ7XG5cbiAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLnN1YnNjcmliZSgobmV3cGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChuZXdwYWdlID4gMCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbmV3cGFnZSArIDF9LFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdwYWdlID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBudWxsfSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEucGFnaW5hdG9yICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IucGFnZUluZGV4ICE9PSBuZXdwYWdlKSB7XG4gICAgICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggPSBuZXdwYWdlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicGFnZVwiXTtcbiAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlOiBudW1iZXIgPSBOdW1iZXIocGFnZSkgLSAxO1xuICAgICAgICB0aGlzLmRhdGEuc3RhcnRXaXRoID0gY3VycmVudFBhZ2U7XG4gICAgICAgIHRoaXMuZGF0YS5mZXRjaChjdXJyZW50UGFnZSk7XG4gICAgICAgIHRoaXMuZGF0YS5udW1iZXIgPSBjdXJyZW50UGFnZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5jb2x1bW5EZWZpbml0aW9ucztcbiAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcbiAgICAgIHRoaXMuc2VydmljZS51cGRhdGVIZWFkZXIuc3Vic2NyaWJlKChzdGF0dXM6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuc2VydmljZS5kaXNwbGF5Q29sdW1uO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdNb2R1bGUgdGFibGUgLT4gTmV3IGNvbHVtbiBkZWZpbml0aW9ucycsIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKTsgXG4gICAgICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBidWlsZCB0YWJsZScsIGVycikpO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5zaG93VGFibGUgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgYnVpbGRIZWFkZXJzKCkge1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGF3YWl0IHRoaXMuc29ydCgpO1xuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgIGNvbnN0IHRtcCA6IGFueSA9IFtdO1xuICAgICAgZm9yIChsZXQgayBvZiB0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgdG1wLnB1c2goay5rZXkpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gWy4uLnRtcF07XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ01vZHVsZSBUYWJsZSBOZXcgVXBkYXRlIENvbHVtbiBEZWZpbml0aW9uJywgIHRoaXMuY29sdW1uc1RvRGlzcGxheSk7XG4gIH1cblxuICBnZW5lcmF0ZUNsYXNzKENsYXNzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IE15Q2xhc3M6IHN0cmluZ1tdID0gWydkZWZhdWx0LXRhYmxlLWNsYXNzJ107XG4gICAgZm9yIChsZXQgYyBvZiBDbGFzcykge1xuICAgICAgaWYgKGMgJiYgYyAhPT0gJycpIHtcbiAgICAgICAgTXlDbGFzcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTXlDbGFzcztcbiAgfVxuXG4gIGFzeW5jIHNvcnQoKSB7XG4gICAgY29uc3QgY29tcGFyZSA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogKGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IDApKVxuICAgIH07XG4gICAgaWYgKHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKSB7XG4gICAgICByZXR1cm4gWy4uLnRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zLnNvcnQoY29tcGFyZSldO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBidWlsZExpbmsob3ZlcnJpZGU6IHN0cmluZ1tdLCBlbGVtZW50KSB7XG4gICAgaWYgKG92ZXJyaWRlLmxlbmd0aCA+PSAyKSB7XG4gICAgICBsZXQgYmFzZVBhdGg6IHN0cmluZyA9IG92ZXJyaWRlWzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvdmVycmlkZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBiYXNlUGF0aCArPSAnLycgKyBlbGVtZW50W292ZXJyaWRlW2ldXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlUGF0aDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgSm9pbihlbGVtOiBhbnksIG92ZXJyaWRlOiBzdHJpbmdbXSwgam9pbktleTogc3RyaW5nID0gJ1xcbicpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IHggaW4gZWxlbSkge1xuICAgICAgaWYgKG92ZXJyaWRlLmluZGV4T2YoeCkgPiAtMSkge1xuICAgICAgICB2YWx1ZS5wdXNoKGVsZW1beF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWUuam9pbihqb2luS2V5KVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhLmZpbHRlcih7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleHBhbmRTaG93KHRlbXBsYXRlOiBzdHJpbmcpIHtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICgodGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPiAxIHx8IHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID09PSAwKVxuICAgICAgJiYgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPCAyMDApIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgIHRoaXMuZGF0YS5maWx0ZXIodGhpcy5pbnB1dFNlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxufVxuXG5leHBvcnQge1xuICBDb3JlTWF0VGFibGUsXG4gIEZpbHRlckRhdGVJbnRlcmZhY2UsXG4gIENvcmVNYXRUYWJsZUludGVyZmFjZSxcbiAgUGFnZSxcbiAgUGFnZVJlcXVlc3QsXG4gIFNvcnQsXG4gIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsXG4gIENlbGxzQ29tcG9uZW50TGlzdCxcbiAgVGFibGVDb21wb25lbnRcbn1cbiJdfQ==