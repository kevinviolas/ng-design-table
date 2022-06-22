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
            //this.routerLink = '';
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
            template: "<a [matTooltip]=\"open\"\n    [ngClass]=\"class\"\n    class=\"btn-link-text btn-xs\"\n    [routerLink]=\"routerLink\"\n    [id]=\"id\"\n    (click)=\"action()\"\n>\n    {{ text }}\n</a>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [TranslateService])
    ], ButtonLinkTextComponent);
    return ButtonLinkTextComponent;
}());
export { ButtonLinkTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU8zRDtJQVlFLGlDQUNVLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBVjVCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTVELFNBQUksR0FBRyxFQUFFLENBQUM7SUFJYixDQUFDO0lBRUwsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDckIsdUJBQXVCO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELHdDQUFNLEdBQU47O1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ25CO1lBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFVBQVUsUUFBRSxJQUFJLENBQUMsT0FBTywwQ0FBRSxVQUFVO1lBQ3BDLElBQUksUUFBRSxJQUFJLENBQUMsT0FBTywwQ0FBRSxJQUFJO1NBQ3pCLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXhCb0IsZ0JBQWdCOztJQVo1QjtRQUFSLEtBQUssRUFBRTs7eURBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7K0RBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzt5REFBVztJQUNWO1FBQVIsS0FBSyxFQUFFOzswREFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFOzt1REFBUztJQUNSO1FBQVIsS0FBSyxFQUFFOzswREFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFOzs0REFBYztJQUNaO1FBQVQsTUFBTSxFQUFFO2tDQUFjLFlBQVk7Z0VBQWdDO0lBUnhELHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLHNNQUFnRDs7U0FFakQsQ0FBQzt5Q0FjcUIsZ0JBQWdCO09BYjFCLHVCQUF1QixDQXNDbkM7SUFBRCw4QkFBQztDQUFBLEFBdENELElBc0NDO1NBdENZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1saW5rLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1saW5rLXRleHQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkxpbmtUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICBASW5wdXQoKSByb3V0ZXJMaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgbW9kYWwgPSAnJztcbiAgQElucHV0KCkgZWxlbWVudDogYW55O1xuICBAT3V0cHV0KCkgY2FsbEhhbmRsZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIG9wZW4gPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnT1BFTicpO1xuXG4gICAgaWYgKHRoaXMudGV4dCA9PSAnQWN0aW9uJykge1xuICAgICAgdGhpcy50ZXh0ID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0RFVEFJTFMnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RhbCAhPT0gJycpIHtcbiAgICAgIC8vdGhpcy5yb3V0ZXJMaW5rID0gJyc7XG4gICAgfVxuICB9XG5cbiAgYWN0aW9uKCkge1xuICAgIHRoaXMuY2FsbEhhbmRsZXIuZW1pdChcbiAgICAgIHtcbiAgICAgICAgbW9kYWw6IHRoaXMubW9kYWwsXG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICBjYXNlTnVtYmVyOiB0aGlzLmVsZW1lbnQ/LkNhc2VOdW1iZXIsXG4gICAgICAgIFZvdGU6IHRoaXMuZWxlbWVudD8uVm90ZVxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==