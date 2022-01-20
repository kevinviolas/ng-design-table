import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import * as database from './ngx-flags.database';
let NgxFlagsComponent = class NgxFlagsComponent {
    constructor() {
        this.size = 48;
        this.class = '';
        this.database = database.db;
        this.countryCode = '';
    }
    ngOnChanges(changes) {
        this.setImage();
    }
    setImage() {
        this.imageUrl = `assets/flags/${this.getFlag(this.getCode())}.svg`;
        this.style = {
            borderRadius: this.getFormat() == FORMAT.ROUND ? '9999px' : '0%',
            width: `10px`,
            height: '10px',
            marginRight: '5px',
            backgroundImage: `url("${this.imageUrl}")`,
        };
    }
    getSize() {
        return isNaN(+this.size) ? +SIZE[this.size.toUpperCase()] : this.size;
    }
    getFormat() {
        return this.format ? this.format.toLowerCase() : FORMAT.NONE;
    }
    getCode() {
        return this.country.toLowerCase();
    }
    getFlag(code) {
        return this.database[code.toLowerCase()];
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxFlagsComponent.prototype, "country", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxFlagsComponent.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxFlagsComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxFlagsComponent.prototype, "class", void 0);
NgxFlagsComponent = __decorate([
    Component({
        selector: 'flag',
        template: `<div *ngIf="this.country" [style]="this.style" [ngClass]="['ngx-flag', this.class]"></div>`,
        styles: [`
      .ngx-flag {
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    `]
    }),
    __metadata("design:paramtypes", [])
], NgxFlagsComponent);
export { NgxFlagsComponent };
var FORMAT;
(function (FORMAT) {
    FORMAT["NONE"] = "none";
    FORMAT["ROUND"] = "round";
    FORMAT["SQUARE"] = "square";
})(FORMAT || (FORMAT = {}));
var SIZE;
(function (SIZE) {
    SIZE[SIZE["XXS"] = 8] = "XXS";
    SIZE[SIZE["XS"] = 16] = "XS";
    SIZE[SIZE["S"] = 24] = "S";
    SIZE[SIZE["M"] = 32] = "M";
    SIZE[SIZE["L"] = 48] = "L";
    SIZE[SIZE["XL"] = 64] = "XL";
    SIZE[SIZE["XXL"] = 96] = "XXL";
})(SIZE || (SIZE = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFnQmpELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBVzVCO1FBUlMsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLFVBQUssR0FBVyxFQUFFLENBQUM7UUFJckIsYUFBUSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUVoQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNoRSxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFLEtBQUs7WUFDbEIsZUFBZSxFQUFFLFFBQVEsSUFBSSxDQUFDLFFBQVEsSUFBSTtTQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hFLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGLENBQUE7QUExQ1U7SUFBUixLQUFLLEVBQUU7O2tEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTs7aURBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7OytDQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFOztnREFBb0I7QUFKakIsaUJBQWlCO0lBZDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSw0RkFBNEY7aUJBRXBHOzs7Ozs7O0tBT0M7S0FFSixDQUFDOztHQUNXLGlCQUFpQixDQTJDN0I7U0EzQ1ksaUJBQWlCO0FBNkM5QixJQUFLLE1BSUo7QUFKRCxXQUFLLE1BQU07SUFDVCx1QkFBYSxDQUFBO0lBQ2IseUJBQWUsQ0FBQTtJQUNmLDJCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKSSxNQUFNLEtBQU4sTUFBTSxRQUlWO0FBRUQsSUFBSyxJQVFKO0FBUkQsV0FBSyxJQUFJO0lBQ1AsNkJBQU8sQ0FBQTtJQUNQLDRCQUFPLENBQUE7SUFDUCwwQkFBTSxDQUFBO0lBQ04sMEJBQU0sQ0FBQTtJQUNOLDBCQUFNLENBQUE7SUFDTiw0QkFBTyxDQUFBO0lBQ1AsOEJBQVEsQ0FBQTtBQUNWLENBQUMsRUFSSSxJQUFJLEtBQUosSUFBSSxRQVFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkYXRhYmFzZSBmcm9tICcuL25neC1mbGFncy5kYXRhYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZsYWcnLFxuICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJ0aGlzLmNvdW50cnlcIiBbc3R5bGVdPVwidGhpcy5zdHlsZVwiIFtuZ0NsYXNzXT1cIlsnbmd4LWZsYWcnLCB0aGlzLmNsYXNzXVwiPjwvZGl2PmAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5uZ3gtZmxhZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEZsYWdzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogYW55ID0gNDg7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcblxuICBwdWJsaWMgaW1hZ2VVcmw6IHN0cmluZztcbiAgcHVibGljIHN0eWxlO1xuICBwdWJsaWMgZGF0YWJhc2UgPSBkYXRhYmFzZS5kYjtcbiAgcHVibGljIGNvdW50cnlDb2RlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIHNldEltYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuaW1hZ2VVcmwgPSBgYXNzZXRzL2ZsYWdzLyR7dGhpcy5nZXRGbGFnKHRoaXMuZ2V0Q29kZSgpKX0uc3ZnYDtcbiAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmdldEZvcm1hdCgpID09IEZPUk1BVC5ST1VORCA/ICc5OTk5cHgnIDogJzAlJyxcbiAgICAgIHdpZHRoOiBgMTBweGAsXG4gICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnNXB4JyxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7dGhpcy5pbWFnZVVybH1cIilgLFxuICAgIH07XG4gIH1cblxuICBnZXRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGlzTmFOKCt0aGlzLnNpemUpID8gK1NJWkVbdGhpcy5zaXplLnRvVXBwZXJDYXNlKCldIDogdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0Rm9ybWF0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0ID8gdGhpcy5mb3JtYXQudG9Mb3dlckNhc2UoKSA6IEZPUk1BVC5OT05FO1xuICB9XG5cbiAgZ2V0Q29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvdW50cnkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGdldEZsYWcoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZVtjb2RlLnRvTG93ZXJDYXNlKCldO1xuICB9XG59XG5cbmVudW0gRk9STUFUIHtcbiAgTk9ORSA9ICdub25lJyxcbiAgUk9VTkQgPSAncm91bmQnLFxuICBTUVVBUkUgPSAnc3F1YXJlJyxcbn1cblxuZW51bSBTSVpFIHtcbiAgWFhTID0gOCxcbiAgWFMgPSAxNixcbiAgUyA9IDI0LFxuICBNID0gMzIsXG4gIEwgPSA0OCxcbiAgWEwgPSA2NCxcbiAgWFhMID0gOTYsXG59Il19