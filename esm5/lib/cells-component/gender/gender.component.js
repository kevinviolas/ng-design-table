import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
var GenderComponent = /** @class */ (function () {
    function GenderComponent(service) {
        this.service = service;
        this.css = {};
    }
    GenderComponent.prototype.ngOnInit = function () {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        var params = this.service.settingConfig.gender; /*{
            "m": "/assets/icons/nowteam/salutations/man.png",
            "mme": "/assets/icons/nowteam/salutations/woman.png",
        }*/
        var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = "/assets/icons/status/HS.png";
        }
    };
    GenderComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    GenderComponent.ctorParameters = function () { return [
        { type: TableService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GenderComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GenderComponent.prototype, "size", void 0);
    GenderComponent = __decorate([
        Component({
            selector: 'app-gender',
            template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [TableService])
    ], GenderComponent);
    return GenderComponent;
}());
export { GenderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9nZW5kZXIvZ2VuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRDtJQU1JLHlCQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBRm5DLFFBQUcsR0FBUSxFQUFFLENBQUE7SUFHcEIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsSUFBTSxNQUFNLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7OztXQUdwRDtRQUVILElBQU0sS0FBSyxHQUFXLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEYsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjthQUFNO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLDZCQUE2QixDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUU5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDbkIsQ0FBQzs7Z0JBeEI2QixZQUFZOztJQUxqQztRQUFSLEtBQUssRUFBRTs7aURBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7aURBQWM7SUFGYixlQUFlO1FBTDNCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLCtHQUFzQzs7U0FFekMsQ0FBQzt5Q0FPZ0MsWUFBWTtPQU5qQyxlQUFlLENBZ0MzQjtJQUFELHNCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0FoQ1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWdlbmRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dlbmRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZ2VuZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2VuZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGljb246IHN0cmluZztcbiAgICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlIDogVGFibGVTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmdlbmRlcjsgLyp7XG4gICAgICAgICAgICBcIm1cIjogXCIvYXNzZXRzL2ljb25zL25vd3RlYW0vc2FsdXRhdGlvbnMvbWFuLnBuZ1wiLFxuICAgICAgICAgICAgXCJtbWVcIjogXCIvYXNzZXRzL2ljb25zL25vd3RlYW0vc2FsdXRhdGlvbnMvd29tYW4ucG5nXCIsXG4gICAgICAgIH0qL1xuXG4gICAgICAgIGNvbnN0IGNsZWFuOiBzdHJpbmcgPSAodGhpcy50eXBlIHx8IFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygoKHRoaXMuc2l6ZSB8fCA0MCkgLSAxMCkpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygoKHRoaXMuc2l6ZSB8fCA0MCkgLSAxMCkpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvSFMucG5nXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpXG4gICAgfVxuXG59XG4iXX0=