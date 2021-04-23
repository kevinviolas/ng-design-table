import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let TableService = class TableService {
    constructor(settingConfig) {
        this.settingConfig = settingConfig;
        this.config = settingConfig;
    }
};
TableService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['__NgxDesignTable__',] }] }
];
TableService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableService_Factory() { return new TableService(i0.ɵɵinject("__NgxDesignTable__")); }, token: TableService, providedIn: "root" });
TableService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject('__NgxDesignTable__')),
    __metadata("design:paramtypes", [Object])
], TableService);
export { TableService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU1qRCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBR3ZCLFlBQWlELGFBQWtCO1FBQWxCLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBQ2pFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBOzs0Q0FIYyxNQUFNLFNBQUMsb0JBQW9COzs7QUFIN0IsWUFBWTtJQUh4QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBSWEsV0FBQSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQTs7R0FIOUIsWUFBWSxDQU14QjtTQU5ZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Rlc2lnblRhYmxlSW50ZXJmYWNlfSBmcm9tIFwiLi9zZXR0aW5nL0NvbmZpZy5pbnRlcmZhY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTZXJ2aWNlIHtcbiAgcHVibGljIGNvbmZpZzogRGVzaWduVGFibGVJbnRlcmZhY2U7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnX19OZ3hEZXNpZ25UYWJsZV9fJykgcHVibGljIHNldHRpbmdDb25maWc6IGFueSkge1xuICAgIHRoaXMuY29uZmlnID0gc2V0dGluZ0NvbmZpZztcbiAgfVxufVxuIl19