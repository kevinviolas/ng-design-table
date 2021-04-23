import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
let CustomerRankComponent = class CustomerRankComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
    }
    ngOnInit() {
        const config = this.service.settingConfig.customerRank || ['gold', 'silver', 'bronze', 'default'];
        this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
        for (let c of config) {
            if (this._type.toLocaleLowerCase() === 'default') {
                this.type = 'Classic'.toUpperCase();
                this.typeClass = c.toLocaleLowerCase();
            }
            else if (this._type.toLocaleLowerCase() === c.toLocaleLowerCase()) {
                this.typeClass = c.toLocaleLowerCase();
                this.type = this.type.toUpperCase();
            }
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
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
CustomerRankComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TableService }
];
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
export { CustomerRankComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBS2hDLFlBQW9CLGtCQUFxQyxFQUFVLE9BQXFCO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hGLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxNQUFNLEdBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRCxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxTQUFTLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ3hDO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO2dCQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDckM7U0FDRjtRQUNEOzs7Ozs7Ozs7Ozs7O29EQWE0QztJQUM5QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0YsQ0FBQTs7WUFsQ3lDLGlCQUFpQjtZQUFtQixZQUFZOztBQUovRTtJQUFSLEtBQUssRUFBRTs7bURBQWM7QUFEWCxxQkFBcUI7SUFMakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qix1TUFBNkM7O0tBRTlDLENBQUM7cUNBTXdDLGlCQUFpQixFQUFtQixZQUFZO0dBTDdFLHFCQUFxQixDQXVDakM7U0F2Q1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1yYW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJSYW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIHB1YmxpYyB0eXBlQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZzogc3RyaW5nW10gPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5jdXN0b21lclJhbmsgfHwgWydnb2xkJywgJ3NpbHZlcicsICdicm9uemUnLCAnZGVmYXVsdCddO1xuICAgIHRoaXMuX3R5cGUgPSAodGhpcy50eXBlIHx8ICcnKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcbiAgICBmb3IgKGxldCBjIG9mIGNvbmZpZykge1xuICAgICAgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdDbGFzc2ljJy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9IGMudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBjLnRvTG9jYWxlTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSBjLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiAgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2dvbGQnKSB7XG4gICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ2dvbGQnXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ3NpbHZlcicpIHtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnc2lsdmVyJ1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdicm9uemUnKSB7XG4gICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ2Jyb256ZSdcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdDbGFzc2ljJy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdkZWZhdWx0J1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZnMuZGV0ZWN0Q2hhbmdlcygpOyovXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG59XG4iXX0=