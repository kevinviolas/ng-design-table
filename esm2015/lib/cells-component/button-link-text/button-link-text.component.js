import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TranslateService } from '../../translate.service';
let ButtonLinkTextComponent = class ButtonLinkTextComponent {
    constructor(translate) {
        this.translate = translate;
        this.text = '';
        this.open = '';
    }
    ngOnInit() {
        console.log(this.text);
        this.open = this.translate.translate(this.lang, 'OPEN');
        if (this.text = '') {
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
ButtonLinkTextComponent = __decorate([
    Component({
        selector: 'button-link-text',
        template: "<a [matTooltip]=\"open\"\n    class=\"btn-link-text btn-xs\"\n    routerLink=\"routerLink\">\n    {{ text }}\n</a>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TranslateService])
], ButtonLinkTextComponent);
export { ButtonLinkTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPM0QsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFPbEMsWUFDVSxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw1QixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBRVosU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUliLENBQUM7SUFFTCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXhELElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztDQUVGLENBQUE7O1lBWnNCLGdCQUFnQjs7QUFQNUI7SUFBUixLQUFLLEVBQUU7O3FEQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7OzJEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs7cURBQVc7QUFIUix1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1Qiw4SEFBZ0Q7O0tBRWpELENBQUM7cUNBU3FCLGdCQUFnQjtHQVIxQix1QkFBdUIsQ0FvQm5DO1NBcEJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLWxpbmstdGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTGlua1RleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdXRlckxpbms6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dCA9ICcnO1xuXG4gIHB1YmxpYyBvcGVuID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2codGhpcy50ZXh0KTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xuXG4gICAgaWYgKHRoaXMudGV4dCA9ICcnKSB7XG4gICAgICB0aGlzLnRleHQgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=