import { __decorate, __metadata, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TableComponent } from './table.component';
import { CustomerRankComponent } from "./cells-component/customer-rank/customer-rank.component";
import { DateFormatComponent } from "./cells-component/date-format/date-format.component";
import { EquipementStatusComponent } from "./cells-component/equipement-status/equipement-status.component";
import { EquipementTypeComponent } from "./cells-component/equipement-type/equipement-type.component";
import { GenderComponent } from "./cells-component/gender/gender.component";
import { IsMatIconComponent } from "./cells-component/is-mat-icon/is-mat-icon.component";
import { NameAvatarComponent } from "./cells-component/name-avatar/name-avatar.component";
import { OriginComponent } from "./cells-component/origin/origin.component";
import { PhoneDisplayComponent } from "./cells-component/phone-display/phone-display.component";
import { PngIconModule } from "./cells-component/png-icon/png-icon.module";
import { PriorityComponent } from "./cells-component/priority/priority.component";
import { YesNoComponent } from "./cells-component/yes-no/yes-no.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatBadgeModule } from "@angular/material/badge";
import { TableService } from "./table.service";
import { NgxFlagsComponent } from './cells-component/ngx-flag/ngx-flag.component';
import { ButtonLinkTextComponent } from './cells-component/button-link-text/button-link-text.component';
import { CustomCellComponent } from './cells-component/custom-cell/custom-cell.component';
var TableModule = /** @class */ (function () {
    function TableModule(parentModule) {
        if (parentModule) {
            throw new Error('TableModule is already loaded. Import it in the AppModule only');
        }
    }
    TableModule_1 = TableModule;
    TableModule.forRoot = function (config) {
        return {
            ngModule: TableModule_1,
            providers: [
                { provide: '__NgxDesignTable__', useValue: config },
                TableService
            ]
        };
    };
    var TableModule_1;
    TableModule.ctorParameters = function () { return [
        { type: TableModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    TableModule = TableModule_1 = __decorate([
        NgModule({
            declarations: [
                TableComponent,
                CustomerRankComponent,
                DateFormatComponent,
                EquipementStatusComponent,
                EquipementTypeComponent,
                GenderComponent,
                IsMatIconComponent,
                NameAvatarComponent,
                OriginComponent,
                PhoneDisplayComponent,
                PriorityComponent,
                YesNoComponent,
                NgxFlagsComponent,
                ButtonLinkTextComponent,
                CustomCellComponent
            ],
            imports: [
                PngIconModule,
                MatPaginatorModule,
                MatTableModule,
                MatSortModule,
                MatTooltipModule,
                CommonModule,
                MatIconModule,
                RouterModule,
                MatBadgeModule
            ],
            exports: [
                TableComponent,
                CustomerRankComponent,
                DateFormatComponent,
                EquipementStatusComponent,
                EquipementTypeComponent,
                GenderComponent,
                IsMatIconComponent,
                NameAvatarComponent,
                OriginComponent,
                PhoneDisplayComponent,
                PriorityComponent,
                YesNoComponent,
                PngIconModule,
                MatPaginatorModule,
                MatTableModule,
                MatSortModule,
                MatTooltipModule,
                CommonModule,
                MatIconModule,
                RouterModule,
                MatBadgeModule,
                NgxFlagsComponent
            ]
        }),
        __param(0, Optional()), __param(0, SkipSelf()),
        __metadata("design:paramtypes", [TableModule])
    ], TableModule);
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBdUQxRjtJQUNFLHFCQUFvQyxZQUEwQjtRQUM1RCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLGdFQUFnRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDO29CQU5VLFdBQVc7SUFRUixtQkFBTyxHQUFyQixVQUFzQixNQUE0QjtRQUNoRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ25ELFlBQVk7YUFDYjtTQUNGLENBQUM7SUFDSixDQUFDOzs7Z0JBZmtELFdBQVcsdUJBQWpELFFBQVEsWUFBSSxRQUFROztJQUR0QixXQUFXO1FBdER2QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osY0FBYztnQkFDZCxxQkFBcUI7Z0JBQ3JCLG1CQUFtQjtnQkFDbkIseUJBQXlCO2dCQUN6Qix1QkFBdUI7Z0JBQ3ZCLGVBQWU7Z0JBQ2Ysa0JBQWtCO2dCQUNsQixtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2YscUJBQXFCO2dCQUNyQixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2QsaUJBQWlCO2dCQUNqQix1QkFBdUI7Z0JBQ3ZCLG1CQUFtQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxhQUFhO2dCQUNiLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxhQUFhO2dCQUNiLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osY0FBYzthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGNBQWM7Z0JBQ2QscUJBQXFCO2dCQUNyQixtQkFBbUI7Z0JBQ25CLHlCQUF5QjtnQkFDekIsdUJBQXVCO2dCQUN2QixlQUFlO2dCQUNmLGtCQUFrQjtnQkFDbEIsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLHFCQUFxQjtnQkFDckIsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLGFBQWE7Z0JBQ2Isa0JBQWtCO2dCQUNsQixjQUFjO2dCQUNkLGFBQWE7Z0JBQ2IsZ0JBQWdCO2dCQUNoQixZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGlCQUFpQjthQUNsQjtTQUNGLENBQUM7UUFFYSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTt5Q0FBZ0IsV0FBVztPQURuRCxXQUFXLENBa0J2QjtJQUFELGtCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1c3RvbWVyUmFua0NvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9jdXN0b21lci1yYW5rL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhdGVGb3JtYXRDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtdHlwZS9lcXVpcGVtZW50LXR5cGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdlbmRlckNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9nZW5kZXIvZ2VuZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJc01hdEljb25Db21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvaXMtbWF0LWljb24vaXMtbWF0LWljb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hbWVBdmF0YXJDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvbmFtZS1hdmF0YXIvbmFtZS1hdmF0YXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE9yaWdpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9vcmlnaW4vb3JpZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQaG9uZURpc3BsYXlDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQbmdJY29uTW9kdWxlIH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3BuZy1pY29uL3BuZy1pY29uLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBQcmlvcml0eUNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9wcmlvcml0eS9wcmlvcml0eS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgWWVzTm9Db21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQveWVzLW5vL3llcy1uby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xyXG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xyXG5pbXBvcnQgeyBNYXRTb3J0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2VcIjtcclxuaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSBcIi4vdGFibGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEZXNpZ25UYWJsZUludGVyZmFjZSB9IGZyb20gXCIuL3NldHRpbmcvQ29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBOZ3hGbGFnc0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbkxpbmtUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1c3RvbUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9jdXN0b20tY2VsbC9jdXN0b20tY2VsbC5jb21wb25lbnQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVGFibGVDb21wb25lbnQsXHJcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXHJcbiAgICBEYXRlRm9ybWF0Q29tcG9uZW50LFxyXG4gICAgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCxcclxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxyXG4gICAgR2VuZGVyQ29tcG9uZW50LFxyXG4gICAgSXNNYXRJY29uQ29tcG9uZW50LFxyXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcclxuICAgIE9yaWdpbkNvbXBvbmVudCxcclxuICAgIFBob25lRGlzcGxheUNvbXBvbmVudCxcclxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxyXG4gICAgWWVzTm9Db21wb25lbnQsXHJcbiAgICBOZ3hGbGFnc0NvbXBvbmVudCxcclxuICAgIEJ1dHRvbkxpbmtUZXh0Q29tcG9uZW50LFxyXG4gICAgQ3VzdG9tQ2VsbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUG5nSWNvbk1vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0U29ydE1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgTWF0QmFkZ2VNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgQ3VzdG9tZXJSYW5rQ29tcG9uZW50LFxyXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcclxuICAgIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQsXHJcbiAgICBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCxcclxuICAgIEdlbmRlckNvbXBvbmVudCxcclxuICAgIElzTWF0SWNvbkNvbXBvbmVudCxcclxuICAgIE5hbWVBdmF0YXJDb21wb25lbnQsXHJcbiAgICBPcmlnaW5Db21wb25lbnQsXHJcbiAgICBQaG9uZURpc3BsYXlDb21wb25lbnQsXHJcbiAgICBQcmlvcml0eUNvbXBvbmVudCxcclxuICAgIFllc05vQ29tcG9uZW50LFxyXG4gICAgUG5nSWNvbk1vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0U29ydE1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgTWF0QmFkZ2VNb2R1bGUsXHJcbiAgICBOZ3hGbGFnc0NvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBUYWJsZU1vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1RhYmxlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEZXNpZ25UYWJsZUludGVyZmFjZSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGFibGVNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUYWJsZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiAnX19OZ3hEZXNpZ25UYWJsZV9fJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG4gICAgICAgIFRhYmxlU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19