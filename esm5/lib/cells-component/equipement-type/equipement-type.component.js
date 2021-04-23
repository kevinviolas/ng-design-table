import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
var EquipementTypeComponent = /** @class */ (function () {
    function EquipementTypeComponent(changeDetectorRefs, service) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.css = {};
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
    }
    EquipementTypeComponent.prototype.ngOnInit = function () {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        var params = this.service.settingConfig.equipmentType; /*{
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
        var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        var server = this.name.toLocaleLowerCase().includes('srv');
        if (params[clean]) {
            this.icon = params[clean];
        }
        else if (server) {
            this.icon = "/assets/icons/equipment/serveur.png";
        }
        else {
            this.icon = "/assets/icons/equipment/default.png";
        }
    };
    EquipementTypeComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    EquipementTypeComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TableService }
    ]; };
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
    return EquipementTypeComponent;
}());
export { EquipementTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXR5cGUvZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pEO0lBT0ksaUNBQW9CLGtCQUFxQyxFQUFVLE9BQXFCO1FBQXBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFjO1FBRmpGLFFBQUcsR0FBUSxFQUFFLENBQUE7UUFHaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RELElBQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FrQjNEO1FBRUgsSUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixJQUFNLE1BQU0sR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUI7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcscUNBQXFDLENBQUM7U0FDckQ7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLEdBQUcscUNBQXFDLENBQUM7U0FDckQ7SUFFTCxDQUFDO0lBQ0QsNkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkF6Q3VDLGlCQUFpQjtnQkFBbUIsWUFBWTs7SUFOL0U7UUFBUixLQUFLLEVBQUU7O3lEQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7O3lEQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7O3lEQUF1QjtJQUh0Qix1QkFBdUI7UUFMbkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQiwrR0FBK0M7O1NBRWxELENBQUM7eUNBUTBDLGlCQUFpQixFQUFtQixZQUFZO09BUC9FLHVCQUF1QixDQWtEbkM7SUFBRCw4QkFBQztDQUFBLEFBbERELElBa0RDO1NBbERZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1lcXVpcGVtZW50LXR5cGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lcXVpcGVtZW50LXR5cGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2l6ZTogbnVtYmVyIHwgc3RyaW5nO1xuICAgIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gICAgcHVibGljIGNzczogYW55ID0ge31cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICAgICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmVxdWlwbWVudFR5cGU7IC8qe1xuICAgICAgICAgICAgXCJmaXJld2FsbFwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L2ZpcmV3YWxsbnd0LnBuZ1wiLFxuICAgICAgICAgICAgXCJuYXNcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9uYXNud3QucG5nXCIsXG4gICAgICAgICAgICBcInBjZml4ZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjZml4ZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJwY3BvcnRhYmxlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNwb3J0YWJsZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJwb3J0YWJsZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwiY2xpZW50bGVnZXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcImNsaWVudGzDqWdlclwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwib25kdWxldXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9vbmR1bGF0ZXVyLnBuZ1wiLFxuICAgICAgICAgICAgXCJzZXJ2ZXVyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvc2VydmV1ci5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmVyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvc2VydmV1ci5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmVydmlydHVlbFwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3Zwcy5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmV1cnZpcnR1ZWxcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC92cHMucG5nXCIsXG4gICAgICAgICAgICBcInZtXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvdnBzLnBuZ1wiLFxuICAgICAgICAgICAgXCJ3aWZpXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvd2lmaS5wbmdcIixcbiAgICAgICAgICAgIFwid29ya3N0YXRpb25maXhlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNmaXhlXzEucG5nXCIsXG4gICAgICAgICAgICBcIndvcmtzdGF0aW9ucG9ydGFibGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcImltcHJpbWFudGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wcmludGVyLnBuZ1wiLFxuICAgICAgICB9Ki9cblxuICAgICAgICBjb25zdCBjbGVhbjogc3RyaW5nID0gKHRoaXMudHlwZSB8fCBcIlwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpO1xuICAgICAgICBjb25zdCBzZXJ2ZXI6IGJvb2xlYW4gPSB0aGlzLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcygnc3J2Jyk7XG4gICAgICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dXG4gICAgICAgIH0gZWxzZSBpZiAoc2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3NlcnZldXIucG5nXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L2RlZmF1bHQucG5nXCI7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbn1cbiJdfQ==