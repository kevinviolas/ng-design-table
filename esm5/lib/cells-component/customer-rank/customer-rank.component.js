import { __decorate, __metadata, __values } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
var CustomerRankComponent = /** @class */ (function () {
    function CustomerRankComponent(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
    }
    CustomerRankComponent.prototype.ngOnInit = function () {
        var e_1, _a;
        var config = this.service.settingConfig.customerRank || ['gold', 'silver', 'bronze', 'default'];
        this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
        try {
            for (var config_1 = __values(config), config_1_1 = config_1.next(); !config_1_1.done; config_1_1 = config_1.next()) {
                var c = config_1_1.value;
                if (this._type.toLocaleLowerCase() === 'default') {
                    this.type = 'Classic'.toUpperCase();
                    this.typeClass = c.toLocaleLowerCase();
                }
                else if (this._type.toLocaleLowerCase() === c.toLocaleLowerCase()) {
                    this.typeClass = c.toLocaleLowerCase();
                    this.type = this.type.toUpperCase();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (config_1_1 && !config_1_1.done && (_a = config_1.return)) _a.call(config_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /*  if (this._type.toLocaleLowerCase() === 'gold') {
            this.typeClass = 'gold'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'silver') {
            this.typeClass = 'silver'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'bronze') {
            this.typeClass = 'bronze'
            this.type = this.type.toUpperCase()
          } else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default'
          }
          this.changeDetectorRefs.detectChanges();*/
    };
    CustomerRankComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    CustomerRankComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TableService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CustomerRankComponent.prototype, "type", void 0);
    CustomerRankComponent = __decorate([
        Component({
            selector: 'app-customer-rank',
            template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span style=\"color:black\">{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n",
            styles: [".gold{font-size:12px;font-weight:700;color:gold!important}.silver{font-size:12px;font-weight:700;color:silver!important}.bronze{font-weight:700;font-size:12px;color:#cd7f32!important}.default{font-weight:700;font-size:12px;color:#000!important}"]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, TableService])
    ], CustomerRankComponent);
    return CustomerRankComponent;
}());
export { CustomerRankComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pEO0lBS0UsK0JBQW9CLGtCQUFxQyxFQUFVLE9BQXFCO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hGLENBQUM7SUFFRCx3Q0FBUSxHQUFSOztRQUNFLElBQU0sTUFBTSxHQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7O1lBQzNELEtBQWMsSUFBQSxXQUFBLFNBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO2dCQUFqQixJQUFJLENBQUMsbUJBQUE7Z0JBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssU0FBUyxFQUFFO29CQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDeEM7cUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEVBQUU7b0JBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDckM7YUFDRjs7Ozs7Ozs7O1FBQ0Q7Ozs7Ozs7Ozs7Ozs7b0RBYTRDO0lBQzlDLENBQUM7SUFFRCwyQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7O2dCQWpDdUMsaUJBQWlCO2dCQUFtQixZQUFZOztJQUovRTtRQUFSLEtBQUssRUFBRTs7dURBQWM7SUFEWCxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qix1TUFBNkM7O1NBRTlDLENBQUM7eUNBTXdDLGlCQUFpQixFQUFtQixZQUFZO09BTDdFLHFCQUFxQixDQXVDakM7SUFBRCw0QkFBQztDQUFBLEFBdkNELElBdUNDO1NBdkNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItcmFuaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItcmFuay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyUmFua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBwdWJsaWMgdHlwZUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmczogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWc6IHN0cmluZ1tdID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcuY3VzdG9tZXJSYW5rIHx8IFsnZ29sZCcsICdzaWx2ZXInLCAnYnJvbnplJywgJ2RlZmF1bHQnXTtcbiAgICB0aGlzLl90eXBlID0gKHRoaXMudHlwZSB8fCAnJykucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgZm9yIChsZXQgYyBvZiBjb25maWcpIHtcbiAgICAgIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICB0aGlzLnR5cGUgPSAnQ2xhc3NpYycudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSBjLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHRoaXMudHlwZUNsYXNzID0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdnb2xkJykge1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdnb2xkJ1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdzaWx2ZXInKSB7XG4gICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ3NpbHZlcidcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnYnJvbnplJykge1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdicm9uemUnXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSAnQ2xhc3NpYycudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWZzLmRldGVjdENoYW5nZXMoKTsqL1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxufVxuIl19