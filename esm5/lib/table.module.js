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
                ButtonLinkTextComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUN4RixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxpRUFBaUUsQ0FBQztBQUMxRyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDdkYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBc0R4RztJQUNFLHFCQUFvQyxZQUEwQjtRQUM1RCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLGdFQUFnRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDO29CQU5VLFdBQVc7SUFRUixtQkFBTyxHQUFyQixVQUFzQixNQUE0QjtRQUNoRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQ2pELFlBQVk7YUFDYjtTQUNGLENBQUM7SUFDSixDQUFDOzs7Z0JBZmtELFdBQVcsdUJBQWpELFFBQVEsWUFBSSxRQUFROztJQUR0QixXQUFXO1FBckR2QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osY0FBYztnQkFDZCxxQkFBcUI7Z0JBQ3JCLG1CQUFtQjtnQkFDbkIseUJBQXlCO2dCQUN6Qix1QkFBdUI7Z0JBQ3ZCLGVBQWU7Z0JBQ2Ysa0JBQWtCO2dCQUNsQixtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2YscUJBQXFCO2dCQUNyQixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2QsaUJBQWlCO2dCQUNqQix1QkFBdUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsYUFBYTtnQkFDYixrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2QsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixZQUFZO2dCQUNaLGNBQWM7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCxjQUFjO2dCQUNkLHFCQUFxQjtnQkFDckIsbUJBQW1CO2dCQUNuQix5QkFBeUI7Z0JBQ3pCLHVCQUF1QjtnQkFDdkIsZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixxQkFBcUI7Z0JBQ3JCLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxhQUFhO2dCQUNiLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxhQUFhO2dCQUNiLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO1FBRWEsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7eUNBQWdCLFdBQVc7T0FEbkQsV0FBVyxDQWtCdkI7SUFBRCxrQkFBQztDQUFBLEFBbEJELElBa0JDO1NBbEJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtDdXN0b21lclJhbmtDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9jdXN0b21lci1yYW5rL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50XCI7XG5pbXBvcnQge0RhdGVGb3JtYXRDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9kYXRlLWZvcm1hdC9kYXRlLWZvcm1hdC5jb21wb25lbnRcIjtcbmltcG9ydCB7RXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtc3RhdHVzL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFcXVpcGVtZW50VHlwZUNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtdHlwZS9lcXVpcGVtZW50LXR5cGUuY29tcG9uZW50XCI7XG5pbXBvcnQge0dlbmRlckNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2dlbmRlci9nZW5kZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0lzTWF0SWNvbkNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYW1lQXZhdGFyQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvbmFtZS1hdmF0YXIvbmFtZS1hdmF0YXIuY29tcG9uZW50XCI7XG5pbXBvcnQge09yaWdpbkNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L29yaWdpbi9vcmlnaW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1Bob25lRGlzcGxheUNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3Bob25lLWRpc3BsYXkvcGhvbmUtZGlzcGxheS5jb21wb25lbnRcIjtcbmltcG9ydCB7UG5nSWNvbk1vZHVsZX0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3BuZy1pY29uL3BuZy1pY29uLm1vZHVsZVwiO1xuaW1wb3J0IHtQcmlvcml0eUNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtZZXNOb0NvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3llcy1uby95ZXMtbm8uY29tcG9uZW50XCI7XG5pbXBvcnQge01hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XG5pbXBvcnQge01hdFNvcnRNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwXCI7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TWF0QmFkZ2VNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9iYWRnZVwiO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7RGVzaWduVGFibGVJbnRlcmZhY2V9IGZyb20gXCIuL3NldHRpbmcvQ29uZmlnLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTmd4RmxhZ3NDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9uZ3gtZmxhZy9uZ3gtZmxhZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uTGlua1RleHRDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9idXR0b24tbGluay10ZXh0L2J1dHRvbi1saW5rLXRleHQuY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIEN1c3RvbWVyUmFua0NvbXBvbmVudCxcbiAgICBEYXRlRm9ybWF0Q29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQsXG4gICAgRXF1aXBlbWVudFR5cGVDb21wb25lbnQsXG4gICAgR2VuZGVyQ29tcG9uZW50LFxuICAgIElzTWF0SWNvbkNvbXBvbmVudCxcbiAgICBOYW1lQXZhdGFyQ29tcG9uZW50LFxuICAgIE9yaWdpbkNvbXBvbmVudCxcbiAgICBQaG9uZURpc3BsYXlDb21wb25lbnQsXG4gICAgUHJpb3JpdHlDb21wb25lbnQsXG4gICAgWWVzTm9Db21wb25lbnQsXG4gICAgTmd4RmxhZ3NDb21wb25lbnQsXG4gICAgQnV0dG9uTGlua1RleHRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFBuZ0ljb25Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIEN1c3RvbWVyUmFua0NvbXBvbmVudCxcbiAgICBEYXRlRm9ybWF0Q29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQsXG4gICAgRXF1aXBlbWVudFR5cGVDb21wb25lbnQsXG4gICAgR2VuZGVyQ29tcG9uZW50LFxuICAgIElzTWF0SWNvbkNvbXBvbmVudCxcbiAgICBOYW1lQXZhdGFyQ29tcG9uZW50LFxuICAgIE9yaWdpbkNvbXBvbmVudCxcbiAgICBQaG9uZURpc3BsYXlDb21wb25lbnQsXG4gICAgUHJpb3JpdHlDb21wb25lbnQsXG4gICAgWWVzTm9Db21wb25lbnQsXG4gICAgUG5nSWNvbk1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBOZ3hGbGFnc0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogVGFibGVNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUYWJsZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IERlc2lnblRhYmxlSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUYWJsZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdfX05neERlc2lnblRhYmxlX18nLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgICAgVGFibGVTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=