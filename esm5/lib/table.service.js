import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TableService = /** @class */ (function () {
    function TableService(settingConfig) {
        this.settingConfig = settingConfig;
        this.config = settingConfig;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU1qRDtJQUdFLHNCQUFpRCxhQUFrQjtRQUFsQixrQkFBYSxHQUFiLGFBQWEsQ0FBSztRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztJQUM5QixDQUFDOztnREFGWSxNQUFNLFNBQUMsb0JBQW9COzs7SUFIN0IsWUFBWTtRQUh4QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBSWEsV0FBQSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQTs7T0FIOUIsWUFBWSxDQU14Qjt1QkFaRDtDQVlDLEFBTkQsSUFNQztTQU5ZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Rlc2lnblRhYmxlSW50ZXJmYWNlfSBmcm9tIFwiLi9zZXR0aW5nL0NvbmZpZy5pbnRlcmZhY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTZXJ2aWNlIHtcbiAgcHVibGljIGNvbmZpZzogRGVzaWduVGFibGVJbnRlcmZhY2U7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnX19OZ3hEZXNpZ25UYWJsZV9fJykgcHVibGljIHNldHRpbmdDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnID0gc2V0dGluZ0NvbmZpZztcbiAgfVxufVxuIl19