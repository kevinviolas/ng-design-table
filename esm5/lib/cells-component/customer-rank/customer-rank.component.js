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
        if (this.type) {
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
        }
        else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default';
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
            template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\r\n  <span style=\"color:black\">{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\r\n</span>\r\n",
            styles: [".gold{font-size:12px;font-weight:700;color:gold!important}.silver{font-size:12px;font-weight:700;color:silver!important}.bronze{font-weight:700;font-size:12px;color:#cd7f32!important}.default{font-weight:700;font-size:12px;color:#000!important}"]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, TableService])
    ], CustomerRankComponent);
    return CustomerRankComponent;
}());
export { CustomerRankComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pEO0lBS0UsK0JBQW9CLGtCQUFxQyxFQUFVLE9BQXFCO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hGLENBQUM7SUFFRCx3Q0FBUSxHQUFSOztRQUNFLElBQU0sTUFBTSxHQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7O2dCQUMzRCxLQUFjLElBQUEsV0FBQSxTQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtvQkFBakIsSUFBSSxDQUFDLG1CQUFBO29CQUNSLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLFNBQVMsRUFBRTt3QkFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7cUJBQ3hDO3lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO3dCQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ3JDO2lCQUNGOzs7Ozs7Ozs7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7UUFHRDs7Ozs7Ozs7Ozs7OztvREFhNEM7SUFDOUMsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Z0JBeEN1QyxpQkFBaUI7Z0JBQW1CLFlBQVk7O0lBSi9FO1FBQVIsS0FBSyxFQUFFOzt1REFBYztJQURYLHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLDZNQUE2Qzs7U0FFOUMsQ0FBQzt5Q0FNd0MsaUJBQWlCLEVBQW1CLFlBQVk7T0FMN0UscUJBQXFCLENBOENqQztJQUFELDRCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0E5Q1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLXJhbmsnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyUmFua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgcHVibGljIHR5cGVDbGFzczogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZnM6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb25maWc6IHN0cmluZ1tdID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcuY3VzdG9tZXJSYW5rIHx8IFsnZ29sZCcsICdzaWx2ZXInLCAnYnJvbnplJywgJ2RlZmF1bHQnXTtcclxuICAgIGlmICh0aGlzLnR5cGUpIHtcclxuICAgICAgdGhpcy5fdHlwZSA9ICh0aGlzLnR5cGUgfHwgJycpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpO1xyXG4gICAgICBmb3IgKGxldCBjIG9mIGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgICAgdGhpcy50eXBlID0gJ0NsYXNzaWMnLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICB0aGlzLnR5cGVDbGFzcyA9IGMudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLnR5cGVDbGFzcyA9IGMudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50eXBlID0gJ0NsYXNzaWMnLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIHRoaXMudHlwZUNsYXNzID0gJ2RlZmF1bHQnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiAgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2dvbGQnKSB7XHJcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZ29sZCdcclxuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ3NpbHZlcicpIHtcclxuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdzaWx2ZXInXHJcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdicm9uemUnKSB7XHJcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnYnJvbnplJ1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gJ0NsYXNzaWMnLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZGVmYXVsdCdcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmcy5kZXRlY3RDaGFuZ2VzKCk7Ki9cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMubmdPbkluaXQoKTtcclxuICB9XHJcbn1cclxuIl19