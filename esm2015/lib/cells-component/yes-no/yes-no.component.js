import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
let YesNoComponent = class YesNoComponent {
    constructor(service) {
        this.service = service;
        this.displayNo = false;
        this.displayYes = true;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.yesNo; /*{
                "true": "/assets/icons/status/actif.png",
                "false": "/assets/icons/status/incatif.png"
            }*/
        if (this.valid && this.displayYes) {
            this.icon = params["true"];
        }
        else if (this.displayNo) {
            this.icon = params["false"];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
YesNoComponent.ctorParameters = () => [
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YesNoComponent.prototype, "valid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YesNoComponent.prototype, "displayNo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YesNoComponent.prototype, "displayYes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YesNoComponent.prototype, "size", void 0);
YesNoComponent = __decorate([
    Component({
        selector: 'app-yes-nox',
        template: "<span [style]=\"css\" >\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TableService])
], YesNoComponent);
export { YesNoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzLW5vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC95ZXMtbm8veWVzLW5vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBUXpCLFlBQW9CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFOaEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRzdCLFFBQUcsR0FBUSxFQUFFLENBQUM7SUFHckIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7OztlQUcxQztRQUVQLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQzNCO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUVGLENBQUE7O1lBdEI4QixZQUFZOztBQVBoQztJQUFSLEtBQUssRUFBRTs7NkNBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7O2lEQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTs7a0RBQTRCO0FBQzNCO0lBQVIsS0FBSyxFQUFFOzs0Q0FBTTtBQUpILGNBQWM7SUFMMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsd0ZBQXNDOztLQUV2QyxDQUFDO3FDQVM2QixZQUFZO0dBUjlCLGNBQWMsQ0E4QjFCO1NBOUJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAteWVzLW5veCcsXG4gIHRlbXBsYXRlVXJsOiAnLi95ZXMtbm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi95ZXMtbm8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBZZXNOb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmFsaWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc3BsYXlObzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNwbGF5WWVzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2l6ZTtcbiAgcHVibGljIGljb246IHN0cmluZztcbiAgcHVibGljIGNzczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcueWVzTm87IC8qe1xuICAgICAgICAgICAgXCJ0cnVlXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvYWN0aWYucG5nXCIsXG4gICAgICAgICAgICBcImZhbHNlXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5jYXRpZi5wbmdcIlxuICAgICAgICB9Ki9cblxuICAgIGlmICh0aGlzLnZhbGlkICYmIHRoaXMuZGlzcGxheVllcykge1xuICAgICAgdGhpcy5pY29uID0gcGFyYW1zW1widHJ1ZVwiXVxuICAgIH0gZWxzZSBpZiAodGhpcy5kaXNwbGF5Tm8pIHtcbiAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1tcImZhbHNlXCJdXG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG59XG4iXX0=