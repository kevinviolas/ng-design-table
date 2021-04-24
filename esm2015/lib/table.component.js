import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellsComponentList } from "./setting/CellsComponentRegistry";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { CoreMatTable } from "./core-data-table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { ActivatedRoute, Router } from "@angular/router";
let TableComponent = class TableComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.displayDetail = false;
        this.callFunction = new EventEmitter();
        this.filter = [];
        this.index = 0;
    }
    ngOnInit() {
        if (this.data) {
            this.expandedElement = false;
            this.data.paginator = this.paginatorCurrent;
            this.data.sort = this.sortCurrent;
            this.data.pageNumber.subscribe((newpage) => {
                if (newpage > 0 && newpage !== this.data.number) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: newpage + 1 },
                        queryParamsHandling: 'merge',
                    });
                }
                else if (newpage === 0 && newpage !== this.data.number) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: null },
                        queryParamsHandling: 'merge',
                    });
                }
            });
            const page = this.route.snapshot.queryParams["page"];
            if (page) {
                const currentPage = Number(page) - 1;
                this.data.startWith = currentPage;
                this.data.paginator.pageIndex = currentPage;
                this.data.fetch(currentPage);
                this.data.number = currentPage;
            }
            this.buildHeaders().catch((err) => console.log('Error build table', err));
        }
    }
    buildHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            this.displayedColumns = yield this.sort();
            if (this.displayedColumns) {
                this.columnsToDisplay = [];
                for (let k of this.displayedColumns) {
                    this.columnsToDisplay.push(k.key);
                }
            }
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
            if (this.columnDefinitions) {
                return this.columnDefinitions.sort(compare);
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
        this.ngOnInit();
    }
};
TableComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
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
    Output(),
    __metadata("design:type", EventEmitter)
], TableComponent.prototype, "callFunction", void 0);
TableComponent = __decorate([
    Component({
        selector: 'ngx-design-table',
        template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n    <div class=\" elevation-z1\">\n      <div class=\"col-lg-12 search-container\">\n        <input class=\"search-box\" type=\"text\" placeholder=\"Recherche\" [maxLength]=\"100\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"'Annuler la recherche'\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\"\n         [dataSource]=\"data \" multiTemplateDataRows matSort\n         class=\"mat-elevation-z8\" *ngIf=\"displayedColumns && columnsToDisplay && data && data.totalElements\"\n         (matSortChange)=\"data.sortIt($event)\">\n    <ng-container matColumnDef=\"{{column.key}}\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort\">\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <td mat-cell *matCellDef=\"let element\"\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a matTooltip=\"Ouvrir\"\n               class=\"mat-button nowboard-btn btn-xs\"\n               (click)=\"callFunction.emit(element[column.key])\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <a *ngIf=\"element.new\" matTooltip=\"Ouvrir\"\n               class=\"mat-button nowboard-btn btn-xs\"\n               (click)=\"element.new = false\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\"\n               matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\"\n               matTooltip=\"Ouvrir\"\n               class=\"mat-button nowboard-btn btn-xs\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element[column.key]\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n              [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n            >\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                         [src]=\"element[column.key]\"\n                         [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            {{element[column.key]}}\n          </ng-container>\n        </ng-container>\n\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n          [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\"\n          style=\"border-bottom:transparent!important;height: 0\">\n        <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n        </div>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\"\n          [class.expanded]=\"expandedElement == element\"\n          (click)=\"expandedElement === element? expandedElement = null : expandedElement = element\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\" class=\"detail-row\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data && data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"\">\n        <div class=\"col-lg-12 search-container\" style=\"text-align: center\">\n          Aucun r\u00E9sultat correspondant\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                 [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                 (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n",
        animations: [trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])],
        encapsulation: ViewEncapsulation.None,
        styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .element-row .mat-cell{padding-right:5px}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{padding-left:2%;text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span,app-is-mat-icon span{margin:auto}"]
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute])
], TableComponent);
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsWUFBWSxFQUFzRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BILE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQWtDdkQsSUFBTSxjQUFjLEdBQXBCLE1BQU0sY0FBYztJQWlCbEIsWUFBb0IsTUFBYyxFQUNkLEtBQXFCO1FBRHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVpoQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUc5QixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdELFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBRzNCLFVBQUssR0FBRyxDQUFDLENBQUM7SUFLakIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtnQkFDakQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLEVBQUUsRUFDRjt3QkFDRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ3RCLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFDO3dCQUNoQyxtQkFBbUIsRUFBRSxPQUFPO3FCQUM3QixDQUFDLENBQUM7aUJBQ047cUJBQU0sSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLEVBQUUsRUFDRjt3QkFDRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ3RCLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUM7d0JBQ3pCLG1CQUFtQixFQUFFLE9BQU87cUJBQzdCLENBQUMsQ0FBQztpQkFDTjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sV0FBVyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQzthQUNoQztZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRjtJQUNILENBQUM7SUFFSyxZQUFZOztZQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7Z0JBQzNCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtRQUNILENBQUM7S0FBQTtJQUVELGFBQWEsQ0FBQyxLQUFlO1FBQzNCLE1BQU0sT0FBTyxHQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNsRCxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUssSUFBSTs7WUFDUixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTtnQkFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDL0QsQ0FBQyxDQUFBO1lBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3QztRQUNILENBQUM7S0FBQTtJQUVNLFNBQVMsQ0FBQyxRQUFrQixFQUFFLE9BQU87UUFDMUMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFJLFFBQVEsR0FBVyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLFFBQVEsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxRQUFRLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRU0sSUFBSSxDQUFDLElBQVMsRUFBRSxRQUFrQixFQUFFLFVBQWtCLElBQUk7UUFDL0QsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2xCLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDZixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLEVBQUU7YUFDVjtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFnQjtJQUUzQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBRUYsQ0FBQTs7WUEzRzZCLE1BQU07WUFDUCxjQUFjOztBQWpCUztJQUFqRCxTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7OEJBQW1CLFlBQVk7d0RBQUM7QUFDN0M7SUFBbkMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQzs4QkFBYyxPQUFPO21EQUFDO0FBR2hEO0lBQVIsS0FBSyxFQUFFOzt5REFBZ0Q7QUFDL0M7SUFBUixLQUFLLEVBQUU7O3FEQUFnQztBQUMvQjtJQUFSLEtBQUssRUFBRTs7d0RBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFOzs0Q0FBNkI7QUFDM0I7SUFBVCxNQUFNLEVBQUU7OEJBQWUsWUFBWTtvREFBZ0M7QUFUaEUsY0FBYztJQVhuQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLG0vUkFBcUM7UUFFckMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBQzNFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQ3ZDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQzthQUN0RixDQUFDLENBQUM7UUFDSCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztxQ0FrQjRCLE1BQU07UUFDUCxjQUFjO0dBbEJyQyxjQUFjLENBNEhuQjtBQUVELE9BQU8sRUFDTCxZQUFZLEVBT1osa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZWxsc0NvbXBvbmVudExpc3R9IGZyb20gXCIuL3NldHRpbmcvQ2VsbHNDb21wb25lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7Q29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0fSBmcm9tIFwiLi9jb3JlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuaW50ZXJmYWNlIGRpc3BsYXlDb2x1bW5zQ29uZmlnIHtcbiAgc2l6ZUljb24/OiBudW1iZXI7XG4gIGRpc3BsYXlZZXM/OiBib29sZWFuO1xuICBkaXNwbGF5Tm8/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSB7XG4gIGtleTogc3RyaW5nLCAvLyBvYmplY3Qga2V5XG4gIHZhbHVlOiBzdHJpbmcsIC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xuICByYXRpbz86IG51bWJlcixcbiAgb3JkZXI/OiBudW1iZXIsIC8vIHNvcnQgY29sdW1uXG4gIGNsYXNzPzogc3RyaW5nLCAvLyBjc3MgY2xhc3NcbiAgbW9kdWxlPzogQ2VsbHNDb21wb25lbnRMaXN0LFxuICBvdmVycmlkZT86IHN0cmluZyB8IHN0cmluZ1tdLCAvLyBmb3IgYnVpbGRpbmcgdXJsIG9yIGF2YXRhciBuYW1lXG4gIGRpc3BsYXk/OiBzdHJpbmcsIC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxuICBhbGlnbj86IHN0cmluZywgLy8gY2VsbCBjb250ZW50IGFsaWduICdsZWZ0IGNlbnRlciByaWdodCdcbiAgc29ydD86IGJvb2xlYW4sIC8vICdzb3J0YWJsZSBjb2x1bW4nXG4gIGNvbmZpZz86IGRpc3BsYXlDb2x1bW5zQ29uZmlnXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kZXNpZ24tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCcsIGRpc3BsYXk6ICdub25lJ30pKSxcbiAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSksXG4gICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgXSldLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ01hdFBhZ2luYXRvckN1cnJlbnQnLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yQ3VycmVudDogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKCd0YWJsZScsIHtzdGF0aWM6IHRydWV9KSBzb3J0Q3VycmVudDogTWF0U29ydDtcblxuXG4gIEBJbnB1dCgpIGNvbHVtbkRlZmluaXRpb25zOiBbZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZV07XG4gIEBJbnB1dCgpIGRpc3BsYXlEZXRhaWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzcGxheUNvbXBvbmVudDogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBDb3JlTWF0VGFibGVJbnRlcmZhY2U7XG4gIEBPdXRwdXQoKSBjYWxsRnVuY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHB1YmxpYyBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXTtcbiAgcHVibGljIGZpbHRlcjogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogYW55O1xuICBwdWJsaWMgZXhwYW5kZWRFbGVtZW50OiBhbnk7XG4gIHB1YmxpYyBpbmRleCA9IDA7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvckN1cnJlbnQ7XG4gICAgICB0aGlzLmRhdGEuc29ydCA9IHRoaXMuc29ydEN1cnJlbnQ7XG5cbiAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLnN1YnNjcmliZSgobmV3cGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChuZXdwYWdlID4gMCAmJiBuZXdwYWdlICE9PSB0aGlzLmRhdGEubnVtYmVyKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtwYWdlOiBuZXdwYWdlICsgMX0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld3BhZ2UgPT09IDAgJiYgbmV3cGFnZSAhPT0gdGhpcy5kYXRhLm51bWJlcikge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZTogbnVsbH0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsIC8vIHJlbW92ZSB0byByZXBsYWNlIGFsbCBxdWVyeSBwYXJhbXMgYnkgcHJvdmlkZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicGFnZVwiXTtcbiAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlOiBudW1iZXIgPSBOdW1iZXIocGFnZSkgLSAxO1xuICAgICAgICB0aGlzLmRhdGEuc3RhcnRXaXRoID0gY3VycmVudFBhZ2U7XG4gICAgICAgIHRoaXMuZGF0YS5wYWdpbmF0b3IucGFnZUluZGV4ID0gY3VycmVudFBhZ2U7XG4gICAgICAgIHRoaXMuZGF0YS5mZXRjaChjdXJyZW50UGFnZSk7XG4gICAgICAgIHRoaXMuZGF0YS5udW1iZXIgPSBjdXJyZW50UGFnZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBidWlsZEhlYWRlcnMoKSB7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gYXdhaXQgdGhpcy5zb3J0KCk7XG4gICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gW107XG4gICAgICBmb3IgKGxldCBrIG9mIHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkucHVzaChrLmtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDbGFzcyhDbGFzczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBNeUNsYXNzOiBzdHJpbmdbXSA9IFsnZGVmYXVsdC10YWJsZS1jbGFzcyddO1xuICAgIGZvciAobGV0IGMgb2YgQ2xhc3MpIHtcbiAgICAgIGlmIChjICYmIGMgIT09ICcnKSB7XG4gICAgICAgIE15Q2xhc3MucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE15Q2xhc3M7XG4gIH1cblxuICBhc3luYyBzb3J0KCkge1xuICAgIGNvbnN0IGNvbXBhcmUgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAoYS5vcmRlciA8IGIub3JkZXIgPyAtMSA6IChhLm9yZGVyID4gYi5vcmRlciA/IDEgOiAwKSlcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sdW1uRGVmaW5pdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbHVtbkRlZmluaXRpb25zLnNvcnQoY29tcGFyZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJ1aWxkTGluayhvdmVycmlkZTogc3RyaW5nW10sIGVsZW1lbnQpIHtcbiAgICBpZiAob3ZlcnJpZGUubGVuZ3RoID49IDIpIHtcbiAgICAgIGxldCBiYXNlUGF0aDogc3RyaW5nID0gb3ZlcnJpZGVbMF07XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG92ZXJyaWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJhc2VQYXRoICs9ICcvJyArIGVsZW1lbnRbb3ZlcnJpZGVbaV1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJhc2VQYXRoO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBKb2luKGVsZW06IGFueSwgb3ZlcnJpZGU6IHN0cmluZ1tdLCBqb2luS2V5OiBzdHJpbmcgPSAnXFxuJyk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChsZXQgeCBpbiBlbGVtKSB7XG4gICAgICBpZiAob3ZlcnJpZGUuaW5kZXhPZih4KSA+IC0xKSB7XG4gICAgICAgIHZhbHVlLnB1c2goZWxlbVt4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5qb2luKGpvaW5LZXkpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRhdGEuZmlsdGVyKHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGV4cGFuZFNob3codGVtcGxhdGU6IHN0cmluZykge1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG5cbn1cblxuZXhwb3J0IHtcbiAgQ29yZU1hdFRhYmxlLFxuICBGaWx0ZXJEYXRlSW50ZXJmYWNlLFxuICBDb3JlTWF0VGFibGVJbnRlcmZhY2UsXG4gIFBhZ2UsXG4gIFBhZ2VSZXF1ZXN0LFxuICBTb3J0LFxuICBkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlLFxuICBDZWxsc0NvbXBvbmVudExpc3QsXG4gIFRhYmxlQ29tcG9uZW50XG59XG4iXX0=