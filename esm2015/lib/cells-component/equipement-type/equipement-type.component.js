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
        else {
            this.icon = params['default'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXR5cGUvZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBT2xDLFlBQW9CLGtCQUFxQyxFQUFVLE9BQXFCO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFjO1FBRmpGLFFBQUcsR0FBUSxFQUFFLENBQUE7UUFHbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3hELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RELE1BQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFrQnZEO1FBRVAsTUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixNQUFNLE1BQU0sR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjtJQUVILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FFRixDQUFBOztZQTFDeUMsaUJBQWlCO1lBQW1CLFlBQVk7O0FBTi9FO0lBQVIsS0FBSyxFQUFFOztxREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFOztxREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFOztxREFBdUI7QUFIcEIsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsK0dBQStDOztLQUVoRCxDQUFDO3FDQVF3QyxpQkFBaUIsRUFBbUIsWUFBWTtHQVA3RSx1QkFBdUIsQ0FpRG5DO1NBakRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZXF1aXBlbWVudC10eXBlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyIHwgc3RyaW5nO1xuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcbiAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmVxdWlwbWVudFR5cGU7IC8qe1xuICAgICAgICAgICAgXCJmaXJld2FsbFwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L2ZpcmV3YWxsbnd0LnBuZ1wiLFxuICAgICAgICAgICAgXCJuYXNcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9uYXNud3QucG5nXCIsXG4gICAgICAgICAgICBcInBjZml4ZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjZml4ZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJwY3BvcnRhYmxlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNwb3J0YWJsZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJwb3J0YWJsZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwiY2xpZW50bGVnZXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcImNsaWVudGzDqWdlclwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwib25kdWxldXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9vbmR1bGF0ZXVyLnBuZ1wiLFxuICAgICAgICAgICAgXCJzZXJ2ZXVyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvc2VydmV1ci5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmVyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvc2VydmV1ci5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmVydmlydHVlbFwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3Zwcy5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmV1cnZpcnR1ZWxcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC92cHMucG5nXCIsXG4gICAgICAgICAgICBcInZtXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvdnBzLnBuZ1wiLFxuICAgICAgICAgICAgXCJ3aWZpXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvd2lmaS5wbmdcIixcbiAgICAgICAgICAgIFwid29ya3N0YXRpb25maXhlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNmaXhlXzEucG5nXCIsXG4gICAgICAgICAgICBcIndvcmtzdGF0aW9ucG9ydGFibGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcImltcHJpbWFudGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wcmludGVyLnBuZ1wiLFxuICAgICAgICB9Ki9cblxuICAgIGNvbnN0IGNsZWFuOiBzdHJpbmcgPSAodGhpcy50eXBlIHx8IFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgY29uc3Qgc2VydmVyOiBib29sZWFuID0gdGhpcy5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3NydicpO1xuICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbJ2RlZmF1bHQnXTtcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxufVxuIl19