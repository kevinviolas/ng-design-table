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
        template: "<span [style]=\"css\" >\r\n    <img [src]=\"icon\" [style]=\"css\">\r\n</span>\r\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TableService])
], YesNoComponent);
export { YesNoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzLW5vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC95ZXMtbm8veWVzLW5vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBUXpCLFlBQW9CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFOaEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRzdCLFFBQUcsR0FBUSxFQUFFLENBQUM7SUFHckIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7OztlQUcxQztRQUVQLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQzNCO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUVGLENBQUE7O1lBdEI4QixZQUFZOztBQVBoQztJQUFSLEtBQUssRUFBRTs7NkNBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7O2lEQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTs7a0RBQTRCO0FBQzNCO0lBQVIsS0FBSyxFQUFFOzs0Q0FBTTtBQUpILGNBQWM7SUFMMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsOEZBQXNDOztLQUV2QyxDQUFDO3FDQVM2QixZQUFZO0dBUjlCLGNBQWMsQ0E4QjFCO1NBOUJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC15ZXMtbm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4veWVzLW5vLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi95ZXMtbm8uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWWVzTm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgdmFsaWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzcGxheU5vOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzcGxheVllczogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgc2l6ZTtcclxuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xyXG4gIHB1YmxpYyBjc3M6IGFueSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xyXG4gICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy55ZXNObzsgLyp7XHJcbiAgICAgICAgICAgIFwidHJ1ZVwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2FjdGlmLnBuZ1wiLFxyXG4gICAgICAgICAgICBcImZhbHNlXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5jYXRpZi5wbmdcIlxyXG4gICAgICAgIH0qL1xyXG5cclxuICAgIGlmICh0aGlzLnZhbGlkICYmIHRoaXMuZGlzcGxheVllcykge1xyXG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbXCJ0cnVlXCJdXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlzcGxheU5vKSB7XHJcbiAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1tcImZhbHNlXCJdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=