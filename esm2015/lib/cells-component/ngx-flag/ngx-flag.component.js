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
            width: `${this.getSize()}px`,
            height: this.getFormat() == FORMAT.NONE ? `${Math.floor(this.getSize() / 1.5)}px` : `${this.getSize()}px`,
            backgroundImage: `url("${this.imageUrl}")`,
        };
        console.log(this.style);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFnQmpELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBVzVCO1FBUlMsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLFVBQUssR0FBVyxFQUFFLENBQUM7UUFJckIsYUFBUSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUVoQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNoRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUk7WUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJO1lBQ3pHLGVBQWUsRUFBRSxRQUFRLElBQUksQ0FBQyxRQUFRLElBQUk7U0FDM0MsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN4RSxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMvRCxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRixDQUFBO0FBMUNVO0lBQVIsS0FBSyxFQUFFOztrREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7O2lEQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFOzsrQ0FBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTs7Z0RBQW9CO0FBSmpCLGlCQUFpQjtJQWQ3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsNEZBQTRGO2lCQUVwRzs7Ozs7OztLQU9DO0tBRUosQ0FBQzs7R0FDVyxpQkFBaUIsQ0EyQzdCO1NBM0NZLGlCQUFpQjtBQTZDOUIsSUFBSyxNQUlKO0FBSkQsV0FBSyxNQUFNO0lBQ1QsdUJBQWEsQ0FBQTtJQUNiLHlCQUFlLENBQUE7SUFDZiwyQkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSkksTUFBTSxLQUFOLE1BQU0sUUFJVjtBQUVELElBQUssSUFRSjtBQVJELFdBQUssSUFBSTtJQUNQLDZCQUFPLENBQUE7SUFDUCw0QkFBTyxDQUFBO0lBQ1AsMEJBQU0sQ0FBQTtJQUNOLDBCQUFNLENBQUE7SUFDTiwwQkFBTSxDQUFBO0lBQ04sNEJBQU8sQ0FBQTtJQUNQLDhCQUFRLENBQUE7QUFDVixDQUFDLEVBUkksSUFBSSxLQUFKLElBQUksUUFRUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0YWJhc2UgZnJvbSAnLi9uZ3gtZmxhZ3MuZGF0YWJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbGFnJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwidGhpcy5jb3VudHJ5XCIgW3N0eWxlXT1cInRoaXMuc3R5bGVcIiBbbmdDbGFzc109XCJbJ25neC1mbGFnJywgdGhpcy5jbGFzc11cIj48L2Rpdj5gLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAubmd4LWZsYWcge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hGbGFnc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IGFueSA9IDQ4O1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XG5cbiAgcHVibGljIGltYWdlVXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBzdHlsZTtcbiAgcHVibGljIGRhdGFiYXNlID0gZGF0YWJhc2UuZGI7XG4gIHB1YmxpYyBjb3VudHJ5Q29kZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBzZXRJbWFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLmltYWdlVXJsID0gYGFzc2V0cy9mbGFncy8ke3RoaXMuZ2V0RmxhZyh0aGlzLmdldENvZGUoKSl9LnN2Z2A7XG4gICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5nZXRGb3JtYXQoKSA9PSBGT1JNQVQuUk9VTkQgPyAnOTk5OXB4JyA6ICcwJScsXG4gICAgICB3aWR0aDogYCR7dGhpcy5nZXRTaXplKCl9cHhgLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEZvcm1hdCgpID09IEZPUk1BVC5OT05FID8gYCR7TWF0aC5mbG9vcih0aGlzLmdldFNpemUoKSAvIDEuNSl9cHhgIDogYCR7dGhpcy5nZXRTaXplKCl9cHhgLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHt0aGlzLmltYWdlVXJsfVwiKWAsXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0eWxlKTtcbiAgfVxuXG4gIGdldFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaXNOYU4oK3RoaXMuc2l6ZSkgPyArU0laRVt0aGlzLnNpemUudG9VcHBlckNhc2UoKV0gOiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXRGb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQgPyB0aGlzLmZvcm1hdC50b0xvd2VyQ2FzZSgpIDogRk9STUFULk5PTkU7XG4gIH1cblxuICBnZXRDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY291bnRyeS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgZ2V0RmxhZyhjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlW2NvZGUudG9Mb3dlckNhc2UoKV07XG4gIH1cbn1cblxuZW51bSBGT1JNQVQge1xuICBOT05FID0gJ25vbmUnLFxuICBST1VORCA9ICdyb3VuZCcsXG4gIFNRVUFSRSA9ICdzcXVhcmUnLFxufVxuXG5lbnVtIFNJWkUge1xuICBYWFMgPSA4LFxuICBYUyA9IDE2LFxuICBTID0gMjQsXG4gIE0gPSAzMixcbiAgTCA9IDQ4LFxuICBYTCA9IDY0LFxuICBYWEwgPSA5Nixcbn0iXX0=