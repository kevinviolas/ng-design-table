import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let DateFormatComponent = class DateFormatComponent {
    constructor() {
        this.timezone = 'fr';
    }
    ngOnInit() {
    }
    run(date) {
        if (date) {
            let t = date.split(' ');
            return `<span class="">
                    <span class="hour">${t[0]}</span>
                    <!--<span class="minute">${t[1]}</span>-->
                </span>`;
        }
        else {
            return `<span class="time-badge">
                    <span class="hour">-</span>
                    <span class="minute"></span>
                </span>`;
        }
    }
    ngOnChanges(changes) {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], DateFormatComponent.prototype, "date", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DateFormatComponent.prototype, "timezone", void 0);
DateFormatComponent = __decorate([
    Component({
        selector: 'date-format',
        template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\r\n",
        styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}"]
    }),
    __metadata("design:paramtypes", [])
], DateFormatComponent);
export { DateFormatComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBSzVCO1FBSFMsYUFBUSxHQUFZLElBQUksQ0FBQTtJQUlqQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBVztRQUNYLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxPQUFRO3lDQUNxQixDQUFDLENBQUMsQ0FBQyxDQUFDOytDQUNFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLENBQUM7U0FDaEI7YUFBTTtZQUNILE9BQU87Ozt3QkFHSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUVsQyxDQUFDO0NBRUosQ0FBQTtBQTdCWTtJQUFSLEtBQUssRUFBRTs7aURBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7cURBQXlCO0FBRnhCLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2Qix5SUFBMkM7O0tBRTlDLENBQUM7O0dBQ1csbUJBQW1CLENBOEIvQjtTQTlCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkYXRlLWZvcm1hdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1mb3JtYXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGRhdGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRpbWV6b25lIDogc3RyaW5nID0gJ2ZyJ1xyXG4gICAgcHVibGljIGRpc3BsYXk6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBydW4oZGF0ZTpzdHJpbmcpIHtcclxuICAgICAgICBpZiAoZGF0ZSkge1xyXG4gICAgICAgICAgICBsZXQgdDogc3RyaW5nW10gPSBkYXRlLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgIHJldHVybiAgYDxzcGFuIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3VyXCI+JHt0WzBdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJtaW51dGVcIj4ke3RbMV19PC9zcGFuPi0tPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInRpbWUtYmFkZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJcIj4tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWludXRlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==