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
        template: `<div *ngIf="this.countryCode" [style]="this.style" [ngClass]="['ngx-flag', this.class]"></div>`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFnQmpELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBVzVCO1FBUlMsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLFVBQUssR0FBVyxFQUFFLENBQUM7UUFJckIsYUFBUSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUVoQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNoRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUk7WUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJO1lBQ3pHLGVBQWUsRUFBRSxRQUFRLElBQUksQ0FBQyxRQUFRLElBQUk7U0FDM0MsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN4RSxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMvRCxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRixDQUFBO0FBekNVO0lBQVIsS0FBSyxFQUFFOztrREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7O2lEQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFOzsrQ0FBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTs7Z0RBQW9CO0FBSmpCLGlCQUFpQjtJQWQ3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsZ0dBQWdHO2lCQUV4Rzs7Ozs7OztLQU9DO0tBRUosQ0FBQzs7R0FDVyxpQkFBaUIsQ0EwQzdCO1NBMUNZLGlCQUFpQjtBQTRDOUIsSUFBSyxNQUlKO0FBSkQsV0FBSyxNQUFNO0lBQ1QsdUJBQWEsQ0FBQTtJQUNiLHlCQUFlLENBQUE7SUFDZiwyQkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSkksTUFBTSxLQUFOLE1BQU0sUUFJVjtBQUVELElBQUssSUFRSjtBQVJELFdBQUssSUFBSTtJQUNQLDZCQUFPLENBQUE7SUFDUCw0QkFBTyxDQUFBO0lBQ1AsMEJBQU0sQ0FBQTtJQUNOLDBCQUFNLENBQUE7SUFDTiwwQkFBTSxDQUFBO0lBQ04sNEJBQU8sQ0FBQTtJQUNQLDhCQUFRLENBQUE7QUFDVixDQUFDLEVBUkksSUFBSSxLQUFKLElBQUksUUFRUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0YWJhc2UgZnJvbSAnLi9uZ3gtZmxhZ3MuZGF0YWJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbGFnJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwidGhpcy5jb3VudHJ5Q29kZVwiIFtzdHlsZV09XCJ0aGlzLnN0eWxlXCIgW25nQ2xhc3NdPVwiWyduZ3gtZmxhZycsIHRoaXMuY2xhc3NdXCI+PC9kaXY+YCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLm5neC1mbGFnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RmxhZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBhbnkgPSA0ODtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nO1xuICBwdWJsaWMgc3R5bGU7XG4gIHB1YmxpYyBkYXRhYmFzZSA9IGRhdGFiYXNlLmRiO1xuICBwdWJsaWMgY291bnRyeUNvZGU6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgc2V0SW1hZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5pbWFnZVVybCA9IGBhc3NldHMvZmxhZ3MvJHt0aGlzLmdldEZsYWcodGhpcy5nZXRDb2RlKCkpfS5zdmdgO1xuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuZ2V0Rm9ybWF0KCkgPT0gRk9STUFULlJPVU5EID8gJzk5OTlweCcgOiAnMCUnLFxuICAgICAgd2lkdGg6IGAke3RoaXMuZ2V0U2l6ZSgpfXB4YCxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRGb3JtYXQoKSA9PSBGT1JNQVQuTk9ORSA/IGAke01hdGguZmxvb3IodGhpcy5nZXRTaXplKCkgLyAxLjUpfXB4YCA6IGAke3RoaXMuZ2V0U2l6ZSgpfXB4YCxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7dGhpcy5pbWFnZVVybH1cIilgLFxuICAgIH07XG4gIH1cblxuICBnZXRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGlzTmFOKCt0aGlzLnNpemUpID8gK1NJWkVbdGhpcy5zaXplLnRvVXBwZXJDYXNlKCldIDogdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0Rm9ybWF0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0ID8gdGhpcy5mb3JtYXQudG9Mb3dlckNhc2UoKSA6IEZPUk1BVC5OT05FO1xuICB9XG5cbiAgZ2V0Q29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvdW50cnkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGdldEZsYWcoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZVtjb2RlLnRvTG93ZXJDYXNlKCldO1xuICB9XG59XG5cbmVudW0gRk9STUFUIHtcbiAgTk9ORSA9ICdub25lJyxcbiAgUk9VTkQgPSAncm91bmQnLFxuICBTUVVBUkUgPSAnc3F1YXJlJyxcbn1cblxuZW51bSBTSVpFIHtcbiAgWFhTID0gOCxcbiAgWFMgPSAxNixcbiAgUyA9IDI0LFxuICBNID0gMzIsXG4gIEwgPSA0OCxcbiAgWEwgPSA2NCxcbiAgWFhMID0gOTYsXG59Il19