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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBdUQxRjtJQUNFLHFCQUFvQyxZQUEwQjtRQUM1RCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLGdFQUFnRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDO29CQU5VLFdBQVc7SUFRUixtQkFBTyxHQUFyQixVQUFzQixNQUE0QjtRQUNoRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ25ELFlBQVk7YUFDYjtTQUNGLENBQUM7SUFDSixDQUFDOzs7Z0JBZmtELFdBQVcsdUJBQWpELFFBQVEsWUFBSSxRQUFROztJQUR0QixXQUFXO1FBdER2QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osY0FBYztnQkFDZCxxQkFBcUI7Z0JBQ3JCLG1CQUFtQjtnQkFDbkIseUJBQXlCO2dCQUN6Qix1QkFBdUI7Z0JBQ3ZCLGVBQWU7Z0JBQ2Ysa0JBQWtCO2dCQUNsQixtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2YscUJBQXFCO2dCQUNyQixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2QsaUJBQWlCO2dCQUNqQix1QkFBdUI7Z0JBQ3ZCLG1CQUFtQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxhQUFhO2dCQUNiLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxhQUFhO2dCQUNiLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osY0FBYzthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGNBQWM7Z0JBQ2QscUJBQXFCO2dCQUNyQixtQkFBbUI7Z0JBQ25CLHlCQUF5QjtnQkFDekIsdUJBQXVCO2dCQUN2QixlQUFlO2dCQUNmLGtCQUFrQjtnQkFDbEIsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLHFCQUFxQjtnQkFDckIsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLGFBQWE7Z0JBQ2Isa0JBQWtCO2dCQUNsQixjQUFjO2dCQUNkLGFBQWE7Z0JBQ2IsZ0JBQWdCO2dCQUNoQixZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixjQUFjO2dCQUNkLGlCQUFpQjthQUNsQjtTQUNGLENBQUM7UUFFYSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTt5Q0FBZ0IsV0FBVztPQURuRCxXQUFXLENBa0J2QjtJQUFELGtCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJSYW5rQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2N1c3RvbWVyLXJhbmsvY3VzdG9tZXItcmFuay5jb21wb25lbnRcIjtcbmltcG9ydCB7IERhdGVGb3JtYXRDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtc3RhdHVzL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXF1aXBlbWVudFR5cGVDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC10eXBlL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdlbmRlckNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9nZW5kZXIvZ2VuZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXNNYXRJY29uQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmFtZUF2YXRhckNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9uYW1lLWF2YXRhci9uYW1lLWF2YXRhci5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9yaWdpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9vcmlnaW4vb3JpZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGhvbmVEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3Bob25lLWRpc3BsYXkvcGhvbmUtZGlzcGxheS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBuZ0ljb25Nb2R1bGUgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcG5nLWljb24vcG5nLWljb24ubW9kdWxlXCI7XG5pbXBvcnQgeyBQcmlvcml0eUNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9wcmlvcml0eS9wcmlvcml0eS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFllc05vQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3llcy1uby95ZXMtbm8uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xuaW1wb3J0IHsgTWF0U29ydE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXBcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2VcIjtcbmltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERlc2lnblRhYmxlSW50ZXJmYWNlIH0gZnJvbSBcIi4vc2V0dGluZy9Db25maWcuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBOZ3hGbGFnc0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25MaW5rVGV4dENvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L2J1dHRvbi1saW5rLXRleHQvYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L2N1c3RvbS1jZWxsL2N1c3RvbS1jZWxsLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxuICAgIEdlbmRlckNvbXBvbmVudCxcbiAgICBJc01hdEljb25Db21wb25lbnQsXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcbiAgICBPcmlnaW5Db21wb25lbnQsXG4gICAgUGhvbmVEaXNwbGF5Q29tcG9uZW50LFxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxuICAgIFllc05vQ29tcG9uZW50LFxuICAgIE5neEZsYWdzQ29tcG9uZW50LFxuICAgIEJ1dHRvbkxpbmtUZXh0Q29tcG9uZW50LFxuICAgIEN1c3RvbUNlbGxDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFBuZ0ljb25Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIEN1c3RvbWVyUmFua0NvbXBvbmVudCxcbiAgICBEYXRlRm9ybWF0Q29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQsXG4gICAgRXF1aXBlbWVudFR5cGVDb21wb25lbnQsXG4gICAgR2VuZGVyQ29tcG9uZW50LFxuICAgIElzTWF0SWNvbkNvbXBvbmVudCxcbiAgICBOYW1lQXZhdGFyQ29tcG9uZW50LFxuICAgIE9yaWdpbkNvbXBvbmVudCxcbiAgICBQaG9uZURpc3BsYXlDb21wb25lbnQsXG4gICAgUHJpb3JpdHlDb21wb25lbnQsXG4gICAgWWVzTm9Db21wb25lbnQsXG4gICAgUG5nSWNvbk1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBOZ3hGbGFnc0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogVGFibGVNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUYWJsZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IERlc2lnblRhYmxlSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUYWJsZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiAnX19OZ3hEZXNpZ25UYWJsZV9fJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICBUYWJsZVNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==