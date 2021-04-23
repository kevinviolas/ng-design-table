import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
let EquipementTypeComponent = class EquipementTypeComponent {
    constructor(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.css = {};
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = this.service.settingConfig.equipmentType; /*{
            "firewall": "/assets/icons/equipment/firewallnwt.png",
            "nas": "/assets/icons/equipment/nasnwt.png",
            "pcfixe": "/assets/icons/equipment/pcfixe_1.png",
            "pcportable": "/assets/icons/equipment/pcportable_1.png",
            "portable": "/assets/icons/equipment/pcportable_1.png",
            "clientleger": "/assets/icons/equipment/pcportable_1.png",
            "clientléger": "/assets/icons/equipment/pcportable_1.png",
            "onduleur": "/assets/icons/equipment/ondulateur.png",
            "serveur": "/assets/icons/equipment/serveur.png",
            "server": "/assets/icons/equipment/serveur.png",
            "servervirtuel": "/assets/icons/equipment/vps.png",
            "serveurvirtuel": "/assets/icons/equipment/vps.png",
            "vm": "/assets/icons/equipment/vps.png",
            "wifi": "/assets/icons/equipment/wifi.png",
            "workstationfixe": "/assets/icons/equipment/pcfixe_1.png",
            "workstationportable": "/assets/icons/equipment/pcportable_1.png",
            "imprimante": "/assets/icons/equipment/printer.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        const server = this.name.toLocaleLowerCase().includes('srv');
        if (params[clean]) {
            this.icon = params[clean];
        }
        else if (server) {
            this.icon = "/assets/icons/equipment/serveur.png";
        }
        else {
            this.icon = "/assets/icons/equipment/default.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
EquipementTypeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], EquipementTypeComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], EquipementTypeComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], EquipementTypeComponent.prototype, "size", void 0);
EquipementTypeComponent = __decorate([
    Component({
        selector: 'app-equipement-type',
        template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, TableService])
], EquipementTypeComponent);
export { EquipementTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXR5cGUvZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBT2hDLFlBQW9CLGtCQUFxQyxFQUFVLE9BQXFCO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFjO1FBRmpGLFFBQUcsR0FBUSxFQUFFLENBQUE7UUFHaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RELE1BQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FrQjNEO1FBRUgsTUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixNQUFNLE1BQU0sR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUI7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcscUNBQXFDLENBQUM7U0FDckQ7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLEdBQUcscUNBQXFDLENBQUM7U0FDckQ7SUFFTCxDQUFDO0lBQ0QsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBRUosQ0FBQTs7WUEzQzJDLGlCQUFpQjtZQUFtQixZQUFZOztBQU4vRTtJQUFSLEtBQUssRUFBRTs7cURBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7cURBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7cURBQXVCO0FBSHRCLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLCtHQUErQzs7S0FFbEQsQ0FBQztxQ0FRMEMsaUJBQWlCLEVBQW1CLFlBQVk7R0FQL0UsdUJBQXVCLENBa0RuQztTQWxEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZXF1aXBlbWVudC10eXBlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9lcXVpcGVtZW50LXR5cGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IG51bWJlciB8IHN0cmluZztcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBjc3M6IGFueSA9IHt9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmczogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5lcXVpcG1lbnRUeXBlOyAvKntcbiAgICAgICAgICAgIFwiZmlyZXdhbGxcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9maXJld2FsbG53dC5wbmdcIixcbiAgICAgICAgICAgIFwibmFzXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvbmFzbnd0LnBuZ1wiLFxuICAgICAgICAgICAgXCJwY2ZpeGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY2ZpeGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwicGNwb3J0YWJsZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwicG9ydGFibGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcImNsaWVudGxlZ2VyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNwb3J0YWJsZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJjbGllbnRsw6lnZXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcIm9uZHVsZXVyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvb25kdWxhdGV1ci5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmV1clwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3NlcnZldXIucG5nXCIsXG4gICAgICAgICAgICBcInNlcnZlclwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3NlcnZldXIucG5nXCIsXG4gICAgICAgICAgICBcInNlcnZlcnZpcnR1ZWxcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC92cHMucG5nXCIsXG4gICAgICAgICAgICBcInNlcnZldXJ2aXJ0dWVsXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvdnBzLnBuZ1wiLFxuICAgICAgICAgICAgXCJ2bVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3Zwcy5wbmdcIixcbiAgICAgICAgICAgIFwid2lmaVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3dpZmkucG5nXCIsXG4gICAgICAgICAgICBcIndvcmtzdGF0aW9uZml4ZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjZml4ZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJ3b3Jrc3RhdGlvbnBvcnRhYmxlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNwb3J0YWJsZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJpbXByaW1hbnRlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcHJpbnRlci5wbmdcIixcbiAgICAgICAgfSovXG5cbiAgICAgICAgY29uc3QgY2xlYW46IHN0cmluZyA9ICh0aGlzLnR5cGUgfHwgXCJcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcbiAgICAgICAgY29uc3Qgc2VydmVyOiBib29sZWFuID0gdGhpcy5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3NydicpO1xuICAgICAgICBpZiAocGFyYW1zW2NsZWFuXSkge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gcGFyYW1zW2NsZWFuXVxuICAgICAgICB9IGVsc2UgaWYgKHNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9zZXJ2ZXVyLnBuZ1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9kZWZhdWx0LnBuZ1wiO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG59XG4iXX0=