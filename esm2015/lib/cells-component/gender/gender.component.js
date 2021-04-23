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
        template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [TableService])
], GenderComponent);
export { GenderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9nZW5kZXIvZ2VuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBTXhCLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFGbkMsUUFBRyxHQUFRLEVBQUUsQ0FBQTtJQUdwQixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0RCxNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7O1dBR3BEO1FBRUgsTUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGdDQUFnQztTQUM1RDtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFFOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25CLENBQUM7Q0FFSixDQUFBOztZQTFCaUMsWUFBWTs7QUFMakM7SUFBUixLQUFLLEVBQUU7OzZDQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7OzZDQUFjO0FBRmIsZUFBZTtJQUwzQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QiwrR0FBc0M7O0tBRXpDLENBQUM7cUNBT2dDLFlBQVk7R0FOakMsZUFBZSxDQWdDM0I7U0FoQ1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWdlbmRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dlbmRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZ2VuZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2VuZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGljb246IHN0cmluZztcbiAgICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlIDogVGFibGVTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmdlbmRlcjsgLyp7XG4gICAgICAgICAgICBcIm1cIjogXCIvYXNzZXRzL2ljb25zL25vd3RlYW0vc2FsdXRhdGlvbnMvbWFuLnBuZ1wiLFxuICAgICAgICAgICAgXCJtbWVcIjogXCIvYXNzZXRzL2ljb25zL25vd3RlYW0vc2FsdXRhdGlvbnMvd29tYW4ucG5nXCIsXG4gICAgICAgIH0qL1xuXG4gICAgICAgIGNvbnN0IGNsZWFuOiBzdHJpbmcgPSAodGhpcy50eXBlIHx8IFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKCh0aGlzLnNpemUgfHwgNDApIC0gMTApKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKCh0aGlzLnNpemUgfHwgNDApIC0gMTApKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBwYXJhbXMubm9uZTsgLy9cIi9hc3NldHMvaWNvbnMvc3RhdHVzL0hTLnBuZ1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG4gICAgICAgIHRoaXMubmdPbkluaXQoKVxuICAgIH1cblxufVxuIl19