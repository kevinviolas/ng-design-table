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
import { StatusComponent } from './cells-component/status/status.component';
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
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFxRDVFLElBQWEsV0FBVyxtQkFBeEIsTUFBYSxXQUFXO0lBQ3RCLFlBQW9DLFlBQTBCO1FBQzVELElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsZ0VBQWdFLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQTRCO1FBQ2hELE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDbkQsWUFBWTthQUNiO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FFRixDQUFBOztZQWpCb0QsV0FBVyx1QkFBakQsUUFBUSxZQUFJLFFBQVE7O0FBRHRCLFdBQVc7SUFuRHZCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLGNBQWM7WUFDZCxxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6Qix1QkFBdUI7WUFDdkIsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGVBQWU7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWTtZQUNaLGNBQWM7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNQLGNBQWM7WUFDZCxxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6Qix1QkFBdUI7WUFDdkIsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGFBQWE7WUFDYixZQUFZO1lBQ1osY0FBYztTQUNmO0tBQ0YsQ0FBQztJQUVhLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO3FDQUFnQixXQUFXO0dBRG5ELFdBQVcsQ0FrQnZCO1NBbEJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDdXN0b21lclJhbmtDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtc3RhdHVzL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXR5cGUvZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHZW5kZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZ2VuZGVyL2dlbmRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXNNYXRJY29uQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYW1lQXZhdGFyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L25hbWUtYXZhdGFyL25hbWUtYXZhdGFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBPcmlnaW5Db21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvb3JpZ2luL29yaWdpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGhvbmVEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3Bob25lLWRpc3BsYXkvcGhvbmUtZGlzcGxheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUG5nSWNvbk1vZHVsZSB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9wbmctaWNvbi9wbmctaWNvbi5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUHJpb3JpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcHJpb3JpdHkvcHJpb3JpdHkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFllc05vQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3llcy1uby95ZXMtbm8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcclxuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGVcIjtcclxuaW1wb3J0IHsgTWF0U29ydE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcFwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1hdEJhZGdlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2JhZGdlXCI7XHJcbmltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gXCIuL3RhYmxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGVzaWduVGFibGVJbnRlcmZhY2UgfSBmcm9tIFwiLi9zZXR0aW5nL0NvbmZpZy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgU3RhdHVzQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy1jb21wb25lbnQvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgQ3VzdG9tZXJSYW5rQ29tcG9uZW50LFxyXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcclxuICAgIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQsXHJcbiAgICBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCxcclxuICAgIEdlbmRlckNvbXBvbmVudCxcclxuICAgIElzTWF0SWNvbkNvbXBvbmVudCxcclxuICAgIE5hbWVBdmF0YXJDb21wb25lbnQsXHJcbiAgICBPcmlnaW5Db21wb25lbnQsXHJcbiAgICBQaG9uZURpc3BsYXlDb21wb25lbnQsXHJcbiAgICBQcmlvcml0eUNvbXBvbmVudCxcclxuICAgIFllc05vQ29tcG9uZW50LFxyXG4gICAgU3RhdHVzQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBQbmdJY29uTW9kdWxlLFxyXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICBNYXRTb3J0TW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBNYXRCYWRnZU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVGFibGVDb21wb25lbnQsXHJcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXHJcbiAgICBEYXRlRm9ybWF0Q29tcG9uZW50LFxyXG4gICAgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCxcclxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxyXG4gICAgR2VuZGVyQ29tcG9uZW50LFxyXG4gICAgSXNNYXRJY29uQ29tcG9uZW50LFxyXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcclxuICAgIE9yaWdpbkNvbXBvbmVudCxcclxuICAgIFBob25lRGlzcGxheUNvbXBvbmVudCxcclxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxyXG4gICAgWWVzTm9Db21wb25lbnQsXHJcbiAgICBQbmdJY29uTW9kdWxlLFxyXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICBNYXRTb3J0TW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBNYXRCYWRnZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBUYWJsZU1vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1RhYmxlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEZXNpZ25UYWJsZUludGVyZmFjZSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGFibGVNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUYWJsZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiAnX19OZ3hEZXNpZ25UYWJsZV9fJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG4gICAgICAgIFRhYmxlU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19