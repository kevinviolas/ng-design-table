import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TranslateService } from '../../translate.service';
let ButtonLinkTextComponent = class ButtonLinkTextComponent {
    constructor(translate) {
        this.translate = translate;
        this.text = '';
        this.class = '';
        this.open = '';
    }
    ngOnInit() {
        this.open = this.translate.translate(this.lang, 'OPEN');
        if (this.text == '') {
            this.text = this.translate.translate(this.lang, 'DETAILS');
        }
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
ButtonLinkTextComponent = __decorate([
    Component({
        selector: 'button-link-text',
        template: "<a [matTooltip]=\"open\"\n    [ngClass]=\"class\"\n    class=\"btn-link-text btn-xs\"\n    [routerLink]=\"routerLink\">\n    {{ text }}\n</a>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TranslateService])
], ButtonLinkTextComponent);
export { ButtonLinkTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPM0QsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFRbEMsWUFDVSxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQU41QixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUViLFNBQUksR0FBRyxFQUFFLENBQUM7SUFJYixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7Q0FFRixDQUFBOztZQVhzQixnQkFBZ0I7O0FBUjVCO0lBQVIsS0FBSyxFQUFFOztxREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFOzsyREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7O3FEQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7O3NEQUFZO0FBSlQsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIseUpBQWdEOztLQUVqRCxDQUFDO3FDQVVxQixnQkFBZ0I7R0FUMUIsdUJBQXVCLENBb0JuQztTQXBCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1saW5rLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1saW5rLXRleHQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkxpbmtUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcblxuICBwdWJsaWMgb3BlbiA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdPUEVOJyk7XG5cbiAgICBpZiAodGhpcy50ZXh0ID09ICcnKSB7XG4gICAgICB0aGlzLnRleHQgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=