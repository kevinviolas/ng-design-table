import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TranslateService } from '../../translate.service';
var ButtonLinkTextComponent = /** @class */ (function () {
    function ButtonLinkTextComponent(translate) {
        this.translate = translate;
        this.text = '';
        this.open = '';
    }
    ButtonLinkTextComponent.prototype.ngOnInit = function () {
        console.log(this.text);
        this.open = this.translate.translate(this.lang, 'OPEN');
        if (this.text = '') {
            this.text = this.translate.translate(this.lang, 'DETAILS');
        }
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
    ButtonLinkTextComponent = __decorate([
        Component({
            selector: 'button-link-text',
            template: "<a [matTooltip]=\"open\"\n    class=\"btn-link-text btn-xs\"\n    routerLink=\"routerLink\">\n    {{ text }}\n</a>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [TranslateService])
    ], ButtonLinkTextComponent);
    return ButtonLinkTextComponent;
}());
export { ButtonLinkTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPM0Q7SUFPRSxpQ0FDVSxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw1QixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBRVosU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUliLENBQUM7SUFFTCwwQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXhELElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7Z0JBVm9CLGdCQUFnQjs7SUFQNUI7UUFBUixLQUFLLEVBQUU7O3lEQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7OytEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs7eURBQVc7SUFIUix1QkFBdUI7UUFMbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1Qiw4SEFBZ0Q7O1NBRWpELENBQUM7eUNBU3FCLGdCQUFnQjtPQVIxQix1QkFBdUIsQ0FvQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1saW5rLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1saW5rLXRleHQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkxpbmtUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcblxuICBwdWJsaWMgb3BlbiA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGV4dCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcblxuICAgIGlmICh0aGlzLnRleHQgPSAnJykge1xuICAgICAgdGhpcy50ZXh0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0RFVEFJTFMnKTtcbiAgICB9XG4gIH1cblxufVxuIl19