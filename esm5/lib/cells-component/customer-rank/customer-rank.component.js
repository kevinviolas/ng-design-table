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
            template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span style=\"color:black\">{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n",
            styles: [".gold{font-size:12px;font-weight:700;color:gold!important}.silver{font-size:12px;font-weight:700;color:silver!important}.bronze{font-weight:700;font-size:12px;color:#cd7f32!important}.default{font-weight:700;font-size:12px;color:#000!important}"]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, TableService])
    ], CustomerRankComponent);
    return CustomerRankComponent;
}());
export { CustomerRankComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pEO0lBS0UsK0JBQW9CLGtCQUFxQyxFQUFVLE9BQXFCO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hGLENBQUM7SUFFRCx3Q0FBUSxHQUFSOztRQUNFLElBQU0sTUFBTSxHQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7O2dCQUMzRCxLQUFjLElBQUEsV0FBQSxTQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtvQkFBakIsSUFBSSxDQUFDLG1CQUFBO29CQUNSLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLFNBQVMsRUFBRTt3QkFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7cUJBQ3hDO3lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO3dCQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ3JDO2lCQUNGOzs7Ozs7Ozs7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7UUFHRDs7Ozs7Ozs7Ozs7OztvREFhNEM7SUFDOUMsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Z0JBeEN1QyxpQkFBaUI7Z0JBQW1CLFlBQVk7O0lBSi9FO1FBQVIsS0FBSyxFQUFFOzt1REFBYztJQURYLHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLHVNQUE2Qzs7U0FFOUMsQ0FBQzt5Q0FNd0MsaUJBQWlCLEVBQW1CLFlBQVk7T0FMN0UscUJBQXFCLENBOENqQztJQUFELDRCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0E5Q1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1yYW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJSYW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIHB1YmxpYyB0eXBlQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZzogc3RyaW5nW10gPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5jdXN0b21lclJhbmsgfHwgWydnb2xkJywgJ3NpbHZlcicsICdicm9uemUnLCAnZGVmYXVsdCddO1xuICAgIGlmICh0aGlzLnR5cGUpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSAodGhpcy50eXBlIHx8ICcnKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcbiAgICAgIGZvciAobGV0IGMgb2YgY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgIHRoaXMudHlwZSA9ICdDbGFzc2ljJy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIHRoaXMudHlwZUNsYXNzID0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSBjLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gJ0NsYXNzaWMnLnRvVXBwZXJDYXNlKCk7XG4gICAgICB0aGlzLnR5cGVDbGFzcyA9ICdkZWZhdWx0JztcbiAgICB9XG5cblxuICAgIC8qICBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnZ29sZCcpIHtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZ29sZCdcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnc2lsdmVyJykge1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdzaWx2ZXInXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2Jyb256ZScpIHtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnYnJvbnplJ1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gJ0NsYXNzaWMnLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ2RlZmF1bHQnXG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmcy5kZXRlY3RDaGFuZ2VzKCk7Ki9cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==