var TableModule_1;
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
import { CustomCellComponent } from './cells-component/custom-cell/custom-cell.component';
let TableModule = TableModule_1 = class TableModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('TableModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: TableModule_1,
            providers: [
                { provide: '__NgxDesignTable__', useValue: config },
                TableService
            ]
        };
    }
};
TableModule.ctorParameters = () => [
    { type: TableModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
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
            MatBadgeModule
        ]
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [TableModule])
], TableModule);
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQXFEMUYsSUFBYSxXQUFXLG1CQUF4QixNQUFhLFdBQVc7SUFDdEIsWUFBb0MsWUFBMEI7UUFDNUQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYixnRUFBZ0UsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBNEI7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNuRCxZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUVGLENBQUE7O1lBakJvRCxXQUFXLHVCQUFqRCxRQUFRLFlBQUksUUFBUTs7QUFEdEIsV0FBVztJQW5EdkIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osY0FBYztZQUNkLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLHVCQUF1QjtZQUN2QixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsbUJBQW1CO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLFlBQVk7WUFDWixjQUFjO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsdUJBQXVCO1lBQ3ZCLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWTtZQUNaLGNBQWM7U0FDZjtLQUNGLENBQUM7SUFFYSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTtxQ0FBZ0IsV0FBVztHQURuRCxXQUFXLENBa0J2QjtTQWxCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3VzdG9tZXJSYW5rQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2N1c3RvbWVyLXJhbmsvY3VzdG9tZXItcmFuay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdENvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9kYXRlLWZvcm1hdC9kYXRlLWZvcm1hdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXN0YXR1cy9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRXF1aXBlbWVudFR5cGVDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC10eXBlL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR2VuZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2dlbmRlci9nZW5kZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElzTWF0SWNvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9pcy1tYXQtaWNvbi9pcy1tYXQtaWNvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmFtZUF2YXRhckNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9uYW1lLWF2YXRhci9uYW1lLWF2YXRhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgT3JpZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L29yaWdpbi9vcmlnaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBob25lRGlzcGxheUNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9waG9uZS1kaXNwbGF5L3Bob25lLWRpc3BsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBuZ0ljb25Nb2R1bGUgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcG5nLWljb24vcG5nLWljb24ubW9kdWxlXCI7XHJcbmltcG9ydCB7IFByaW9yaXR5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBZZXNOb0NvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC95ZXMtbm8veWVzLW5vLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XHJcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXBcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9iYWRnZVwiO1xyXG5pbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi90YWJsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERlc2lnblRhYmxlSW50ZXJmYWNlIH0gZnJvbSBcIi4vc2V0dGluZy9Db25maWcuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEN1c3RvbUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9jdXN0b20tY2VsbC9jdXN0b20tY2VsbC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgQ3VzdG9tZXJSYW5rQ29tcG9uZW50LFxyXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcclxuICAgIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQsXHJcbiAgICBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCxcclxuICAgIEdlbmRlckNvbXBvbmVudCxcclxuICAgIElzTWF0SWNvbkNvbXBvbmVudCxcclxuICAgIE5hbWVBdmF0YXJDb21wb25lbnQsXHJcbiAgICBPcmlnaW5Db21wb25lbnQsXHJcbiAgICBQaG9uZURpc3BsYXlDb21wb25lbnQsXHJcbiAgICBQcmlvcml0eUNvbXBvbmVudCxcclxuICAgIFllc05vQ29tcG9uZW50LFxyXG4gICAgQ3VzdG9tQ2VsbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUG5nSWNvbk1vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0U29ydE1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgTWF0QmFkZ2VNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgQ3VzdG9tZXJSYW5rQ29tcG9uZW50LFxyXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcclxuICAgIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQsXHJcbiAgICBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCxcclxuICAgIEdlbmRlckNvbXBvbmVudCxcclxuICAgIElzTWF0SWNvbkNvbXBvbmVudCxcclxuICAgIE5hbWVBdmF0YXJDb21wb25lbnQsXHJcbiAgICBPcmlnaW5Db21wb25lbnQsXHJcbiAgICBQaG9uZURpc3BsYXlDb21wb25lbnQsXHJcbiAgICBQcmlvcml0eUNvbXBvbmVudCxcclxuICAgIFllc05vQ29tcG9uZW50LFxyXG4gICAgUG5nSWNvbk1vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0U29ydE1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgTWF0QmFkZ2VNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogVGFibGVNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdUYWJsZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogRGVzaWduVGFibGVJbnRlcmZhY2UpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRhYmxlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGFibGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogJ19fTmd4RGVzaWduVGFibGVfXycsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuICAgICAgICBUYWJsZVNlcnZpY2VcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==