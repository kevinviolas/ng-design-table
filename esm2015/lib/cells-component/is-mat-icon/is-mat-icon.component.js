import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let IsMatIconComponent = class IsMatIconComponent {
    constructor() {
        this.isIcon = false;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    ngOnInit() {
        if (this.input && this.input.indexOf(('icon.')) > -1) {
            this.isIcon = true;
            this.display = this.input.split('.')[1];
        }
        else {
            this.isIcon = false;
            this.display = this.input;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], IsMatIconComponent.prototype, "input", void 0);
IsMatIconComponent = __decorate([
    Component({
        selector: 'app-is-mat-icon',
        template: "<ng-container *ngIf=\"!isIcon\">\r\n    <span >{{display}}</span>\r\n</ng-container>\r\n<ng-container  *ngIf=\"isIcon\">\r\n    <mat-icon>{{display}}</mat-icon>\r\n</ng-container>",
        styles: [":host{height:34px;display:flex;padding:auto}:host .mat-icon{display:block;fill:currentColor;text-align:center;width:24px;margin:auto;vertical-align:middle;background:no-repeat}:host i,:host mat-icon{font-size:24px;height:24px}"]
    }),
    __metadata("design:paramtypes", [])
], IsMatIconComponent);
export { IsMatIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbWF0LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBSzNCO1FBRk8sV0FBTSxHQUFhLEtBQUssQ0FBQztJQUdoQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUgsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztDQUVKLENBQUE7QUFyQlk7SUFBUixLQUFLLEVBQUU7O2lEQUFlO0FBRGQsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsK0xBQTJDOztLQUU5QyxDQUFDOztHQUNXLGtCQUFrQixDQXNCOUI7U0F0Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWlzLW1hdC1pY29uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pcy1tYXQtaWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9pcy1tYXQtaWNvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc01hdEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBpbnB1dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGRpc3BsYXk6IHN0cmluZztcclxuICAgIHB1YmxpYyBpc0ljb24gOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuaW5kZXhPZigoJ2ljb24uJykpID4gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuaW5wdXQuc3BsaXQoJy4nKVsxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmlucHV0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19