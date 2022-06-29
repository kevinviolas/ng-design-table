import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
var EquipementStatusComponent = /** @class */ (function () {
    // private params: any = {};
    function EquipementStatusComponent(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.css = {};
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        //this.params = this.service.settingConfig.equipmentStatus;
    }
    EquipementStatusComponent.prototype.ngOnInit = function () {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        var params = this.service.settingConfig.equipmentStatus; /*{
          "actif": "/assets/icons/status/actif.png",
          "oui": "/assets/icons/status/actif.png",
          "hs": "/assets/icons/status/HS.png",
          "inactif": "/assets/icons/status/inactif.png",
          "non": "/assets/icons/status/inactif.png",
          "spare": "/assets/icons/status/spare.png",
        }*/
        var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
        this.changeDetectorRefs.detectChanges();
    };
    EquipementStatusComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    EquipementStatusComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TableService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EquipementStatusComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EquipementStatusComponent.prototype, "size", void 0);
    EquipementStatusComponent = __decorate([
        Component({
            selector: 'app-equipement-status',
            template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\r\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\r\n</span>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, TableService])
    ], EquipementStatusComponent);
    return EquipementStatusComponent;
}());
export { EquipementStatusComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtc3RhdHVzL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pEO0lBTUUsNEJBQTRCO0lBRTVCLG1DQUFvQixrQkFBcUMsRUFBVSxPQUFxQjtRQUFwRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUpqRixRQUFHLEdBQVEsRUFBRSxDQUFBO1FBS2xCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0RCwyREFBMkQ7SUFDN0QsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFdEQsSUFBTSxNQUFNLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7Ozs7V0FPN0Q7UUFDSCxJQUFNLEtBQUssR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsK0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOztnQkE3QnVDLGlCQUFpQjtnQkFBbUIsWUFBWTs7SUFQL0U7UUFBUixLQUFLLEVBQUU7OzJEQUFjO0lBRWI7UUFBUixLQUFLLEVBQUU7OzJEQUF1QjtJQUhwQix5QkFBeUI7UUFMckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyw2SUFBaUQ7O1NBRWxELENBQUM7eUNBU3dDLGlCQUFpQixFQUFtQixZQUFZO09BUjdFLHlCQUF5QixDQXVDckM7SUFBRCxnQ0FBQztDQUFBLEFBdkNELElBdUNDO1NBdkNZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1lcXVpcGVtZW50LXN0YXR1cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciB8IHN0cmluZztcclxuICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxyXG5cclxuICAvLyBwcml2YXRlIHBhcmFtczogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XHJcbiAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcclxuICAgIC8vdGhpcy5wYXJhbXMgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5lcXVpcG1lbnRTdGF0dXM7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XHJcbiAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcclxuXHJcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmVxdWlwbWVudFN0YXR1czsgLyp7XHJcbiAgICAgIFwiYWN0aWZcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9hY3RpZi5wbmdcIixcclxuICAgICAgXCJvdWlcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9hY3RpZi5wbmdcIixcclxuICAgICAgXCJoc1wiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL0hTLnBuZ1wiLFxyXG4gICAgICBcImluYWN0aWZcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9pbmFjdGlmLnBuZ1wiLFxyXG4gICAgICBcIm5vblwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2luYWN0aWYucG5nXCIsXHJcbiAgICAgIFwic3BhcmVcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9zcGFyZS5wbmdcIixcclxuICAgIH0qL1xyXG4gICAgY29uc3QgY2xlYW46IHN0cmluZyA9ICh0aGlzLnR5cGUgfHwgXCJcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcclxuICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XHJcbiAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1tjbGVhbl07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbJ2RlZmF1bHQnXTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWZzLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==