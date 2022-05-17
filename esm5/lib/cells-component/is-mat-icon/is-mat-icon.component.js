import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var IsMatIconComponent = /** @class */ (function () {
    function IsMatIconComponent() {
        this.isIcon = false;
    }
    IsMatIconComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    IsMatIconComponent.prototype.ngOnInit = function () {
        if (this.input && this.input.indexOf(('icon.')) > -1) {
            this.isIcon = true;
            this.display = this.input.split('.')[1];
        }
        else {
            this.isIcon = false;
            this.display = this.input;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IsMatIconComponent.prototype, "input", void 0);
    IsMatIconComponent = __decorate([
        Component({
            selector: 'app-is-mat-icon',
            template: "<ng-container *ngIf=\"!isIcon\">\r\n    <span >{{display}}</span>\r\n</ng-container>\r\n<ng-container  *ngIf=\"isIcon\">\r\n    <mat-icon>{{display}}</mat-icon>\r\n</ng-container>",
            styles: [":host{height:34px;display:flex;padding:auto}:host .mat-icon{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}:host i,:host mat-icon{font-size:24px;height:24px}"]
        }),
        __metadata("design:paramtypes", [])
    ], IsMatIconComponent);
    return IsMatIconComponent;
}());
export { IsMatIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbWF0LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGO0lBS0k7UUFGTyxXQUFNLEdBQWEsS0FBSyxDQUFDO0lBR2hDLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFSCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBbkJRO1FBQVIsS0FBSyxFQUFFOztxREFBZTtJQURkLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLCtMQUEyQzs7U0FFOUMsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FzQjlCO0lBQUQseUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXRCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtaXMtbWF0LWljb24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2lzLW1hdC1pY29uLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2lzLW1hdC1pY29uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIElzTWF0SWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGlucHV0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xyXG4gICAgcHVibGljIGlzSWNvbiA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5pbmRleE9mKCgnaWNvbi4nKSkgPiAtMSl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJY29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5pbnB1dC5zcGxpdCgnLicpWzFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJY29uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuaW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=