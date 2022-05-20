import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let CustomCellComponent = class CustomCellComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomCellComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomCellComponent.prototype, "subTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomCellComponent.prototype, "class", void 0);
CustomCellComponent = __decorate([
    Component({
        selector: 'lib-custom-cell',
        template: "<div class=\"custom-cell\" [class]=\"class\">\n    <span>{{title}}</span>\n    <span *ngIf=\"!!subTitle\">{{subTitle}}</span>\n</div>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], CustomCellComponent);
export { CustomCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2N1c3RvbS1jZWxsL2N1c3RvbS1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFJOUIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7Q0FFRixDQUFBO0FBUlU7SUFBUixLQUFLLEVBQUU7O2tEQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7O3FEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7a0RBQWU7QUFIWixtQkFBbUI7SUFML0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixpSkFBMkM7O0tBRTVDLENBQUM7O0dBQ1csbUJBQW1CLENBUy9CO1NBVFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jdXN0b20tY2VsbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20tY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbS1jZWxsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21DZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3ViVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=