import { __decorate, __metadata, __param } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TableService = /** @class */ (function () {
    function TableService(settingConfig) {
        this.settingConfig = settingConfig;
        this.updateHeader = new EventEmitter();
        this.emptyRow = false;
        this.config = settingConfig;
    }
    TableService.prototype.setHeader = function (displayColumn) {
        this.displayColumn = displayColumn;
        this.updateHeader.emit(true);
    };
    TableService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['__NgxDesignTable__',] }] }
    ]; };
    TableService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableService_Factory() { return new TableService(i0.ɵɵinject("__NgxDesignTable__")); }, token: TableService, providedIn: "root" });
    TableService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject('__NgxDesignTable__')),
        __metadata("design:paramtypes", [Object])
    ], TableService);
    return TableService;
}());
export { TableService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNL0Q7SUFLRSxzQkFBaUQsYUFBa0I7UUFBbEIsa0JBQWEsR0FBYixhQUFhLENBQUs7UUFGNUQsaUJBQVksR0FBMkIsSUFBSSxZQUFZLEVBQVcsQ0FBQTtRQUNsRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixhQUFpQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOztnREFQWSxNQUFNLFNBQUMsb0JBQW9COzs7SUFMN0IsWUFBWTtRQUh4QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBTWEsV0FBQSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQTs7T0FMOUIsWUFBWSxDQWF4Qjt1QkFuQkQ7Q0FtQkMsQUFiRCxJQWFDO1NBYlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Rlc2lnblRhYmxlSW50ZXJmYWNlfSBmcm9tIFwiLi9zZXR0aW5nL0NvbmZpZy5pbnRlcmZhY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlU2VydmljZSB7XHJcbiAgcHVibGljIGNvbmZpZzogRGVzaWduVGFibGVJbnRlcmZhY2U7XHJcbiAgcHVibGljIGRpc3BsYXlDb2x1bW4gOiBhbnk7XHJcbiAgcHVibGljIHVwZGF0ZUhlYWRlciA6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKVxyXG4gIHB1YmxpYyBlbXB0eVJvdyA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4RGVzaWduVGFibGVfXycpIHB1YmxpYyBzZXR0aW5nQ29uZmlnOiBhbnkpIHtcclxuICAgIHRoaXMuY29uZmlnID0gc2V0dGluZ0NvbmZpZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRIZWFkZXIoZGlzcGxheUNvbHVtbjphbnkpIHtcclxuICAgIHRoaXMuZGlzcGxheUNvbHVtbiA9IGRpc3BsYXlDb2x1bW47XHJcbiAgICB0aGlzLnVwZGF0ZUhlYWRlci5lbWl0KHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=