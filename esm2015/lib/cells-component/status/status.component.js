import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let StatusComponent = class StatusComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], StatusComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], StatusComponent.prototype, "class", void 0);
StatusComponent = __decorate([
    Component({
        selector: 'lib-status',
        template: "<span class=\"custom-status\" [class]=\"class\">{{label}}</span>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], StatusComponent);
export { StatusComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUcxQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztDQUVGLENBQUE7QUFQVTtJQUFSLEtBQUssRUFBRTs7OENBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTs7OENBQWU7QUFGWixlQUFlO0lBTDNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLDRFQUFzQzs7S0FFdkMsQ0FBQzs7R0FDVyxlQUFlLENBUTNCO1NBUlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3RhdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXR1cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0YXR1cy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=