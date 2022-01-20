import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import * as database from './ngx-flags.database';
var NgxFlagsComponent = /** @class */ (function () {
    function NgxFlagsComponent() {
        this.size = 48;
        this.class = '';
        this.database = database.db;
        this.countryCode = '';
    }
    NgxFlagsComponent.prototype.ngOnChanges = function (changes) {
        this.setImage();
    };
    NgxFlagsComponent.prototype.setImage = function () {
        console.log(this.getCode());
        this.imageUrl = "assets/flags/" + this.getFlag(this.getCode()) + ".svg";
        this.style = {
            borderRadius: this.getFormat() == FORMAT.ROUND ? '9999px' : '0%',
            width: "10px",
            height: '10px',
            marginRight: '5px',
            backgroundImage: "url(\"" + this.imageUrl + "\")",
        };
        console.log(this.style);
    };
    NgxFlagsComponent.prototype.getSize = function () {
        return isNaN(+this.size) ? +SIZE[this.size.toUpperCase()] : this.size;
    };
    NgxFlagsComponent.prototype.getFormat = function () {
        return this.format ? this.format.toLowerCase() : FORMAT.NONE;
    };
    NgxFlagsComponent.prototype.getCode = function () {
        return this.country.toLowerCase();
    };
    NgxFlagsComponent.prototype.getFlag = function (code) {
        return this.database[code.toLowerCase()];
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
            template: "<div *ngIf=\"this.country\" [style]=\"this.style\" [ngClass]=\"['ngx-flag', this.class]\"></div>",
            styles: ["\n      .ngx-flag {\n        display: inline-block;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], NgxFlagsComponent);
    return NgxFlagsComponent;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFnQmpEO0lBV0U7UUFSUyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUlyQixhQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRWhCLHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQU0sQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDaEUsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGVBQWUsRUFBRSxXQUFRLElBQUksQ0FBQyxRQUFRLFFBQUk7U0FDM0MsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsT0FBTyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN4RSxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMvRCxDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLElBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUEzQ1E7UUFBUixLQUFLLEVBQUU7O3NEQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTs7cURBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7O21EQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOztvREFBb0I7SUFKakIsaUJBQWlCO1FBZDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxrR0FBNEY7cUJBRXBHLGtMQU9DO1NBRUosQ0FBQzs7T0FDVyxpQkFBaUIsQ0E2QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTdDWSxpQkFBaUI7QUErQzlCLElBQUssTUFJSjtBQUpELFdBQUssTUFBTTtJQUNULHVCQUFhLENBQUE7SUFDYix5QkFBZSxDQUFBO0lBQ2YsMkJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpJLE1BQU0sS0FBTixNQUFNLFFBSVY7QUFFRCxJQUFLLElBUUo7QUFSRCxXQUFLLElBQUk7SUFDUCw2QkFBTyxDQUFBO0lBQ1AsNEJBQU8sQ0FBQTtJQUNQLDBCQUFNLENBQUE7SUFDTiwwQkFBTSxDQUFBO0lBQ04sMEJBQU0sQ0FBQTtJQUNOLDRCQUFPLENBQUE7SUFDUCw4QkFBUSxDQUFBO0FBQ1YsQ0FBQyxFQVJJLElBQUksS0FBSixJQUFJLFFBUVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRhdGFiYXNlIGZyb20gJy4vbmd4LWZsYWdzLmRhdGFiYXNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmxhZycsXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cInRoaXMuY291bnRyeVwiIFtzdHlsZV09XCJ0aGlzLnN0eWxlXCIgW25nQ2xhc3NdPVwiWyduZ3gtZmxhZycsIHRoaXMuY2xhc3NdXCI+PC9kaXY+YCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLm5neC1mbGFnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RmxhZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBhbnkgPSA0ODtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nO1xuICBwdWJsaWMgc3R5bGU7XG4gIHB1YmxpYyBkYXRhYmFzZSA9IGRhdGFiYXNlLmRiO1xuICBwdWJsaWMgY291bnRyeUNvZGU6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgc2V0SW1hZ2UoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2codGhpcy5nZXRDb2RlKCkpO1xuICAgIHRoaXMuaW1hZ2VVcmwgPSBgYXNzZXRzL2ZsYWdzLyR7dGhpcy5nZXRGbGFnKHRoaXMuZ2V0Q29kZSgpKX0uc3ZnYDtcbiAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmdldEZvcm1hdCgpID09IEZPUk1BVC5ST1VORCA/ICc5OTk5cHgnIDogJzAlJyxcbiAgICAgIHdpZHRoOiBgMTBweGAsXG4gICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnNXB4JyxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7dGhpcy5pbWFnZVVybH1cIilgLFxuICAgIH07XG4gICAgY29uc29sZS5sb2codGhpcy5zdHlsZSk7XG4gIH1cblxuICBnZXRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGlzTmFOKCt0aGlzLnNpemUpID8gK1NJWkVbdGhpcy5zaXplLnRvVXBwZXJDYXNlKCldIDogdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0Rm9ybWF0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0ID8gdGhpcy5mb3JtYXQudG9Mb3dlckNhc2UoKSA6IEZPUk1BVC5OT05FO1xuICB9XG5cbiAgZ2V0Q29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvdW50cnkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGdldEZsYWcoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZVtjb2RlLnRvTG93ZXJDYXNlKCldO1xuICB9XG59XG5cbmVudW0gRk9STUFUIHtcbiAgTk9ORSA9ICdub25lJyxcbiAgUk9VTkQgPSAncm91bmQnLFxuICBTUVVBUkUgPSAnc3F1YXJlJyxcbn1cblxuZW51bSBTSVpFIHtcbiAgWFhTID0gOCxcbiAgWFMgPSAxNixcbiAgUyA9IDI0LFxuICBNID0gMzIsXG4gIEwgPSA0OCxcbiAgWEwgPSA2NCxcbiAgWFhMID0gOTYsXG59Il19