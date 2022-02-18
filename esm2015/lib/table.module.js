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
import { NgxFlagsComponent } from './cells-component/ngx-flag/ngx-flag.component';
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
            NgxFlagsComponent
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
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDOUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFDMUcsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDcEcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQXFEbEYsSUFBYSxXQUFXLG1CQUF4QixNQUFhLFdBQVc7SUFDdEIsWUFBb0MsWUFBMEI7UUFDNUQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYixnRUFBZ0UsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBNEI7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2dCQUNqRCxZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUVGLENBQUE7O1lBakJvRCxXQUFXLHVCQUFqRCxRQUFRLFlBQUksUUFBUTs7QUFEdEIsV0FBVztJQXBEdkIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osY0FBYztZQUNkLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLHVCQUF1QjtZQUN2QixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsaUJBQWlCO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLFlBQVk7WUFDWixjQUFjO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsdUJBQXVCO1lBQ3ZCLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixxQkFBcUI7WUFDckIsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWTtZQUNaLGNBQWM7WUFDZCxpQkFBaUI7U0FDbEI7S0FDRixDQUFDO0lBRWEsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7cUNBQWdCLFdBQVc7R0FEbkQsV0FBVyxDQWtCdkI7U0FsQlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0N1c3RvbWVyUmFua0NvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2N1c3RvbWVyLXJhbmsvY3VzdG9tZXItcmFuay5jb21wb25lbnRcIjtcbmltcG9ydCB7RGF0ZUZvcm1hdENvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50XCI7XG5pbXBvcnQge0VxdWlwZW1lbnRUeXBlQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC10eXBlL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnRcIjtcbmltcG9ydCB7R2VuZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZ2VuZGVyL2dlbmRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7SXNNYXRJY29uQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvaXMtbWF0LWljb24vaXMtbWF0LWljb24uY29tcG9uZW50XCI7XG5pbXBvcnQge05hbWVBdmF0YXJDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9uYW1lLWF2YXRhci9uYW1lLWF2YXRhci5jb21wb25lbnRcIjtcbmltcG9ydCB7T3JpZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvb3JpZ2luL29yaWdpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UGhvbmVEaXNwbGF5Q29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQbmdJY29uTW9kdWxlfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcG5nLWljb24vcG5nLWljb24ubW9kdWxlXCI7XG5pbXBvcnQge1ByaW9yaXR5Q29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcHJpb3JpdHkvcHJpb3JpdHkuY29tcG9uZW50XCI7XG5pbXBvcnQge1llc05vQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQveWVzLW5vL3llcy1uby5jb21wb25lbnRcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGVcIjtcbmltcG9ydCB7TWF0U29ydE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXBcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNYXRCYWRnZU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2JhZGdlXCI7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4vdGFibGUuc2VydmljZVwiO1xuaW1wb3J0IHtEZXNpZ25UYWJsZUludGVyZmFjZX0gZnJvbSBcIi4vc2V0dGluZy9Db25maWcuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBOZ3hGbGFnc0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxuICAgIEdlbmRlckNvbXBvbmVudCxcbiAgICBJc01hdEljb25Db21wb25lbnQsXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcbiAgICBPcmlnaW5Db21wb25lbnQsXG4gICAgUGhvbmVEaXNwbGF5Q29tcG9uZW50LFxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxuICAgIFllc05vQ29tcG9uZW50LFxuICAgIE5neEZsYWdzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBQbmdJY29uTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxuICAgIEdlbmRlckNvbXBvbmVudCxcbiAgICBJc01hdEljb25Db21wb25lbnQsXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcbiAgICBPcmlnaW5Db21wb25lbnQsXG4gICAgUGhvbmVEaXNwbGF5Q29tcG9uZW50LFxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxuICAgIFllc05vQ29tcG9uZW50LFxuICAgIFBuZ0ljb25Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTmd4RmxhZ3NDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IFRhYmxlTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGFibGVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEZXNpZ25UYWJsZUludGVyZmFjZSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGFibGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRhYmxlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiAnX19OZ3hEZXNpZ25UYWJsZV9fJywgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgIFRhYmxlU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cblxufVxuIl19