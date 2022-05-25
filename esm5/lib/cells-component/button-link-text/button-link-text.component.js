import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TranslateService } from '../../translate.service';
var ButtonLinkTextComponent = /** @class */ (function () {
    function ButtonLinkTextComponent(translate) {
        this.translate = translate;
        this.text = '';
        this.class = '';
        this.open = '';
    }
    ButtonLinkTextComponent.prototype.ngOnInit = function () {
        this.open = this.translate.translate(this.lang, 'OPEN');
        if (this.text == '') {
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
    return ButtonLinkTextComponent;
}());
export { ButtonLinkTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPM0Q7SUFRRSxpQ0FDVSxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQU41QixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUViLFNBQUksR0FBRyxFQUFFLENBQUM7SUFJYixDQUFDO0lBRUwsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7O2dCQVRvQixnQkFBZ0I7O0lBUjVCO1FBQVIsS0FBSyxFQUFFOzt5REFBYztJQUNiO1FBQVIsS0FBSyxFQUFFOzsrREFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7O3lEQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7OzBEQUFZO0lBSlQsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIseUpBQWdEOztTQUVqRCxDQUFDO3lDQVVxQixnQkFBZ0I7T0FUMUIsdUJBQXVCLENBb0JuQztJQUFELDhCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tbGluay10ZXh0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1saW5rLXRleHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25MaW5rVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcbiAgQElucHV0KCkgcm91dGVyTGluazogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG4gIEBJbnB1dCgpIGNsYXNzID0gJyc7XG5cbiAgcHVibGljIG9wZW4gPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xuXG4gICAgaWYgKHRoaXMudGV4dCA9PSAnJykge1xuICAgICAgdGhpcy50ZXh0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0RFVEFJTFMnKTtcbiAgICB9XG4gIH1cblxufVxuIl19