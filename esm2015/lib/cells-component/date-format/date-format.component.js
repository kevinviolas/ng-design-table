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
            return `<span class="time-badge">
                    <span class="hour">${t[0]}</span>
                    <span class="minute">${t[1]}</span>
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
        template: "<span matTooltip=\"{{(date| date : 'short' : timezone)}}\" [innerHTML]=\"run((date| date : 'short' : timezone))\"></span>\n",
        styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}"]
    }),
    __metadata("design:paramtypes", [])
], DateFormatComponent);
export { DateFormatComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBSzVCO1FBSFMsYUFBUSxHQUFZLElBQUksQ0FBQTtJQUlqQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBVztRQUNYLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxPQUFRO3lDQUNxQixDQUFDLENBQUMsQ0FBQyxDQUFDOzJDQUNGLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLENBQUM7U0FDaEI7YUFBTTtZQUNILE9BQU87Ozt3QkFHSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUVsQyxDQUFDO0NBRUosQ0FBQTtBQTdCWTtJQUFSLEtBQUssRUFBRTs7aURBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7cURBQXlCO0FBRnhCLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2Qix1SUFBMkM7O0tBRTlDLENBQUM7O0dBQ1csbUJBQW1CLENBOEIvQjtTQTlCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkYXRlLWZvcm1hdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtZm9ybWF0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRlLWZvcm1hdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgZGF0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRpbWV6b25lIDogc3RyaW5nID0gJ2ZyJ1xuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBydW4oZGF0ZTpzdHJpbmcpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCB0OiBzdHJpbmdbXSA9IGRhdGUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHJldHVybiAgYDxzcGFuIGNsYXNzPVwidGltZS1iYWRnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJcIj4ke3RbMF19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPiR7dFsxXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwidGltZS1iYWRnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJcIj4tPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuICAgIH1cblxufVxuIl19