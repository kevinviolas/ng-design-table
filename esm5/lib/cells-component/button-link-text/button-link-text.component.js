import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TranslateService } from '../../translate.service';
var ButtonLinkTextComponent = /** @class */ (function () {
    function ButtonLinkTextComponent(translate) {
        this.translate = translate;
        this.text = '';
        this.class = '';
        this.id = '';
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
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ButtonLinkTextComponent.prototype, "id", void 0);
    ButtonLinkTextComponent = __decorate([
        Component({
            selector: 'button-link-text',
            template: "<a [matTooltip]=\"open\"\n    [ngClass]=\"class\"\n    class=\"btn-link-text btn-xs\"\n    [routerLink]=\"routerLink\"\n    [id]=\"id\">\n    {{ text }}\n</a>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [TranslateService])
    ], ButtonLinkTextComponent);
    return ButtonLinkTextComponent;
}());
export { ButtonLinkTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPM0Q7SUFTRSxpQ0FDVSxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVA1QixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFFVixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBSWIsQ0FBQztJQUVMLDBDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFeEQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOztnQkFUb0IsZ0JBQWdCOztJQVQ1QjtRQUFSLEtBQUssRUFBRTs7eURBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7K0RBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzt5REFBVztJQUNWO1FBQVIsS0FBSyxFQUFFOzswREFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFOzt1REFBUztJQUxOLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLDBLQUFnRDs7U0FFakQsQ0FBQzt5Q0FXcUIsZ0JBQWdCO09BVjFCLHVCQUF1QixDQXFCbkM7SUFBRCw4QkFBQztDQUFBLEFBckJELElBcUJDO1NBckJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLWxpbmstdGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTGlua1RleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdXRlckxpbms6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dCA9ICcnO1xuICBASW5wdXQoKSBjbGFzcyA9ICcnO1xuICBASW5wdXQoKSBpZCA9ICcnO1xuXG4gIHB1YmxpYyBvcGVuID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ09QRU4nKTtcblxuICAgIGlmICh0aGlzLnRleHQgPT0gJycpIHtcbiAgICAgIHRoaXMudGV4dCA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdERVRBSUxTJyk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==