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
        if (this.text == '') {
            this.text = this.translate.translate(this.lang, 'DETAILS');
        }
        if (this.modal !== '') {
            this.routerLink = '';
        }
    }
    action() {
        this.callHandler.emit(this.modal);
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
    Output(),
    __metadata("design:type", EventEmitter)
], ButtonLinkTextComponent.prototype, "callHandler", void 0);
ButtonLinkTextComponent = __decorate([
    Component({
        selector: 'button-link-text',
        template: "<a [matTooltip]=\"open\"\n    [ngClass]=\"class\"\n    class=\"btn-link-text btn-xs\"\n    [routerLink]=\"routerLink\"\n    [id]=\"id\"\n    (click)=\"action()\"\n>\n    {{ text }}\n</a>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TranslateService])
], ButtonLinkTextComponent);
export { ButtonLinkTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU8zRCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQVdsQyxZQUNVLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBVDVCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDVixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTVELFNBQUksR0FBRyxFQUFFLENBQUM7SUFJYixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTs7WUFsQnNCLGdCQUFnQjs7QUFYNUI7SUFBUixLQUFLLEVBQUU7O3FEQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7OzJEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs7cURBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTs7c0RBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTs7bURBQVM7QUFDUjtJQUFSLEtBQUssRUFBRTs7c0RBQVk7QUFDVjtJQUFULE1BQU0sRUFBRTs4QkFBYyxZQUFZOzREQUFnQztBQVB4RCx1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixzTUFBZ0Q7O0tBRWpELENBQUM7cUNBYXFCLGdCQUFnQjtHQVoxQix1QkFBdUIsQ0E4Qm5DO1NBOUJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1saW5rLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1saW5rLXRleHQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkxpbmtUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgbW9kYWwgPSAnJztcbiAgQE91dHB1dCgpIGNhbGxIYW5kbGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBvcGVuID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcblxuICAgIGlmICh0aGlzLnRleHQgPT0gJycpIHtcbiAgICAgIHRoaXMudGV4dCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdERVRBSUxTJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kYWwgIT09ICcnKSB7XG4gICAgICB0aGlzLnJvdXRlckxpbmsgPSAnJztcbiAgICB9XG4gIH1cblxuICBhY3Rpb24oKSB7XG4gICAgdGhpcy5jYWxsSGFuZGxlci5lbWl0KHRoaXMubW9kYWwpO1xuICB9XG59XG4iXX0=