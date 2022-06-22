import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '../../translate.service';
let ButtonLinkTextComponent = class ButtonLinkTextComponent {
    constructor(translate) {
        this.translate = translate;
        this.text = '';
        this.class = '';
        this.id = '';
        this.modal = '';
        this.callHandler = new EventEmitter();
        this.open = '';
    }
    ngOnInit() {
        this.open = this.translate.translate(this.lang, 'OPEN');
        if (this.text == 'Action') {
            this.text = this.translate.translate(this.lang, 'DETAILS');
        }
        if (this.modal !== '') {
            this.routerLink = '';
        }
    }
    action() {
        var _a, _b;
        this.callHandler.emit({
            modal: this.modal,
            id: this.id,
            caseNumber: (_a = this.element) === null || _a === void 0 ? void 0 : _a.CaseNumber,
            Vote: (_b = this.element) === null || _b === void 0 ? void 0 : _b.Vote
        });
    }
};
ButtonLinkTextComponent.ctorParameters = () => [
    { type: TranslateService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonLinkTextComponent.prototype, "lang", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonLinkTextComponent.prototype, "routerLink", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonLinkTextComponent.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonLinkTextComponent.prototype, "class", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonLinkTextComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonLinkTextComponent.prototype, "modal", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonLinkTextComponent.prototype, "element", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ButtonLinkTextComponent.prototype, "callHandler", void 0);
ButtonLinkTextComponent = __decorate([
    Component({
        selector: 'button-link-text',
        template: "<a [matTooltip]=\"open\"\r\n    [ngClass]=\"class\"\r\n    class=\"btn-link-text btn-xs\"\r\n    [routerLink]=\"routerLink\"\r\n    [id]=\"id\"\r\n    (click)=\"action()\"\r\n>\r\n    {{ text }}\r\n</a>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TranslateService])
], ButtonLinkTextComponent);
export { ButtonLinkTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU8zRCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQVlsQyxZQUNVLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBVjVCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTVELFNBQUksR0FBRyxFQUFFLENBQUM7SUFJYixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsTUFBTTs7UUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkI7WUFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsVUFBVSxRQUFFLElBQUksQ0FBQyxPQUFPLDBDQUFFLFVBQVU7WUFDcEMsSUFBSSxRQUFFLElBQUksQ0FBQyxPQUFPLDBDQUFFLElBQUk7U0FDekIsQ0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBekJzQixnQkFBZ0I7O0FBWjVCO0lBQVIsS0FBSyxFQUFFOztxREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFOzsyREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7O3FEQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7O3NEQUFZO0FBQ1g7SUFBUixLQUFLLEVBQUU7O21EQUFTO0FBQ1I7SUFBUixLQUFLLEVBQUU7O3NEQUFZO0FBQ1g7SUFBUixLQUFLLEVBQUU7O3dEQUFjO0FBQ1o7SUFBVCxNQUFNLEVBQUU7OEJBQWMsWUFBWTs0REFBZ0M7QUFSeEQsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsc05BQWdEOztLQUVqRCxDQUFDO3FDQWNxQixnQkFBZ0I7R0FiMUIsdUJBQXVCLENBc0NuQztTQXRDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90cmFuc2xhdGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2J1dHRvbi1saW5rLXRleHQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uTGlua1RleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcclxuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIGNsYXNzID0gJyc7XHJcbiAgQElucHV0KCkgaWQgPSAnJztcclxuICBASW5wdXQoKSBtb2RhbCA9ICcnO1xyXG4gIEBJbnB1dCgpIGVsZW1lbnQ6IGFueTtcclxuICBAT3V0cHV0KCkgY2FsbEhhbmRsZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyBvcGVuID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xyXG5cclxuICAgIGlmICh0aGlzLnRleHQgPT0gJ0FjdGlvbicpIHtcclxuICAgICAgdGhpcy50ZXh0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0RFVEFJTFMnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tb2RhbCAhPT0gJycpIHtcclxuICAgICAgdGhpcy5yb3V0ZXJMaW5rID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNhbGxIYW5kbGVyLmVtaXQoXHJcbiAgICAgIHtcclxuICAgICAgICBtb2RhbDogdGhpcy5tb2RhbCxcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBjYXNlTnVtYmVyOiB0aGlzLmVsZW1lbnQ/LkNhc2VOdW1iZXIsXHJcbiAgICAgICAgVm90ZTogdGhpcy5lbGVtZW50Py5Wb3RlXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==