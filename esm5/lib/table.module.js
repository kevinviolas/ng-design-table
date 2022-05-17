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
import { StatusComponent } from './cells-component/status/status.component';
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
                StatusComponent
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
                MatBadgeModule
            ]
        }),
        __param(0, Optional()), __param(0, SkipSelf()),
        __metadata("design:paramtypes", [TableModule])
    ], TableModule);
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQXFENUU7SUFDRSxxQkFBb0MsWUFBMEI7UUFDNUQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYixnRUFBZ0UsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztvQkFOVSxXQUFXO0lBUVIsbUJBQU8sR0FBckIsVUFBc0IsTUFBNEI7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNuRCxZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O2dCQWZrRCxXQUFXLHVCQUFqRCxRQUFRLFlBQUksUUFBUTs7SUFEdEIsV0FBVztRQW5EdkIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGNBQWM7Z0JBQ2QscUJBQXFCO2dCQUNyQixtQkFBbUI7Z0JBQ25CLHlCQUF5QjtnQkFDekIsdUJBQXVCO2dCQUN2QixlQUFlO2dCQUNmLGtCQUFrQjtnQkFDbEIsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLHFCQUFxQjtnQkFDckIsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLGVBQWU7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsYUFBYTtnQkFDYixrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2QsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixZQUFZO2dCQUNaLGNBQWM7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCxjQUFjO2dCQUNkLHFCQUFxQjtnQkFDckIsbUJBQW1CO2dCQUNuQix5QkFBeUI7Z0JBQ3pCLHVCQUF1QjtnQkFDdkIsZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixxQkFBcUI7Z0JBQ3JCLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxhQUFhO2dCQUNiLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxhQUFhO2dCQUNiLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osY0FBYzthQUNmO1NBQ0YsQ0FBQztRQUVhLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO3lDQUFnQixXQUFXO09BRG5ELFdBQVcsQ0FrQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3VzdG9tZXJSYW5rQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2N1c3RvbWVyLXJhbmsvY3VzdG9tZXItcmFuay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdENvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9kYXRlLWZvcm1hdC9kYXRlLWZvcm1hdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXN0YXR1cy9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRXF1aXBlbWVudFR5cGVDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC10eXBlL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR2VuZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2dlbmRlci9nZW5kZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElzTWF0SWNvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9pcy1tYXQtaWNvbi9pcy1tYXQtaWNvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmFtZUF2YXRhckNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9uYW1lLWF2YXRhci9uYW1lLWF2YXRhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgT3JpZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L29yaWdpbi9vcmlnaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBob25lRGlzcGxheUNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9waG9uZS1kaXNwbGF5L3Bob25lLWRpc3BsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBuZ0ljb25Nb2R1bGUgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcG5nLWljb24vcG5nLWljb24ubW9kdWxlXCI7XHJcbmltcG9ydCB7IFByaW9yaXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBZZXNOb0NvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC95ZXMtbm8veWVzLW5vLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XHJcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXBcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9iYWRnZVwiO1xyXG5pbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi90YWJsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERlc2lnblRhYmxlSW50ZXJmYWNlIH0gZnJvbSBcIi4vc2V0dGluZy9Db25maWcuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFN0YXR1c0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L3N0YXR1cy9zdGF0dXMuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIEN1c3RvbWVyUmFua0NvbXBvbmVudCxcclxuICAgIERhdGVGb3JtYXRDb21wb25lbnQsXHJcbiAgICBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50LFxyXG4gICAgRXF1aXBlbWVudFR5cGVDb21wb25lbnQsXHJcbiAgICBHZW5kZXJDb21wb25lbnQsXHJcbiAgICBJc01hdEljb25Db21wb25lbnQsXHJcbiAgICBOYW1lQXZhdGFyQ29tcG9uZW50LFxyXG4gICAgT3JpZ2luQ29tcG9uZW50LFxyXG4gICAgUGhvbmVEaXNwbGF5Q29tcG9uZW50LFxyXG4gICAgUHJpb3JpdHlDb21wb25lbnQsXHJcbiAgICBZZXNOb0NvbXBvbmVudCxcclxuICAgIFN0YXR1c0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUG5nSWNvbk1vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0U29ydE1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgTWF0QmFkZ2VNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgQ3VzdG9tZXJSYW5rQ29tcG9uZW50LFxyXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcclxuICAgIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQsXHJcbiAgICBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCxcclxuICAgIEdlbmRlckNvbXBvbmVudCxcclxuICAgIElzTWF0SWNvbkNvbXBvbmVudCxcclxuICAgIE5hbWVBdmF0YXJDb21wb25lbnQsXHJcbiAgICBPcmlnaW5Db21wb25lbnQsXHJcbiAgICBQaG9uZURpc3BsYXlDb21wb25lbnQsXHJcbiAgICBQcmlvcml0eUNvbXBvbmVudCxcclxuICAgIFllc05vQ29tcG9uZW50LFxyXG4gICAgUG5nSWNvbk1vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0U29ydE1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgTWF0QmFkZ2VNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogVGFibGVNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdUYWJsZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogRGVzaWduVGFibGVJbnRlcmZhY2UpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRhYmxlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGFibGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogJ19fTmd4RGVzaWduVGFibGVfXycsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuICAgICAgICBUYWJsZVNlcnZpY2VcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==