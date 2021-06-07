import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
var PriorityComponent = /** @class */ (function () {
    function PriorityComponent(service) {
        this.service = service;
    }
    PriorityComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list = this.service.settingConfig.priority; /*= [{
            "label": "5 - Critique (Production)",
            "data": "assets/icons/nowteam/critiqueprod.png"
        }, {
            "label": "4 - Critique",
            "data": "assets/icons/nowteam/critique.png"
        }, {
            "label": "3 - Urgente",
            "data": "assets/icons/nowteam/urgent.png"
        }, {
            "label": "2 - Normale",
            'data': "assets/icons/nowteam/normal.png"
        }, {
            "label": "1 - Basse",
            "data": "assets/icons/nowteam/basse.png"
        }];*/
        console.log(this.icon);
        var data = list.filter(function (e) {
            console.log(e);
            return _this.icon.includes(e.label);
        });
        if (data && data.length) {
            this.iconSrc = data[0].data;
        }
    };
    PriorityComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    PriorityComponent.ctorParameters = function () { return [
        { type: TableService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PriorityComponent.prototype, "icon", void 0);
    PriorityComponent = __decorate([
        Component({
            selector: 'icon-priority',
            template: "<png-icon matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [TableService])
    ], PriorityComponent);
    return PriorityComponent;
}());
export { PriorityComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRDtJQUlJLDJCQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQzFDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBeUJDO1FBeEJHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7YUFlNUM7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFNLElBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBTTtZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtTQUM5QjtJQUNMLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQWhDNkIsWUFBWTs7SUFIakM7UUFBUixLQUFLLEVBQUU7O21EQUFjO0lBRGIsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLHVGQUF3Qzs7U0FFM0MsQ0FBQzt5Q0FLZ0MsWUFBWTtPQUpqQyxpQkFBaUIsQ0FzQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXRDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ljb24tcHJpb3JpdHknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcmlvcml0eS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJpb3JpdHkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcmlvcml0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgcHVibGljIGljb25TcmMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2UgOiBUYWJsZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLnByaW9yaXR5IC8qPSBbe1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjUgLSBDcml0aXF1ZSAoUHJvZHVjdGlvbilcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL2NyaXRpcXVlcHJvZC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiNCAtIENyaXRpcXVlXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9jcml0aXF1ZS5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMyAtIFVyZ2VudGVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL3VyZ2VudC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMiAtIE5vcm1hbGVcIixcbiAgICAgICAgICAgICdkYXRhJzogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9ub3JtYWwucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjEgLSBCYXNzZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vYmFzc2UucG5nXCJcbiAgICAgICAgfV07Ki9cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pY29uKTtcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0gbGlzdC5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uLmluY2x1ZGVzKGUubGFiZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvblNyYyA9IGRhdGFbMF0uZGF0YVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG59XG4iXX0=