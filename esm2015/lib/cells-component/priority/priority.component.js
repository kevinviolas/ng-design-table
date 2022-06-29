import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TableService } from "../../table.service";
let PriorityComponent = class PriorityComponent {
    constructor(service) {
        this.service = service;
        this.label = '';
    }
    ngOnInit() {
        const list = this.service.settingConfig.priority; /*= [{
            "label": "5 - Critique (Production)",
            "data": "assets/icons/nowteam/critiqueprod.png"
        }, {
            "label": "4 - Critique",
            "data": "assets/icons/nowteam/critique.png"
        }, {
            "label": "3 - Urgente",
            "data": "assets/icons/nowteam/urgent.png"
        }, {
            "label": "2 - Normale",
            'data': "assets/icons/nowteam/normal.png"
        }, {
            "label": "1 - Basse",
            "data": "assets/icons/nowteam/basse.png"
        }];*/
        //console.log(this.icon);
        //console.log(this.iconLabel);
        this.iconSrc = "assets/icons/nowteam/" + this.icon + ".png";
        if (!this.iconLabel) {
            this.label = '';
        }
        else if (this.iconLabel.indexOf('-') == -1) {
            this.label = this.iconLabel;
        }
        else {
            this.label = this.iconLabel.split('-')[1];
        }
        switch (this.icon) {
            case 'Bleu':
                this.iconSrc = 'now-low';
                break;
            case 'Vert':
                this.iconSrc = 'now-normal';
                break;
            case 'Orange':
                this.iconSrc = 'now-urgent';
                break;
            case 'Rouge':
                this.iconSrc = 'now-critic';
                break;
            case 'Noir':
                this.iconSrc = 'now-vip';
                break;
        }
        /*if (!this.icon) {
            this.iconSrc = 'data:image/png;base64,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';
        } else {
            const data: any = list.filter((e: any) => {
                return this.icon.includes(e.label);
            });
            if (data && data.length) {
                this.iconSrc = data[0].data
            }
        }*/
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
PriorityComponent.ctorParameters = () => [
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], PriorityComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PriorityComponent.prototype, "iconLabel", void 0);
PriorityComponent = __decorate([
    Component({
        selector: 'icon-priority',
        template: "<!--<png-icon matTooltip=\"{{this.iconLabel}}\" [src]=\"this.iconSrc\"></png-icon>-->\r\n<!--<png-icon [src]=\"this.iconSrc\"></png-icon>-->\r\n<span matTooltip=\"{{this.label}}\" class=\"{{this.iconSrc}}\">\r\n    {{this.label}}\r\n</span>",
        styles: [".now-low{background:no-repeat padding-box rgba(17,150,3,.56)!important;border-radius:5px;border:none!important;color:#3c5905!important;font:14px/36px \"Nexa Text\";letter-spacing:0;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-normal{background:no-repeat padding-box rgba(170,238,230,.56)!important;border-radius:5px;border:none!important;font:14px/36px \"Nexa Text\";letter-spacing:0;color:#169d8a!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-urgent{background:no-repeat padding-box rgba(243,161,36,.56)!important;border-radius:5px;border:none!important;font:14px/36px \"Nexa Text\";letter-spacing:0;color:#c48e3b!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-critic{background:no-repeat padding-box rgba(215,5,43,.56)!important;border-radius:5px;border:none!important;font:14px/36px \"Nexa Text\";letter-spacing:0;color:#7c1c2d!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}.now-vip{background:no-repeat padding-box rgba(120,125,130,.56)!important;border-radius:5px;border:none!important;font:12px/36px \"Nexa Text\";letter-spacing:0;color:#171f26!important;min-width:100%!important;padding:0 10px;overflow:hidden;white-space:nowrap;max-width:80px!important;text-overflow:ellipsis;display:inline-block;height:36px;text-align:center}"]
    }),
    __metadata("design:paramtypes", [TableService])
], PriorityComponent);
export { PriorityComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQU0xQixZQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBRm5DLFVBQUssR0FBRyxFQUFFLENBQUM7SUFHbEIsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O2FBZTVDO1FBRUwseUJBQXlCO1FBQ3pCLDhCQUE4QjtRQUU5QixJQUFJLENBQUMsT0FBTyxHQUFHLHVCQUF1QixHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFBO1FBRXhELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDL0I7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFFRCxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7Z0JBQzdCLE1BQU07WUFDTixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQ2hDLE1BQU07WUFDTixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQ2hDLE1BQU07WUFDTixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQ2hDLE1BQU07WUFDTixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7Z0JBQzdCLE1BQU07U0FDVDtRQUVEOzs7Ozs7Ozs7V0FTRztJQUNQLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Q0FFSixDQUFBOztZQXBFaUMsWUFBWTs7QUFMakM7SUFBUixLQUFLLEVBQUU7OytDQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7O29EQUFtQjtBQUZsQixpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsNFBBQXdDOztLQUUzQyxDQUFDO3FDQU9nQyxZQUFZO0dBTmpDLGlCQUFpQixDQTBFN0I7U0ExRVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ljb24tcHJpb3JpdHknLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ByaW9yaXR5LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3ByaW9yaXR5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFByaW9yaXR5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaWNvbkxhYmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaWNvblNyYyA6IHN0cmluZztcclxuICAgIHB1YmxpYyBsYWJlbCA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZSA6IFRhYmxlU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5wcmlvcml0eSAvKj0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjUgLSBDcml0aXF1ZSAoUHJvZHVjdGlvbilcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vY3JpdGlxdWVwcm9kLnBuZ1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiNCAtIENyaXRpcXVlXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL2NyaXRpcXVlLnBuZ1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMyAtIFVyZ2VudGVcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vdXJnZW50LnBuZ1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMiAtIE5vcm1hbGVcIixcclxuICAgICAgICAgICAgJ2RhdGEnOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL25vcm1hbC5wbmdcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjEgLSBCYXNzZVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9iYXNzZS5wbmdcIlxyXG4gICAgICAgIH1dOyovXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5pY29uKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaWNvbkxhYmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5pY29uU3JjID0gXCJhc3NldHMvaWNvbnMvbm93dGVhbS9cIisgdGhpcy5pY29uK1wiLnBuZ1wiXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pY29uTGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbCA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pY29uTGFiZWwuaW5kZXhPZignLScpID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLmljb25MYWJlbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5pY29uTGFiZWwuc3BsaXQoJy0nKVsxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pY29uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0JsZXUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gJ25vdy1sb3cnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnVmVydCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcmMgPSAnbm93LW5vcm1hbCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdPcmFuZ2UnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gJ25vdy11cmdlbnQnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUm91Z2UnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gJ25vdy1jcml0aWMnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnTm9pcic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb25TcmMgPSAnbm93LXZpcCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyppZiAoIXRoaXMuaWNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmljb25TcmMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDc0FBQUF4Q0FZQUFBQkRFRkE5QUFBQUFYTlNSMElBcnM0YzZRQUFBRGhsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUFxQUNBQVFBQUFBQkFBQUFLNkFEQUFRQUFBQUJBQUFBTVFBQUFBQm5ST3JoQUFBR1ZVbEVRVlJvQmUxWWEwd1VWeFErZDNaWGdRVXhLb3Q5d0dKRWs3S2FBa2JjVlFNMHFhM1dOR0tyMXZvcXhENk1qZEUycHJGdEd1bWZ0a2tUSzIwVGt6WnBNQ2FrMU5aSFU2R05MMWhFUWFzOGRGRXBWWGxveWtOaFFWQ0JuZHR6VjJlYzNabWRXWGFXTmliZUgzUHZQZWM3NTN4ejVzeTlkNGJBS0RlTFpVbzhSQmh6Z0pDRmhOSmtBREtaRW9qRnNEY0I2RDlBU1QwRi9oRGNjWmQwZG5iZVZxTkQxSlI2ZEJPZW5KcGdOQm8rUTBLckNUWk5YNVFPOEJSMmNJTzlYN1MzdC9jcjRiV2RLRmxweUN3SjB6WUFSNzVHNXlZTnFJS2FkbERLdjlMUjhuZWx2NUx6RitpZEk5RXZDVWQyaFVhVVJTY1dRcmlqOFFuSlMveTVoRFd6OFluVFB3Y0MyL3lEaERLbm1GNEM1SVgybHNhamduM1l5TVlsSmkvbkNQZVQ0RGhRYnpRYVllS0VDZERaMVFVOHp3ZUNlZVVVcUp0UWtvNkVyekJCV01vZ2VuSnlIQWVrMEJ0QjRXSXdHT0NOTmE5RHhaRlN1SGFwRHVwT1YwRHo1WHB3SGltQjNMV3J3R1JTTG0zTWJDd0YyQ080REV0bUxZblRkdUVMdjBGd0t1M1pRbEM4NXdmSW5EOVhLdllaTzArY2hKWHIxZ2ZNTk9WaGFVZHI0d0dEajFVSWs3aWtwTW1FR29vQ0xVOXY1YTJEdkhXclJjKzl2WDFRZmVZc3hNUkVRMlJrcEZkdVRVeUFXN2U2b2FhdVhzUkpCNWpScWYzdW05L3JMZ1BDbTVZZzBZQis1cysxaTNIUDFkUkJTcm9kVnF6SkExdTZBODY3R2tUZFBNZERuQ2dVQmdSbVQ3SmFuekFLODVCN1FtUkxqTlJYOFMvNzRmQ3hNcStJWlc1NGVOZzd4cmNkMnRwdXdFeGJpbmR1TktsVDRYalRVbldFMTQzR2hkTHB1SlVHQkpYOGZsaW1TN0ltd2tjZnZBK0xYbnhlMUIwcS9VTWNLdzRJbWFtZkxJR0ppczREQ04vTVhRc2ZiOXNLa1JFUklxS28rR2Y0OWJkU2NhNDB3SFFrRUdkMVF3NCtFV3VXUGFWQUNWUmUxYkFaRTllY09TZmxnSkxlWXAwK2lJNlUxeDQvQTB0Y0hOU2ZPU0ZLVzFyYllPdUhud0JiRFRRYmhiTWNVTHFmQU4zcHJHcllJalU0WG5OMWZIbVZxNGJwR0thaTJyVmRxbWZqeXRPdTFIRXhNWUZyd005Z25pTkRsTGg3ZXlGcndlTGdpRElyUW05THlvQis1VHpsNnNsMDJBb1ppZUY3QTNnVGtDUjR4K3puTzZ0Y1NaNnhVZTg5bHphbHArTFV4ZXhoM3JOLzRxUkp4cjYrUGdHbTJ0KzVldytFR3I3VTJBaDM3dDVWeGZzcGJ4QWtnSnZFL1liYld3OXVhdmtBZkQ3dUh1TUZ1YlJIY0MzZVpxRTM0NmpZK2MwT3FEeFJJWVdvanNlTU1VRzBPUnB1ZFhlcjR2eVZ1REZ2OGxrZkdVRkdJaEJSNWdDem5Tb1FaZlBac3g0K1dqWlhhK2xwejhMNVAwOTY2M2JqMit2Vm9ESWRSNkhFaDZ3TUVZUWdQVzBXN3UyU2FsS3hXYko0RWNTT0d3ZnNNTE55eGFzcVNGOFZyc25uMkdGR04xbTJaYjYwOEdWZjd3Rm1CdytWUW8vYkRVTkRRMUJVdkRjQVNpN0c5K1ZiSnZXcFdUa3NPRWwvZno5czNQUU9ER0N2MVZqTm1xUE0wTjJEcjBjUURZbFdkclEwem1kUTNabGxUc3htTTd5N1lSTWJhcmJCd2FIZ2llSjVscWRraGVBMExHU1pzNHlNT2JCODJVckJyKzRlNjlURGUyaE9WK3ZsRzRJeitadEJvUnlYcHpJQk1KSisrYkxYOEF1ZzNWRldkbndCMmdXOVdmakh3RWMvak12b3FxNjJwaktwVGthV0VjMXkyUEtsb0pHTzQ1OUt0ajl0VFR6VmRyMXRwS2FJcDlVZUFuazNtNXN1K2h2THlCSkNzNVMyVm45RHJibkh3OE94c3FPd2I5OWV3SjhYV25EQVRMYmpaWHRIeTEvZklWamNxS1NHWVZrTnBBNzl4K3pjV2x0YkF6OFdGN211WEczcWt1cVIwWFZLeVFWQytiTWRyVTNIVUhmL3NDc0ZTY2FqVGxhSWhady8xVnRlWVZzTkJGS2oyVDlTWkdVdkdOWlJRWmJkdGtWUGh0aFoySEJ2WUdUSHFpQUN5ak5MSWJoOVVNVTVPKytxcUVOV3lUS0xKL0xOenFvTFdTRjdSRU1hNEN5c3h5ZXpsWkY5Y0piTjF1TTQ1SzFMSTZpOEREUU0vay8xSTBWV1ZnWlljTTJZdld1Nk0waEFWOTByeFplUnhhV3JVTzlPd3dKSlAwU1ZBb2NpazVIRkh4cFc1K21MK3JPaThhTTRMR1RSU1M3K0tNME54ZGxvMnp4U0w5aGpzcU5WRG84eisxOW05cUJhTUZ5SDNhaFh4ZHpmV0dpZG1wOVFkRDVsZ0VRS011MjJIQXlXcCt5TTFoazV5R1lZOXBrU0NPT0ppRW8xVVVQT2d4dFRob1VnZlVpVzB0M0NvWnY5b3pWd2tPWVREUDhuZU1hYXMrZGwyR3BaSE84dWh6ZmxpNkc3TSswelV0bDUxdUY0NWhxN01SOTlDQVNsSnZnbkVRcFFjTkFUWWZiNU9tQ2srTEZSU1V6SHNvZzNrTzEvcUdZM3hRamhreWhuVHlQVE1TTVg4V0pqUGdpRkxVeHZOTUFCVVJIaTRGOEpOaXFjZjZRZnVBQUFBQUJKUlU1RXJrSmdnZz09JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBsaXN0LmZpbHRlcigoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uLmluY2x1ZGVzKGUubGFiZWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvblNyYyA9IGRhdGFbMF0uZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19