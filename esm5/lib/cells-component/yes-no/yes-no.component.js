import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
var YesNoComponent = /** @class */ (function () {
    function YesNoComponent(service) {
        this.service = service;
        this.displayNo = false;
        this.displayYes = true;
        this.css = {};
    }
    YesNoComponent.prototype.ngOnInit = function () {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        var params = this.service.settingConfig.yesNo; /*{
                "true": "/assets/icons/status/actif.png",
                "false": "/assets/icons/status/incatif.png"
            }*/
        if (this.valid && this.displayYes) {
            this.icon = params["true"];
        }
        else if (this.displayNo) {
            this.icon = params["false"];
        }
    };
    YesNoComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    YesNoComponent.ctorParameters = function () { return [
        { type: TableService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], YesNoComponent.prototype, "valid", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], YesNoComponent.prototype, "displayNo", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], YesNoComponent.prototype, "displayYes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], YesNoComponent.prototype, "size", void 0);
    YesNoComponent = __decorate([
        Component({
            selector: 'app-yes-nox',
            template: "<span [style]=\"css\" >\r\n    <img [src]=\"icon\" [style]=\"css\">\r\n</span>\r\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [TableService])
    ], YesNoComponent);
    return YesNoComponent;
}());
export { YesNoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzLW5vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC95ZXMtbm8veWVzLW5vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRDtJQVFFLHdCQUFvQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBTmhDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUc3QixRQUFHLEdBQVEsRUFBRSxDQUFDO0lBR3JCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7ZUFHMUM7UUFFUCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUMzQjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM1QjtJQUNILENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7O2dCQXBCNEIsWUFBWTs7SUFQaEM7UUFBUixLQUFLLEVBQUU7O2lEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOztxREFBNEI7SUFDM0I7UUFBUixLQUFLLEVBQUU7O3NEQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTs7Z0RBQU07SUFKSCxjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLDhGQUFzQzs7U0FFdkMsQ0FBQzt5Q0FTNkIsWUFBWTtPQVI5QixjQUFjLENBOEIxQjtJQUFELHFCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E5QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXllcy1ub3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi95ZXMtbm8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3llcy1uby5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZZXNOb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSB2YWxpZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNwbGF5Tm86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNwbGF5WWVzOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzaXplO1xyXG4gIHB1YmxpYyBpY29uOiBzdHJpbmc7XHJcbiAgcHVibGljIGNzczogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XHJcbiAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcclxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLnllc05vOyAvKntcclxuICAgICAgICAgICAgXCJ0cnVlXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvYWN0aWYucG5nXCIsXHJcbiAgICAgICAgICAgIFwiZmFsc2VcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9pbmNhdGlmLnBuZ1wiXHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgaWYgKHRoaXMudmFsaWQgJiYgdGhpcy5kaXNwbGF5WWVzKSB7XHJcbiAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1tcInRydWVcIl1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5kaXNwbGF5Tm8pIHtcclxuICAgICAgdGhpcy5pY29uID0gcGFyYW1zW1wiZmFsc2VcIl1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==