import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
let OriginComponent = class OriginComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        const list = this.service.settingConfig.origin; /*[{
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
        const flter = list.filter((e) => {
            return this.icon.includes(e.label);
        });
        this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
OriginComponent.ctorParameters = () => [
    { type: TableService }
];
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
export { OriginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9vcmlnaW4vb3JpZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBSXhCLFlBQW1CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFDeEMsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O2FBZTFDO1FBQ0wsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0UsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQUVKLENBQUE7O1lBOUIrQixZQUFZOztBQUgvQjtJQUFSLEtBQUssRUFBRTs7NkNBQWM7QUFEYixlQUFlO0lBTDNCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLGlJQUFzQzs7S0FFekMsQ0FBQztxQ0FLOEIsWUFBWTtHQUovQixlQUFlLENBa0MzQjtTQWxDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpY29uLW9yaWdpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL29yaWdpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vb3JpZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3JpZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMgIHtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgcHVibGljIGljb25TcmM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLm9yaWdpbiAvKlt7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiV2ViXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9XZWIucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBSVEdcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL1BSVEcucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1haWxcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL01haWwucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlTDqWzDqXBob25lXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9UZWxlcGhvbmUucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkJvdFwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vQm90LnBuZ1wiXG4gICAgICAgIH1dOyovXG4gICAgICAgIGNvbnN0IGZsdGVyID0gbGlzdC5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbi5pbmNsdWRlcyhlLmxhYmVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaWNvblNyYyA9IGZsdGVyICYmIGZsdGVyLmxlbmd0aCAmJiBmbHRlclswXS5kYXRhID8gZmx0ZXJbMF0uZGF0YSA6ICcnO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuIl19