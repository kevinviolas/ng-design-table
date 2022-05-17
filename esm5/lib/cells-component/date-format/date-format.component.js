import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var DateFormatComponent = /** @class */ (function () {
    function DateFormatComponent() {
        this.timezone = 'fr';
    }
    DateFormatComponent.prototype.ngOnInit = function () {
    };
    DateFormatComponent.prototype.run = function (date) {
        if (date) {
            var t = date.split(' ');
            return "<span class=\"\">\n                    <span class=\"hour\">" + t[0] + "</span>\n                    <!--<span class=\"minute\">" + t[1] + "</span>-->\n                </span>";
        }
        else {
            return "<span class=\"time-badge\">\n                    <span class=\"hour\">-</span>\n                    <span class=\"minute\"></span>\n                </span>";
        }
    };
    DateFormatComponent.prototype.ngOnChanges = function (changes) {
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
    return DateFormatComponent;
}());
export { DateFormatComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGO0lBS0k7UUFIUyxhQUFRLEdBQVksSUFBSSxDQUFBO0lBSWpDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGlDQUFHLEdBQUgsVUFBSSxJQUFXO1FBQ1gsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE9BQVEsaUVBQ3FCLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0VBQ0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3Q0FDM0IsQ0FBQztTQUNoQjthQUFNO1lBQ0gsT0FBTyw2SkFHSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFzQjtJQUVsQyxDQUFDO0lBM0JRO1FBQVIsS0FBSyxFQUFFOztxREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFOzt5REFBeUI7SUFGeEIsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLHlJQUEyQzs7U0FFOUMsQ0FBQzs7T0FDVyxtQkFBbUIsQ0E4Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTlCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkYXRlLWZvcm1hdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1mb3JtYXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGRhdGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRpbWV6b25lIDogc3RyaW5nID0gJ2ZyJ1xyXG4gICAgcHVibGljIGRpc3BsYXk6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBydW4oZGF0ZTpzdHJpbmcpIHtcclxuICAgICAgICBpZiAoZGF0ZSkge1xyXG4gICAgICAgICAgICBsZXQgdDogc3RyaW5nW10gPSBkYXRlLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgIHJldHVybiAgYDxzcGFuIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3VyXCI+JHt0WzBdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJtaW51dGVcIj4ke3RbMV19PC9zcGFuPi0tPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInRpbWUtYmFkZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJcIj4tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWludXRlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==