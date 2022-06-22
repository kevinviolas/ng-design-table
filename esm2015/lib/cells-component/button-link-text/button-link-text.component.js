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
            //this.routerLink = '';
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
        template: "<a [matTooltip]=\"open\"\n    [ngClass]=\"class\"\n    class=\"btn-link-text btn-xs\"\n    [routerLink]=\"routerLink\"\n    [id]=\"id\"\n    (click)=\"action()\"\n>\n    {{ text }}\n</a>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TranslateService])
], ButtonLinkTextComponent);
export { ButtonLinkTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvYnV0dG9uLWxpbmstdGV4dC9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU8zRCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQVlsQyxZQUNVLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBVjVCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTVELFNBQUksR0FBRyxFQUFFLENBQUM7SUFJYixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDckIsdUJBQXVCO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELE1BQU07O1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ25CO1lBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFVBQVUsUUFBRSxJQUFJLENBQUMsT0FBTywwQ0FBRSxVQUFVO1lBQ3BDLElBQUksUUFBRSxJQUFJLENBQUMsT0FBTywwQ0FBRSxJQUFJO1NBQ3pCLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQXpCc0IsZ0JBQWdCOztBQVo1QjtJQUFSLEtBQUssRUFBRTs7cURBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7MkRBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOztxREFBVztBQUNWO0lBQVIsS0FBSyxFQUFFOztzREFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFOzttREFBUztBQUNSO0lBQVIsS0FBSyxFQUFFOztzREFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFOzt3REFBYztBQUNaO0lBQVQsTUFBTSxFQUFFOzhCQUFjLFlBQVk7NERBQWdDO0FBUnhELHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLHNNQUFnRDs7S0FFakQsQ0FBQztxQ0FjcUIsZ0JBQWdCO0dBYjFCLHVCQUF1QixDQXNDbkM7U0F0Q1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLWxpbmstdGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tbGluay10ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLWxpbmstdGV4dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTGlua1RleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdXRlckxpbms6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dCA9ICcnO1xuICBASW5wdXQoKSBjbGFzcyA9ICcnO1xuICBASW5wdXQoKSBpZCA9ICcnO1xuICBASW5wdXQoKSBtb2RhbCA9ICcnO1xuICBASW5wdXQoKSBlbGVtZW50OiBhbnk7XG4gIEBPdXRwdXQoKSBjYWxsSGFuZGxlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgb3BlbiA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdPUEVOJyk7XG5cbiAgICBpZiAodGhpcy50ZXh0ID09ICdBY3Rpb24nKSB7XG4gICAgICB0aGlzLnRleHQgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnREVUQUlMUycpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGFsICE9PSAnJykge1xuICAgICAgLy90aGlzLnJvdXRlckxpbmsgPSAnJztcbiAgICB9XG4gIH1cblxuICBhY3Rpb24oKSB7XG4gICAgdGhpcy5jYWxsSGFuZGxlci5lbWl0KFxuICAgICAge1xuICAgICAgICBtb2RhbDogdGhpcy5tb2RhbCxcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIGNhc2VOdW1iZXI6IHRoaXMuZWxlbWVudD8uQ2FzZU51bWJlcixcbiAgICAgICAgVm90ZTogdGhpcy5lbGVtZW50Py5Wb3RlXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19