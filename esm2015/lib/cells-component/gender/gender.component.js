import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
let GenderComponent = class GenderComponent {
    constructor(service) {
        this.service = service;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.gender; /*{
            "m": "/assets/icons/nowteam/salutations/man.png",
            "mme": "/assets/icons/nowteam/salutations/woman.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = params.none; //"/assets/icons/status/HS.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
GenderComponent.ctorParameters = () => [
    { type: TableService }
];
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
        template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\r\n    <img [src]=\"icon\" [style]=\"css\">\r\n</span>\r\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TableService])
], GenderComponent);
export { GenderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9nZW5kZXIvZ2VuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBTXhCLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFGbkMsUUFBRyxHQUFRLEVBQUUsQ0FBQTtJQUdwQixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0RCxNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7O1dBR3BEO1FBRUgsTUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGdDQUFnQztTQUM1RDtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFFOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25CLENBQUM7Q0FFSixDQUFBOztZQTFCaUMsWUFBWTs7QUFMakM7SUFBUixLQUFLLEVBQUU7OzZDQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7OzZDQUFjO0FBRmIsZUFBZTtJQUwzQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixxSEFBc0M7O0tBRXpDLENBQUM7cUNBT2dDLFlBQVk7R0FOakMsZUFBZSxDQWdDM0I7U0FoQ1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZ2VuZGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9nZW5kZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZ2VuZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdlbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpY29uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZSA6IFRhYmxlU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XHJcbiAgICAgICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5nZW5kZXI7IC8qe1xyXG4gICAgICAgICAgICBcIm1cIjogXCIvYXNzZXRzL2ljb25zL25vd3RlYW0vc2FsdXRhdGlvbnMvbWFuLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm1tZVwiOiBcIi9hc3NldHMvaWNvbnMvbm93dGVhbS9zYWx1dGF0aW9ucy93b21hbi5wbmdcIixcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgY29uc3QgY2xlYW46IHN0cmluZyA9ICh0aGlzLnR5cGUgfHwgXCJcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcclxuICAgICAgICBpZiAocGFyYW1zW2NsZWFuXSkge1xyXG4gICAgICAgICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCgodGhpcy5zaXplIHx8IDQwKSAtIDEwKSkgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKCh0aGlzLnNpemUgfHwgNDApIC0gMTApKSArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHBhcmFtcy5ub25lOyAvL1wiL2Fzc2V0cy9pY29ucy9zdGF0dXMvSFMucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuXHJcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==