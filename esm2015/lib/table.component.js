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
            const page = this.route.snapshot.queryParams["page"];
            if (page) {
                this.data.number = Number(page);
            }
            this.data.pageNumber.subscribe((newpage) => {
                if (newpage > 0) {
                    this.router.navigate([], {
                        relativeTo: this.route,
                        queryParams: { page: newpage },
                        queryParamsHandling: 'merge',
                    });
                }
            });
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
        template: "<div class=\"table-wrapper\">\n  <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n    <div class=\" elevation-z1\">\n      <div class=\"col-lg-12 search-container\">\n        <input class=\"search-box\" type=\"text\" placeholder=\"Recherche\" [maxLength]=\"100\"\n               (input)=\"((($event.target.value.length > 1 || $event.target.value.length === 0)\n                        && $event.target.value.length < 200)\n                                       ? data.filter($event) : null)\"\n               #filterOngoing>\n        <a class=\"close-search\" *ngIf=\"filterOngoing.value\"\n           [matTooltip]=\"'Annuler la recherche'\"\n           (click)=\"reset() && filterOngoing.value = ''\">\n          <img [src]=\"'/assets/icons/search_off-24px.svg'\">\n        </a>\n      </div>\n    </div>\n  </div>\n  <!-- Table -->\n  <table mat-table #table=\"matSort\"\n         [dataSource]=\"data \" multiTemplateDataRows matSort\n         class=\"mat-elevation-z8\" *ngIf=\"displayedColumns && columnsToDisplay && data.totalElements\"\n         (matSortChange)=\"data.sortIt($event)\">\n    <ng-container matColumnDef=\"{{column.key}}\" *ngFor=\"let column of displayedColumns\">\n      <ng-container *ngIf=\"column.sort\">\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\"\n            mat-sort-header>\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <ng-container *ngIf=\"!column.sort\">\n        <!-- Ajouter fonction generate Class -->\n        <th mat-header-cell *matHeaderCellDef\n            [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : 'text-align-left'])\">\n          <app-is-mat-icon [input]=\"column.value\"></app-is-mat-icon>\n        </th>\n      </ng-container>\n      <td mat-cell *matCellDef=\"let element\"\n          [class]=\"generateClass([column.class, column.align ? 'text-align-'+column.align : ''])\">\n        <ng-container [ngSwitch]=\"column.module\">\n          <!-- Button click -->\n          <ng-container *ngSwitchCase=\"'button-click'\">\n            <a matTooltip=\"Ouvrir\"\n               class=\"mat-button nowboard-btn btn-xs\"\n               (click)=\"callFunction.emit(element[column.key])\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <!-- Button link -->\n          <ng-container *ngSwitchCase=\"'button-link'\">\n            <a *ngIf=\"element.new\" matTooltip=\"Ouvrir\"\n               class=\"mat-button nowboard-btn btn-xs\"\n               (click)=\"element.new = false\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\"\n               matBadge=\"*\" matBadgePosition=\"before\"\n               matBadgeColor=\"accent\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n            <a *ngIf=\"!element.new\"\n               matTooltip=\"Ouvrir\"\n               class=\"mat-button nowboard-btn btn-xs\"\n               routerLink=\"{{column.override ? buildLink(column.override, element) : element[column.key]}}\">\n              <ng-container *ngIf=\"column.display\">\n                <app-is-mat-icon class=\"is-mat-icon-cell\" [input]=\"column.display\"></app-is-mat-icon>\n              </ng-container>\n              <ng-container *ngIf=\"!column.display\">\n                {{element[column.key]}}\n              </ng-container>\n            </a>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'it-category'\">\n            <app-equipement-type [name]=\"element[column.key]\" [type]=\"element[column.override]\"></app-equipement-type>\n          </ng-container>\n          <!-- icon it status -->\n          <ng-container *ngSwitchCase=\"'it-status'\">\n            <app-equipement-status [type]=\"element[column.key]\"></app-equipement-status>\n          </ng-container>\n          <!-- icon customer rank -->\n          <ng-container *ngSwitchCase=\"'customer-rank'\">\n            <app-customer-rank [type]=\"element[column.key]\"></app-customer-rank>\n          </ng-container>\n          <!-- icon priority-->\n          <ng-container *ngSwitchCase=\"'priority'\">\n            <icon-priority [icon]=\"element[column.key]\"></icon-priority>\n          </ng-container>\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'gender-avatar'\">\n            <app-gender [type]=\"element[column.key]\"></app-gender>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'phone-display'\">\n            <app-phone-display [number]=\"element[column.key]\"></app-phone-display>\n          </ng-container>\n\n          <!-- icon gender avatar-->\n          <ng-container *ngSwitchCase=\"'yes-no-display'\">\n            <app-yes-nox\n              *ngIf=\"column.config && (column.config.displayNo !== undefined && column.config.displayYes !== undefined)\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\"\n              [displayNo]=\"column.config.displayYes\" [displayYes]=\"column.config.displayNo\"\n            >\n            </app-yes-nox>\n            <app-yes-nox\n              *ngIf=\"(!column.config || (column.config && !(column.config.displayNo || column.config.displayYes)))\"\n              [valid]=\"element[column.key]\" [size]=\"column.config?.sizeIcon\">\n            </app-yes-nox>\n          </ng-container>\n          <!-- icon origin-->\n          <ng-container *ngSwitchCase=\"'origin'\">\n            <icon-origin [icon]=\"element[column.key]\"></icon-origin>\n          </ng-container>\n          <!-- icon name avatar-->\n          <ng-container *ngSwitchCase=\"'name-avatar'\">\n            <name-avatar matTooltip=\"{{Join(element, column.override)}}\"\n                         [src]=\"element[column.key]\"\n                         [matTooltipClass]=\"'my-tooltip'\">\n            </name-avatar>\n          </ng-container>\n          <!-- date format -->\n          <ng-container *ngSwitchCase=\"'date-format'\">\n            <date-format style=\"padding-right: 10px\" [date]=\"element[column.key]\"></date-format>\n          </ng-container>\n          <!-- count rows -->\n          <ng-container *ngSwitchCase=\"'count-row'\">\n                       <span style=\"padding-left: 14px\">\n                           {{(element[column.key] && element[column.key].length ? element[column.key].length : '-')}}\n                       </span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            {{element[column.key]}}\n          </ng-container>\n        </ng-container>\n\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"expandedDetailX\" *ngIf=\"displayDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\"\n          [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\"\n          style=\"border-bottom:transparent!important;height: 0\">\n        <div class=\"element-detail\" [innerHTML]=\"element.expanded\">\n        </div>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <ng-container *ngIf=\"displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\"\n          [class.expanded]=\"expandedElement == element\"\n          (click)=\"expandedElement === element? expandedElement = null : expandedElement = element\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetailX']\" class=\"detail-row\">\n\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!displayDetail\">\n      <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n          class=\"element-row\">\n      </tr>\n    </ng-container>\n  </table>\n  <ng-container *ngIf=\"data.totalElements === 0\">\n    <div class=\"row\" style=\"height: 84px;background: transparent!important;\">\n      <div class=\"mat-elevation-z8\">\n        <div class=\"col-lg-12 search-container\">\n          Aucun r\u00E9sultat correspondant\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <mat-paginator #MatPaginatorCurrent *ngIf=\"data && data.totalElements > 0\" [length]=\"data.totalElements\"\n                 [pageSize]=\"data.size\" [pageIndex]=\"data.number\" [hidePageSize]=\"true\"\n                 (page)=\"data.fetch($event.pageIndex)\" showFirstLastButtons></mat-paginator>\n</div>\n",
        animations: [trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])],
        encapsulation: ViewEncapsulation.None,
        styles: [".table-wrapper table{width:100%}.table-wrapper .mat-cell{padding-left:10px}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .element-row .mat-cell{padding-right:5px}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper a.mat-button{padding-top:10px}.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}.is-mat-icon-cell{width:auto;height:auto;display:auto}.is-mat-icon-cell .mat-icon{font-size:14px}.is-mat-icon-cell span,app-is-mat-icon span{margin:auto}"]
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute])
], TableComponent);
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsWUFBWSxFQUFzRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BILE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQWtDdkQsSUFBTSxjQUFjLEdBQXBCLE1BQU0sY0FBYztJQWlCbEIsWUFBb0IsTUFBYyxFQUNkLEtBQXFCO1FBRHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVpoQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUc5QixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdELFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBRzNCLFVBQUssR0FBRyxDQUFDLENBQUM7SUFLakIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JB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QVk7b0RBQWdDO0FBVGhFLGNBQWM7SUFYbkIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixzOVJBQXFDO1FBRXJDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7Z0JBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUMzRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO2dCQUN2QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDdEYsQ0FBQyxDQUFDO1FBQ0gsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7cUNBa0I0QixNQUFNO1FBQ1AsY0FBYztHQWxCckMsY0FBYyxDQStHbkI7QUFFRCxPQUFPLEVBQ0wsWUFBWSxFQU9aLGtCQUFrQixFQUNsQixjQUFjLEVBQ2YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2VsbHNDb21wb25lbnRMaXN0fSBmcm9tIFwiLi9zZXR0aW5nL0NlbGxzQ29tcG9uZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7TWF0U29ydH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge0NvcmVNYXRUYWJsZSwgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLCBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBQYWdlLCBQYWdlUmVxdWVzdCwgU29ydH0gZnJvbSBcIi4vY29yZS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5cbmludGVyZmFjZSBkaXNwbGF5Q29sdW1uc0NvbmZpZyB7XG4gIHNpemVJY29uPzogbnVtYmVyO1xuICBkaXNwbGF5WWVzPzogYm9vbGVhbjtcbiAgZGlzcGxheU5vPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2Uge1xuICBrZXk6IHN0cmluZywgLy8gb2JqZWN0IGtleVxuICB2YWx1ZTogc3RyaW5nLCAvLyBkaXNwbGF5IGNvbHVtbiB2YWx1ZXNcbiAgcmF0aW8/OiBudW1iZXIsXG4gIG9yZGVyPzogbnVtYmVyLCAvLyBzb3J0IGNvbHVtblxuICBjbGFzcz86IHN0cmluZywgLy8gY3NzIGNsYXNzXG4gIG1vZHVsZT86IENlbGxzQ29tcG9uZW50TGlzdCxcbiAgb3ZlcnJpZGU/OiBzdHJpbmcgfCBzdHJpbmdbXSwgLy8gZm9yIGJ1aWxkaW5nIHVybCBvciBhdmF0YXIgbmFtZVxuICBkaXNwbGF5Pzogc3RyaW5nLCAvLyBmb3JjZSBkaXNwbGF5aW5nIG90aGVyIHN0dWZmIHRoYW4gZWxlbWVudFtmb2N1c11cbiAgYWxpZ24/OiBzdHJpbmcsIC8vIGNlbGwgY29udGVudCBhbGlnbiAnbGVmdCBjZW50ZXIgcmlnaHQnXG4gIHNvcnQ/OiBib29sZWFuLCAvLyAnc29ydGFibGUgY29sdW1uJ1xuICBjb25maWc/OiBkaXNwbGF5Q29sdW1uc0NvbmZpZ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZGVzaWduLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2RldGFpbEV4cGFuZCcsIFtcbiAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe2hlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnLCBkaXNwbGF5OiAnbm9uZSd9KSksXG4gICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoe2hlaWdodDogJyonfSkpLFxuICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gIF0pXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdNYXRQYWdpbmF0b3JDdXJyZW50Jywge3N0YXRpYzogdHJ1ZX0pIHBhZ2luYXRvckN1cnJlbnQ6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7c3RhdGljOiB0cnVlfSkgc29ydEN1cnJlbnQ6IE1hdFNvcnQ7XG5cblxuICBASW5wdXQoKSBjb2x1bW5EZWZpbml0aW9uczogW2Rpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VdO1xuICBASW5wdXQoKSBkaXNwbGF5RGV0YWlsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc3BsYXlDb21wb25lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogQ29yZU1hdFRhYmxlSW50ZXJmYWNlO1xuICBAT3V0cHV0KCkgY2FsbEZ1bmN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwdWJsaWMgY29sdW1uc1RvRGlzcGxheTogc3RyaW5nW107XG4gIHB1YmxpYyBmaWx0ZXI6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IGFueTtcbiAgcHVibGljIGV4cGFuZGVkRWxlbWVudDogYW55O1xuICBwdWJsaWMgaW5kZXggPSAwO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGEucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3JDdXJyZW50O1xuICAgICAgdGhpcy5kYXRhLnNvcnQgPSB0aGlzLnNvcnRDdXJyZW50O1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwYWdlXCJdO1xuICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhLm51bWJlciA9IE51bWJlcihwYWdlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YS5wYWdlTnVtYmVyLnN1YnNjcmliZSgobmV3cGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChuZXdwYWdlID4gMCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7cGFnZSA6IG5ld3BhZ2V9LFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLCAvLyByZW1vdmUgdG8gcmVwbGFjZSBhbGwgcXVlcnkgcGFyYW1zIGJ5IHByb3ZpZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmJ1aWxkSGVhZGVycygpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yIGJ1aWxkIHRhYmxlJywgZXJyKSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYnVpbGRIZWFkZXJzKCkge1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGF3YWl0IHRoaXMuc29ydCgpO1xuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheSA9IFtdO1xuICAgICAgZm9yIChsZXQgayBvZiB0aGlzLmRpc3BsYXllZENvbHVtbnMpIHtcbiAgICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5LnB1c2goay5rZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQ2xhc3MoQ2xhc3M6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgTXlDbGFzczogc3RyaW5nW10gPSBbJ2RlZmF1bHQtdGFibGUtY2xhc3MnXTtcbiAgICBmb3IgKGxldCBjIG9mIENsYXNzKSB7XG4gICAgICBpZiAoYyAmJiBjICE9PSAnJykge1xuICAgICAgICBNeUNsYXNzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBNeUNsYXNzO1xuICB9XG5cbiAgYXN5bmMgc29ydCgpIHtcbiAgICBjb25zdCBjb21wYXJlID0gKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKGEub3JkZXIgPCBiLm9yZGVyID8gLTEgOiAoYS5vcmRlciA+IGIub3JkZXIgPyAxIDogMCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmNvbHVtbkRlZmluaXRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb2x1bW5EZWZpbml0aW9ucy5zb3J0KGNvbXBhcmUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBidWlsZExpbmsob3ZlcnJpZGU6IHN0cmluZ1tdLCBlbGVtZW50KSB7XG4gICAgaWYgKG92ZXJyaWRlLmxlbmd0aCA+PSAyKSB7XG4gICAgICBsZXQgYmFzZVBhdGg6IHN0cmluZyA9IG92ZXJyaWRlWzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvdmVycmlkZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBiYXNlUGF0aCArPSAnLycgKyBlbGVtZW50W292ZXJyaWRlW2ldXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlUGF0aDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgSm9pbihlbGVtOiBhbnksIG92ZXJyaWRlOiBzdHJpbmdbXSwgam9pbktleTogc3RyaW5nID0gJ1xcbicpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IHggaW4gZWxlbSkge1xuICAgICAgaWYgKG92ZXJyaWRlLmluZGV4T2YoeCkgPiAtMSkge1xuICAgICAgICB2YWx1ZS5wdXNoKGVsZW1beF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWUuam9pbihqb2luS2V5KVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhLmZpbHRlcih7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleHBhbmRTaG93KHRlbXBsYXRlOiBzdHJpbmcpIHtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7XG4gIENvcmVNYXRUYWJsZSxcbiAgRmlsdGVyRGF0ZUludGVyZmFjZSxcbiAgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLFxuICBQYWdlLFxuICBQYWdlUmVxdWVzdCxcbiAgU29ydCxcbiAgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSxcbiAgQ2VsbHNDb21wb25lbnRMaXN0LFxuICBUYWJsZUNvbXBvbmVudFxufVxuIl19