import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '../../translate.service';
var ButtonLinkTextComponent = /** @class */ (function () {
    function ButtonLinkTextComponent(translate) {
        this.translate = translate;
        this.text = '';
        this.class = '';
        this.id = '';
        this.modal = '';
        this.callHandler = new EventEmitter();
        this.open = '';
    }
    ButtonLinkTextComponent.prototype.ngOnInit = function () {
        this.open = this.translate.translate(this.lang, 'OPEN');
        if (this.text == 'Action') {
            this.text = this.translate.translate(this.lang, 'DETAILS');
        }
        if (this.modal !== '') {
            this.routerLink = '';
        }
    };
    ButtonLinkTextComponent.prototype.action = function () {
        var _a, _b;
        this.callHandler.emit({
            modal: this.modal,
            id: this.id,
            caseNumber: (_a = this.element) === null || _a === void 0 ? void 0 : _a.CaseNumber,
            Vote: (_b = this.element) === null || _b === void 0 ? void 0 : _b.Vote
        });
    };
    ButtonLinkTextComponent.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
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
    return ButtonLinkTextComponent;
}());
export { ButtonLinkTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU8zRDtJQVlFLGlDQUNVLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBVjVCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTVELFNBQUksR0FBRyxFQUFFLENBQUM7SUFJYixDQUFDO0lBRUwsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsd0NBQU0sR0FBTjs7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkI7WUFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsVUFBVSxRQUFFLElBQUksQ0FBQyxPQUFPLDBDQUFFLFVBQVU7WUFDcEMsSUFBSSxRQUFFLElBQUksQ0FBQyxPQUFPLDBDQUFFLElBQUk7U0FDekIsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBeEJvQixnQkFBZ0I7O0lBWjVCO1FBQVIsS0FBSyxFQUFFOzt5REFBYztJQUNiO1FBQVIsS0FBSyxFQUFFOzsrREFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7O3lEQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7OzBEQUFZO0lBQ1g7UUFBUixLQUFLLEVBQUU7O3VEQUFTO0lBQ1I7UUFBUixLQUFLLEVBQUU7OzBEQUFZO0lBQ1g7UUFBUixLQUFLLEVBQUU7OzREQUFjO0lBQ1o7UUFBVCxNQUFNLEVBQUU7a0NBQWMsWUFBWTtnRUFBZ0M7SUFSeEQsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsc05BQWdEOztTQUVqRCxDQUFDO3lDQWNxQixnQkFBZ0I7T0FiMUIsdUJBQXVCLENBc0NuQztJQUFELDhCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0F0Q1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdidXR0b24tbGluay10ZXh0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkxpbmtUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcm91dGVyTGluazogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRleHQgPSAnJztcclxuICBASW5wdXQoKSBjbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgpIGlkID0gJyc7XHJcbiAgQElucHV0KCkgbW9kYWwgPSAnJztcclxuICBASW5wdXQoKSBlbGVtZW50OiBhbnk7XHJcbiAgQE91dHB1dCgpIGNhbGxIYW5kbGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwdWJsaWMgb3BlbiA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcclxuXHJcbiAgICBpZiAodGhpcy50ZXh0ID09ICdBY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMudGV4dCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdERVRBSUxTJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubW9kYWwgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMucm91dGVyTGluayA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWN0aW9uKCkge1xyXG4gICAgdGhpcy5jYWxsSGFuZGxlci5lbWl0KFxyXG4gICAgICB7XHJcbiAgICAgICAgbW9kYWw6IHRoaXMubW9kYWwsXHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgY2FzZU51bWJlcjogdGhpcy5lbGVtZW50Py5DYXNlTnVtYmVyLFxyXG4gICAgICAgIFZvdGU6IHRoaXMuZWxlbWVudD8uVm90ZVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=