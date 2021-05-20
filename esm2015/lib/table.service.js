import { __decorate, __metadata, __param } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let TableService = class TableService {
    constructor(settingConfig) {
        this.settingConfig = settingConfig;
        this.updateHeader = new EventEmitter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNL0QsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUl2QixZQUFpRCxhQUFrQjtRQUFsQixrQkFBYSxHQUFiLGFBQWEsQ0FBSztRQUQ1RCxpQkFBWSxHQUEyQixJQUFJLFlBQVksRUFBVyxDQUFBO1FBRXZFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFTSxTQUFTLENBQUMsYUFBaUI7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGLENBQUE7OzRDQVJjLE1BQU0sU0FBQyxvQkFBb0I7OztBQUo3QixZQUFZO0lBSHhCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFLYSxXQUFBLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBOztHQUo5QixZQUFZLENBWXhCO1NBWlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZXNpZ25UYWJsZUludGVyZmFjZX0gZnJvbSBcIi4vc2V0dGluZy9Db25maWcuaW50ZXJmYWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlU2VydmljZSB7XG4gIHB1YmxpYyBjb25maWc6IERlc2lnblRhYmxlSW50ZXJmYWNlO1xuICBwdWJsaWMgZGlzcGxheUNvbHVtbiA6IGFueTtcbiAgcHVibGljIHVwZGF0ZUhlYWRlciA6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKVxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05neERlc2lnblRhYmxlX18nKSBwdWJsaWMgc2V0dGluZ0NvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWcgPSBzZXR0aW5nQ29uZmlnO1xuICB9XG5cbiAgcHVibGljIHNldEhlYWRlcihkaXNwbGF5Q29sdW1uOmFueSkge1xuICAgIHRoaXMuZGlzcGxheUNvbHVtbiA9IGRpc3BsYXlDb2x1bW47XG4gICAgdGhpcy51cGRhdGVIZWFkZXIuZW1pdCh0cnVlKTtcbiAgfVxufVxuIl19