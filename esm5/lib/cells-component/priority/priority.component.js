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
        var data = list.filter(function (e) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRDtJQUlJLDJCQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQzFDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7YUFlNUM7UUFDTCxJQUFNLElBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBTTtZQUNqQyxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1NBQzlCO0lBQ0wsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBOUI2QixZQUFZOztJQUhqQztRQUFSLEtBQUssRUFBRTs7bURBQWM7SUFEYixpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsdUZBQXdDOztTQUUzQyxDQUFDO3lDQUtnQyxZQUFZO09BSmpDLGlCQUFpQixDQW9DN0I7SUFBRCx3QkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWNvbi1wcmlvcml0eScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ByaW9yaXR5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wcmlvcml0eS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByaW9yaXR5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBwdWJsaWMgaWNvblNyYyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZSA6IFRhYmxlU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcucHJpb3JpdHkgLyo9IFt7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiNSAtIENyaXRpcXVlIChQcm9kdWN0aW9uKVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vY3JpdGlxdWVwcm9kLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCI0IC0gQ3JpdGlxdWVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL2NyaXRpcXVlLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIzIC0gVXJnZW50ZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vdXJnZW50LnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIyIC0gTm9ybWFsZVwiLFxuICAgICAgICAgICAgJ2RhdGEnOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL25vcm1hbC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMSAtIEJhc3NlXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9iYXNzZS5wbmdcIlxuICAgICAgICB9XTsqL1xuICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBsaXN0LmZpbHRlcigoZTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uLmluY2x1ZGVzKGUubGFiZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvblNyYyA9IGRhdGFbMF0uZGF0YVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG59XG4iXX0=