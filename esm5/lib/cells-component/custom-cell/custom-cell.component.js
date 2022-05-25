import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var CustomCellComponent = /** @class */ (function () {
    function CustomCellComponent() {
    }
    CustomCellComponent.prototype.ngOnInit = function () {
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
    return CustomCellComponent;
}());
export { CustomCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2N1c3RvbS1jZWxsL2N1c3RvbS1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQ7SUFJRTtJQUFnQixDQUFDO0lBRWpCLHNDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTlE7UUFBUixLQUFLLEVBQUU7O3NEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7O3lEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTs7c0RBQWU7SUFIWixtQkFBbUI7UUFML0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixpSkFBMkM7O1NBRTVDLENBQUM7O09BQ1csbUJBQW1CLENBUy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWN1c3RvbS1jZWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbS1jZWxsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLWNlbGwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==