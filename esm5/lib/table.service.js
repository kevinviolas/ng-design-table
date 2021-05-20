import { __decorate, __metadata, __param } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TableService = /** @class */ (function () {
    function TableService(settingConfig) {
        this.settingConfig = settingConfig;
        this.updateHeader = new EventEmitter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNL0Q7SUFJRSxzQkFBaUQsYUFBa0I7UUFBbEIsa0JBQWEsR0FBYixhQUFhLENBQUs7UUFENUQsaUJBQVksR0FBMkIsSUFBSSxZQUFZLEVBQVcsQ0FBQTtRQUV2RSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRU0sZ0NBQVMsR0FBaEIsVUFBaUIsYUFBaUI7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0RBUFksTUFBTSxTQUFDLG9CQUFvQjs7O0lBSjdCLFlBQVk7UUFIeEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQUthLFdBQUEsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUE7O09BSjlCLFlBQVksQ0FZeEI7dUJBbEJEO0NBa0JDLEFBWkQsSUFZQztTQVpZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVzaWduVGFibGVJbnRlcmZhY2V9IGZyb20gXCIuL3NldHRpbmcvQ29uZmlnLmludGVyZmFjZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVNlcnZpY2Uge1xuICBwdWJsaWMgY29uZmlnOiBEZXNpZ25UYWJsZUludGVyZmFjZTtcbiAgcHVibGljIGRpc3BsYXlDb2x1bW4gOiBhbnk7XG4gIHB1YmxpYyB1cGRhdGVIZWFkZXIgOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KClcbiAgY29uc3RydWN0b3IoQEluamVjdCgnX19OZ3hEZXNpZ25UYWJsZV9fJykgcHVibGljIHNldHRpbmdDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnID0gc2V0dGluZ0NvbmZpZztcbiAgfVxuXG4gIHB1YmxpYyBzZXRIZWFkZXIoZGlzcGxheUNvbHVtbjphbnkpIHtcbiAgICB0aGlzLmRpc3BsYXlDb2x1bW4gPSBkaXNwbGF5Q29sdW1uO1xuICAgIHRoaXMudXBkYXRlSGVhZGVyLmVtaXQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==