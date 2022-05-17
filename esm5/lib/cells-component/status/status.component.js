import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], StatusComponent.prototype, "status", void 0);
    StatusComponent = __decorate([
        Component({
            selector: 'lib-status',
            template: "<span [class]=\"'custom-status '+status\">{{status}}</span>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());
export { StatusComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBSlE7UUFBUixLQUFLLEVBQUU7O21EQUFnQjtJQURiLGVBQWU7UUFMM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsdUVBQXNDOztTQUV2QyxDQUFDOztPQUNXLGVBQWUsQ0FPM0I7SUFBRCxzQkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0dXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGF0dXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHN0YXR1czogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==