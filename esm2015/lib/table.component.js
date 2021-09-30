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
        console.log(element);
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
        template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 20px;background: transparent!important; box-shadow: none !important\">\n    <div class=\"\">\n      <!--<div class=\"col-lg-12 search-container\">\n        <mat-icon style=\"left: 16%; position: absolute; margin-top: 10px;\">search</mat-icon>\n        <input class=\"search-box\" type=\"text\" [placeholder]=\"search\" [maxLength]=\"100\" \n        [value]=\"inputSearch\"\n        (change)=\"onChange($event)\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"cancelSearch\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>-->\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\"\n         [dataSource]=\"data \" multiTemplateDataRows matSort\n         class=\"\" *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements && showTable\"\n         (matSortChange)=\"data.sortIt($event)\">\n    <ng-container [matColumnDef]=\"column.key\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort && column?.key != 'A_quitt_la_soci_t__c'\">\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"column.sort && column?.key == 'A_quitt_la_soci_t__c'\">\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n          <a style=\"color: black; text-decoration: none; cursor: pointer;\" id=\"show-hide-collab\">\n            <mat-icon *ngIf=\"column.key == 'A_quitt_la_soci_t__c'\" id=\"show-collab-icon\" style=\"display: none;\">visibility</mat-icon>\n            <mat-icon *ngIf=\"column.key == 'A_quitt_la_soci_t__c'\" id=\"hide-collab-icon\">visibility_off</mat-icon>\n          </a>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n\n      <td *ngIf=\"EmptyRow\" [attr.colspan]=\"columnsToDisplay.length\" class=\"empty-row\"></td>\n      <td class=\"row-style\" mat-cell *matCellDef=\"let element\"\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container *ngIf=\"element !== 'empty'\" [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a [matTooltip]=\"open\"\n               class=\"btn-link-text\"\n               (click)=\"callFunction.emit(element[column.key])\">\n              <!--<ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>-->\n              {{ details }}\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <!--                matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\" -->\n            <a *ngIf=\"element.new\" [matTooltip]=\"open\"\n               class=\"mat-button btn-xs\"\n               (click)=\"element.new = false\"\n               [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\"\n               [matTooltip]=\"open\"\n               class=\"mat-button btn-xs\"\n               [ngClass]=\"btnOverride == true ? 'link-btn': 'nowboard-btn'\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link text -->\n          <ng-container *ngSwitchCase=\"'button-link-text'\">\n            <a [matTooltip]=\"open\"\n               class=\"btn-link-text btn-xs\"\n               (click)=\"element.new = false\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n                {{ details }}\n            </a>\n          </ng-container>\n          <!-- icon custom-->\n          <ng-container *ngSwitchCase=\"'custom-icon'\">\n            <img *ngIf=\"element[column.key]\" [src]=\"column.align\" style=\"width: 20px; height: 20px;\">\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element['Icon']\" [iconLabel]=\"element['Priority'] || null\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n              [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n            >\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                         [src]=\"element[column.key]\"\n                         [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            {{element[column.key]}}\n          </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"element === 'empty'\">\n          <td [ngClass]=\"'empty-row'\" mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n            empty row\n          </td>\n        </ng-container>\n\n      </td>\n    </ng-container>\n\n      <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n        <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n            [@detailExpand]=\"expandedElement && element == expandedElement ? 'expanded' : 'collapsed'\"\n            style=\"height: 0\">\n          <div *ngIf=\"element['CaseNumber'] && expandedElement\">\n            <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n            </div>\n\n            <a [class.nav-expanded]=\"element == expandedElement\"\n            [routerLink]=\"['/ticket/', element['CaseNumber']]\" [title]=\"open\">\n              <img class=\"detail-view-ticket\" src=\"/assets/icons/eye.png\">\n            </a>\n          </div>\n        </td>\n      </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\"\n          [ngClass]=\"!element || element === 'empty'? 'empty-row-none': 'detail-row'\"\n          [class.expanded]=\"expandedElement == element\"\n          (click)=\"expand(element)\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\" [ngClass]=\"!row || row === 'empty'? 'empty-row': 'detail-row'\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"\">\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n          {{ noResult }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                 [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                 (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n",
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
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBa0N2RCxJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFjO0lBNEJsQixZQUFvQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBNEIsRUFDNUIsU0FBMkI7UUFKM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUEzQnRD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UixLQUFLLEVBQUU7O3dEQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTs7NENBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFOzs0Q0FBYztBQUNiO0lBQVIsS0FBSyxFQUFFOzttREFBcUI7QUFDbkI7SUFBVCxNQUFNLEVBQUU7OEJBQWUsWUFBWTtvREFBZ0M7QUFDM0Q7SUFBUixLQUFLLEVBQUU7O21EQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7Z0RBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOztvREFBc0I7QUFiMUIsY0FBYztJQVhuQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLDBqWEFBcUM7UUFFckMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBQzNFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQ3ZDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQzthQUN0RixDQUFDLENBQUM7UUFDSCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztxQ0E2QjRCLE1BQU07UUFDUCxjQUFjO1FBQ1osWUFBWTtRQUNWLGlCQUFpQjtRQUNqQixnQkFBZ0I7R0FoQzNDLGNBQWMsQ0F3TG5CO0FBRUQsT0FBTyxFQUNMLFlBQVksRUFPWixrQkFBa0IsRUFDbEIsY0FBYyxFQUNmLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZWxsc0NvbXBvbmVudExpc3R9IGZyb20gXCIuL3NldHRpbmcvQ2VsbHNDb21wb25lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7Q29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0fSBmcm9tIFwiLi9jb3JlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4vdGFibGUuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5cbmludGVyZmFjZSBkaXNwbGF5Q29sdW1uc0NvbmZpZyB7XG4gIHNpemVJY29uPzogbnVtYmVyO1xuICBkaXNwbGF5WWVzPzogYm9vbGVhbjtcbiAgZGlzcGxheU5vPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2Uge1xuICBrZXk6IHN0cmluZywgLy8gb2JqZWN0IGtleVxuICB2YWx1ZTogc3RyaW5nLCAvLyBkaXNwbGF5IGNvbHVtbiB2YWx1ZXNcbiAgcmF0aW8/OiBudW1iZXIsXG4gIG9yZGVyPzogbnVtYmVyLCAvLyBzb3J0IGNvbHVtblxuICBjbGFzcz86IHN0cmluZywgLy8gY3NzIGNsYXNzXG4gIG1vZHVsZT86IENlbGxzQ29tcG9uZW50TGlzdCxcbiAgb3ZlcnJpZGU/OiBzdHJpbmcgfCBzdHJpbmdbXSwgLy8gZm9yIGJ1aWxkaW5nIHVybCBvciBhdmF0YXIgbmFtZVxuICBkaXNwbGF5Pzogc3RyaW5nLCAvLyBmb3JjZSBkaXNwbGF5aW5nIG90aGVyIHN0dWZmIHRoYW4gZWxlbWVudFtmb2N1c11cbiAgYWxpZ24/OiBzdHJpbmcsIC8vIGNlbGwgY29udGVudCBhbGlnbiAnbGVmdCBjZW50ZXIgcmlnaHQnXG4gIHNvcnQ/OiBib29sZWFuLCAvLyAnc29ydGFibGUgY29sdW1uJ1xuICBjb25maWc/OiBkaXNwbGF5Q29sdW1uc0NvbmZpZ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZGVzaWduLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2RldGFpbEV4cGFuZCcsIFtcbiAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe2hlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnLCBkaXNwbGF5OiAnbm9uZSd9KSksXG4gICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoe2hlaWdodDogJyonfSkpLFxuICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gIF0pXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdNYXRQYWdpbmF0b3JDdXJyZW50Jywge3N0YXRpYzogdHJ1ZX0pIHBhZ2luYXRvckN1cnJlbnQ6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7c3RhdGljOiB0cnVlfSkgc29ydEN1cnJlbnQ6IE1hdFNvcnQ7XG5cbiAgQElucHV0KCkgY29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcbiAgQElucHV0KCkgZGlzcGxheURldGFpbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNwbGF5Q29tcG9uZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IENvcmVNYXRUYWJsZUludGVyZmFjZTtcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICBASW5wdXQoKSBidG5PdmVycmlkZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2FsbEZ1bmN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBpbnB1dFNlYXJjaCA9ICcnO1xuICBASW5wdXQoKSBFbXB0eVJvdyA9IGZhbHNlO1xuICBASW5wdXQoKSBibG9ja0RldGFpbHMgPSBmYWxzZTtcbiAgXG4gIHB1YmxpYyBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXTtcbiAgcHVibGljIGZpbHRlcjogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogYW55O1xuICBwdWJsaWMgZXhwYW5kZWRFbGVtZW50OiBhbnk7XG4gIHB1YmxpYyBpbmRleCA9IDA7XG4gIHByaXZhdGUgUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zIDogW2Rpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VdO1xuICBwdWJsaWMgb3BlbiA9ICcnO1xuICBwdWJsaWMgc2VhcmNoID0gJyc7XG4gIHB1YmxpYyBjYW5jZWxTZWFyY2ggPSAnJztcbiAgcHVibGljIG5vUmVzdWx0ID0gJyc7XG4gIHB1YmxpYyBkZXRhaWxzID0gJyc7XG4gIHB1YmxpYyBzaG93VGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGV0ZWN0b3IgOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgfVxuXG4gIGV4cGFuZChlbGVtZW50KSB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgaWYgKHRoaXMuYmxvY2tEZXRhaWxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHRoaXMuZXhwYW5kZWRFbGVtZW50ID09PSBlbGVtZW50KSB7IFxuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBudWxsOyBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZXhwYW5kZWRFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5lbXB0eVJvdyA9IHRoaXMuRW1wdHlSb3c7XG4gICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdTRUFSQ0gnKTtcbiAgICB0aGlzLmNhbmNlbFNlYXJjaCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdDQU5DRUxfU0VBUkNIJyk7XG4gICAgdGhpcy5ub1Jlc3VsdCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOT19SRVNVTFQnKTtcbiAgICB0aGlzLmRldGFpbHMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuXG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvckN1cnJlbnQ7XG4gICAgICB0aGlzLmRhdGEuc29ydCA9IHRoaXMuc29ydEN1cnJlbnQ7XG5cbiAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLnN1YnNjcmliZSgobmV3cGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChuZXdwYWdlID4gMCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbmV3cGFnZSArIDF9LFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdwYWdlID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBudWxsfSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJywgLy8gcmVtb3ZlIHRvIHJlcGxhY2UgYWxsIHF1ZXJ5IHBhcmFtcyBieSBwcm92aWRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEucGFnaW5hdG9yICYmIHRoaXMuZGF0YS5wYWdpbmF0b3IucGFnZUluZGV4ICE9PSBuZXdwYWdlKSB7XG4gICAgICAgICAgdGhpcy5kYXRhLnBhZ2luYXRvci5wYWdlSW5kZXggPSBuZXdwYWdlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicGFnZVwiXTtcbiAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlOiBudW1iZXIgPSBOdW1iZXIocGFnZSkgLSAxO1xuICAgICAgICB0aGlzLmRhdGEuc3RhcnRXaXRoID0gY3VycmVudFBhZ2U7XG4gICAgICAgIHRoaXMuZGF0YS5mZXRjaChjdXJyZW50UGFnZSk7XG4gICAgICAgIHRoaXMuZGF0YS5udW1iZXIgPSBjdXJyZW50UGFnZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zID0gdGhpcy5jb2x1bW5EZWZpbml0aW9ucztcbiAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcbiAgICAgIHRoaXMuc2VydmljZS51cGRhdGVIZWFkZXIuc3Vic2NyaWJlKChzdGF0dXM6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICB0aGlzLlByaXZhdGVDb2x1bW5EZWZpbml0aW9ucyA9IHRoaXMuc2VydmljZS5kaXNwbGF5Q29sdW1uO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdNb2R1bGUgdGFibGUgLT4gTmV3IGNvbHVtbiBkZWZpbml0aW9ucycsIHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKTsgXG4gICAgICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvciBidWlsZCB0YWJsZScsIGVycikpO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5zaG93VGFibGUgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgYnVpbGRIZWFkZXJzKCkge1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGF3YWl0IHRoaXMuc29ydCgpO1xuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgIGNvbnN0IHRtcCA6IGFueSA9IFtdO1xuICAgICAgZm9yIChsZXQgayBvZiB0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgdG1wLnB1c2goay5rZXkpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gWy4uLnRtcF07XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ01vZHVsZSBUYWJsZSBOZXcgVXBkYXRlIENvbHVtbiBEZWZpbml0aW9uJywgIHRoaXMuY29sdW1uc1RvRGlzcGxheSk7XG4gIH1cblxuICBnZW5lcmF0ZUNsYXNzKENsYXNzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IE15Q2xhc3M6IHN0cmluZ1tdID0gWydkZWZhdWx0LXRhYmxlLWNsYXNzJ107XG4gICAgZm9yIChsZXQgYyBvZiBDbGFzcykge1xuICAgICAgaWYgKGMgJiYgYyAhPT0gJycpIHtcbiAgICAgICAgTXlDbGFzcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTXlDbGFzcztcbiAgfVxuXG4gIGFzeW5jIHNvcnQoKSB7XG4gICAgY29uc3QgY29tcGFyZSA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogKGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IDApKVxuICAgIH07XG4gICAgaWYgKHRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zKSB7XG4gICAgICByZXR1cm4gWy4uLnRoaXMuUHJpdmF0ZUNvbHVtbkRlZmluaXRpb25zLnNvcnQoY29tcGFyZSldO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBidWlsZExpbmsob3ZlcnJpZGU6IHN0cmluZ1tdLCBlbGVtZW50KSB7XG4gICAgaWYgKG92ZXJyaWRlLmxlbmd0aCA+PSAyKSB7XG4gICAgICBsZXQgYmFzZVBhdGg6IHN0cmluZyA9IG92ZXJyaWRlWzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvdmVycmlkZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBiYXNlUGF0aCArPSAnLycgKyBlbGVtZW50W292ZXJyaWRlW2ldXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlUGF0aDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgSm9pbihlbGVtOiBhbnksIG92ZXJyaWRlOiBzdHJpbmdbXSwgam9pbktleTogc3RyaW5nID0gJ1xcbicpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IHggaW4gZWxlbSkge1xuICAgICAgaWYgKG92ZXJyaWRlLmluZGV4T2YoeCkgPiAtMSkge1xuICAgICAgICB2YWx1ZS5wdXNoKGVsZW1beF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWUuam9pbihqb2luS2V5KVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhLmZpbHRlcih7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleHBhbmRTaG93KHRlbXBsYXRlOiBzdHJpbmcpIHtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICgodGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPiAxIHx8IHRoaXMuaW5wdXRTZWFyY2gubGVuZ3RoID09PSAwKVxuICAgICAgJiYgdGhpcy5pbnB1dFNlYXJjaC5sZW5ndGggPCAyMDApIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgIHRoaXMuZGF0YS5maWx0ZXIodGhpcy5pbnB1dFNlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxufVxuXG5leHBvcnQge1xuICBDb3JlTWF0VGFibGUsXG4gIEZpbHRlckRhdGVJbnRlcmZhY2UsXG4gIENvcmVNYXRUYWJsZUludGVyZmFjZSxcbiAgUGFnZSxcbiAgUGFnZVJlcXVlc3QsXG4gIFNvcnQsXG4gIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsXG4gIENlbGxzQ29tcG9uZW50TGlzdCxcbiAgVGFibGVDb21wb25lbnRcbn1cbiJdfQ==