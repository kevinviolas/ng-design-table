import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
var OriginComponent = /** @class */ (function () {
    function OriginComponent(service) {
        this.service = service;
    }
    OriginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list = this.service.settingConfig.origin; /*[{
            "label": "Web",
            "data": "assets/icons/nowteam/Web.png"
        }, {
            "label": "PRTG",
            "data": "assets/icons/nowteam/PRTG.png"
        }, {
            "label": "Mail",
            "data": "assets/icons/nowteam/Mail.png"
        }, {
            "label": "Téléphone",
            "data": "assets/icons/nowteam/Telephone.png"
        }, {
            "label": "Bot",
            "data": "assets/icons/nowteam/Bot.png"
        }];*/
        var flter = list.filter(function (e) {
            return _this.icon.includes(e.label);
        });
        this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
    };
    OriginComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    OriginComponent.ctorParameters = function () { return [
        { type: TableService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], OriginComponent.prototype, "icon", void 0);
    OriginComponent = __decorate([
        Component({
            selector: 'icon-origin',
            template: "<png-icon style=\"margin : auto; text-align: center\" matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [TableService])
    ], OriginComponent);
    return OriginComponent;
}());
export { OriginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9vcmlnaW4vb3JpZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRDtJQUlJLHlCQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBcUJDO1FBcEJHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7YUFlMUM7UUFDTCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBTTtZQUM3QixPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQTVCMkIsWUFBWTs7SUFIL0I7UUFBUixLQUFLLEVBQUU7O2lEQUFjO0lBRGIsZUFBZTtRQUwzQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixpSUFBc0M7O1NBRXpDLENBQUM7eUNBSzhCLFlBQVk7T0FKL0IsZUFBZSxDQWtDM0I7SUFBRCxzQkFBQztDQUFBLEFBbENELElBa0NDO1NBbENZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaWNvbi1vcmlnaW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL29yaWdpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9vcmlnaW4uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JpZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMgIHtcclxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICAgIHB1YmxpYyBpY29uU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IFRhYmxlU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5vcmlnaW4gLypbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiV2ViXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL1dlYi5wbmdcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBSVEdcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vUFJURy5wbmdcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1haWxcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vTWFpbC5wbmdcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlTDqWzDqXBob25lXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL1RlbGVwaG9uZS5wbmdcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkJvdFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9Cb3QucG5nXCJcclxuICAgICAgICB9XTsqL1xyXG4gICAgICAgIGNvbnN0IGZsdGVyID0gbGlzdC5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uLmluY2x1ZGVzKGUubGFiZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaWNvblNyYyA9IGZsdGVyICYmIGZsdGVyLmxlbmd0aCAmJiBmbHRlclswXS5kYXRhID8gZmx0ZXJbMF0uZGF0YSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==