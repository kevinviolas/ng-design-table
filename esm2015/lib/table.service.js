import { __decorate, __metadata, __param } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let TableService = class TableService {
    constructor(settingConfig) {
        this.settingConfig = settingConfig;
        this.updateHeader = new EventEmitter();
        this.emptyRow = false;
        this.config = settingConfig;
    }
    setHeader(displayColumn) {
        this.displayColumn = displayColumn;
        this.updateHeader.emit(true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNL0QsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUt2QixZQUFpRCxhQUFrQjtRQUFsQixrQkFBYSxHQUFiLGFBQWEsQ0FBSztRQUY1RCxpQkFBWSxHQUEyQixJQUFJLFlBQVksRUFBVyxDQUFBO1FBQ2xFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxhQUFpQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0YsQ0FBQTs7NENBUmMsTUFBTSxTQUFDLG9CQUFvQjs7O0FBTDdCLFlBQVk7SUFIeEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQU1hLFdBQUEsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUE7O0dBTDlCLFlBQVksQ0FheEI7U0FiWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGVzaWduVGFibGVJbnRlcmZhY2V9IGZyb20gXCIuL3NldHRpbmcvQ29uZmlnLmludGVyZmFjZVwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVTZXJ2aWNlIHtcclxuICBwdWJsaWMgY29uZmlnOiBEZXNpZ25UYWJsZUludGVyZmFjZTtcclxuICBwdWJsaWMgZGlzcGxheUNvbHVtbiA6IGFueTtcclxuICBwdWJsaWMgdXBkYXRlSGVhZGVyIDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpXHJcbiAgcHVibGljIGVtcHR5Um93ID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoQEluamVjdCgnX19OZ3hEZXNpZ25UYWJsZV9fJykgcHVibGljIHNldHRpbmdDb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5jb25maWcgPSBzZXR0aW5nQ29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEhlYWRlcihkaXNwbGF5Q29sdW1uOmFueSkge1xyXG4gICAgdGhpcy5kaXNwbGF5Q29sdW1uID0gZGlzcGxheUNvbHVtbjtcclxuICAgIHRoaXMudXBkYXRlSGVhZGVyLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==