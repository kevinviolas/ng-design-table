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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFnQmpELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBVzVCO1FBUlMsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLFVBQUssR0FBVyxFQUFFLENBQUM7UUFJckIsYUFBUSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUVoQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNoRSxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFLEtBQUs7WUFDbEIsZUFBZSxFQUFFLFFBQVEsSUFBSSxDQUFDLFFBQVEsSUFBSTtTQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hFLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGLENBQUE7QUExQ1U7SUFBUixLQUFLLEVBQUU7O2tEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTs7aURBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7OytDQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFOztnREFBb0I7QUFKakIsaUJBQWlCO0lBZDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSw0RkFBNEY7aUJBRXBHOzs7Ozs7O0tBT0M7S0FFSixDQUFDOztHQUNXLGlCQUFpQixDQTJDN0I7U0EzQ1ksaUJBQWlCO0FBNkM5QixJQUFLLE1BSUo7QUFKRCxXQUFLLE1BQU07SUFDVCx1QkFBYSxDQUFBO0lBQ2IseUJBQWUsQ0FBQTtJQUNmLDJCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKSSxNQUFNLEtBQU4sTUFBTSxRQUlWO0FBRUQsSUFBSyxJQVFKO0FBUkQsV0FBSyxJQUFJO0lBQ1AsNkJBQU8sQ0FBQTtJQUNQLDRCQUFPLENBQUE7SUFDUCwwQkFBTSxDQUFBO0lBQ04sMEJBQU0sQ0FBQTtJQUNOLDBCQUFNLENBQUE7SUFDTiw0QkFBTyxDQUFBO0lBQ1AsOEJBQVEsQ0FBQTtBQUNWLENBQUMsRUFSSSxJQUFJLEtBQUosSUFBSSxRQVFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRhdGFiYXNlIGZyb20gJy4vbmd4LWZsYWdzLmRhdGFiYXNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmxhZycsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwidGhpcy5jb3VudHJ5XCIgW3N0eWxlXT1cInRoaXMuc3R5bGVcIiBbbmdDbGFzc109XCJbJ25neC1mbGFnJywgdGhpcy5jbGFzc11cIj48L2Rpdj5gLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAubmd4LWZsYWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hGbGFnc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IGFueSA9IDQ4O1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgcHVibGljIHN0eWxlO1xyXG4gIHB1YmxpYyBkYXRhYmFzZSA9IGRhdGFiYXNlLmRiO1xyXG4gIHB1YmxpYyBjb3VudHJ5Q29kZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW1hZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmltYWdlVXJsID0gYGFzc2V0cy9mbGFncy8ke3RoaXMuZ2V0RmxhZyh0aGlzLmdldENvZGUoKSl9LnN2Z2A7XHJcbiAgICB0aGlzLnN0eWxlID0ge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuZ2V0Rm9ybWF0KCkgPT0gRk9STUFULlJPVU5EID8gJzk5OTlweCcgOiAnMCUnLFxyXG4gICAgICB3aWR0aDogYDEwcHhgLFxyXG4gICAgICBoZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke3RoaXMuaW1hZ2VVcmx9XCIpYCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTaXplKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gaXNOYU4oK3RoaXMuc2l6ZSkgPyArU0laRVt0aGlzLnNpemUudG9VcHBlckNhc2UoKV0gOiB0aGlzLnNpemU7XHJcbiAgfVxyXG5cclxuICBnZXRGb3JtYXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdCA/IHRoaXMuZm9ybWF0LnRvTG93ZXJDYXNlKCkgOiBGT1JNQVQuTk9ORTtcclxuICB9XHJcblxyXG4gIGdldENvZGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvdW50cnkudG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIGdldEZsYWcoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlW2NvZGUudG9Mb3dlckNhc2UoKV07XHJcbiAgfVxyXG59XHJcblxyXG5lbnVtIEZPUk1BVCB7XHJcbiAgTk9ORSA9ICdub25lJyxcclxuICBST1VORCA9ICdyb3VuZCcsXHJcbiAgU1FVQVJFID0gJ3NxdWFyZScsXHJcbn1cclxuXHJcbmVudW0gU0laRSB7XHJcbiAgWFhTID0gOCxcclxuICBYUyA9IDE2LFxyXG4gIFMgPSAyNCxcclxuICBNID0gMzIsXHJcbiAgTCA9IDQ4LFxyXG4gIFhMID0gNjQsXHJcbiAgWFhMID0gOTYsXHJcbn0iXX0=