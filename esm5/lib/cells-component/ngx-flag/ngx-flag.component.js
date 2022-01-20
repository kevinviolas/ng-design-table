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
        this.imageUrl = "assets/flags/" + this.getFlag(this.getCode()) + ".svg";
        this.style = {
            borderRadius: this.getFormat() == FORMAT.ROUND ? '9999px' : '0%',
            width: this.getSize() + "px",
            height: this.getFormat() == FORMAT.NONE ? Math.floor(this.getSize() / 1.5) + "px" : this.getSize() + "px",
            backgroundImage: "url(\"" + this.imageUrl + "\")",
        };
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
            template: "<div *ngIf=\"this.countryCode\" [style]=\"this.style\" [ngClass]=\"['ngx-flag', this.class]\"></div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFnQmpEO0lBV0U7UUFSUyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUlyQixhQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRWhCLHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFNLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2hFLEtBQUssRUFBSyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQUk7WUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBSSxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQUk7WUFDekcsZUFBZSxFQUFFLFdBQVEsSUFBSSxDQUFDLFFBQVEsUUFBSTtTQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxPQUFPLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hFLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsSUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQXhDUTtRQUFSLEtBQUssRUFBRTs7c0RBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFOztxREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7bURBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7O29EQUFvQjtJQUpqQixpQkFBaUI7UUFkN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLHNHQUFnRztxQkFFeEcsa0xBT0M7U0FFSixDQUFDOztPQUNXLGlCQUFpQixDQTBDN0I7SUFBRCx3QkFBQztDQUFBLEFBMUNELElBMENDO1NBMUNZLGlCQUFpQjtBQTRDOUIsSUFBSyxNQUlKO0FBSkQsV0FBSyxNQUFNO0lBQ1QsdUJBQWEsQ0FBQTtJQUNiLHlCQUFlLENBQUE7SUFDZiwyQkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSkksTUFBTSxLQUFOLE1BQU0sUUFJVjtBQUVELElBQUssSUFRSjtBQVJELFdBQUssSUFBSTtJQUNQLDZCQUFPLENBQUE7SUFDUCw0QkFBTyxDQUFBO0lBQ1AsMEJBQU0sQ0FBQTtJQUNOLDBCQUFNLENBQUE7SUFDTiwwQkFBTSxDQUFBO0lBQ04sNEJBQU8sQ0FBQTtJQUNQLDhCQUFRLENBQUE7QUFDVixDQUFDLEVBUkksSUFBSSxLQUFKLElBQUksUUFRUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0YWJhc2UgZnJvbSAnLi9uZ3gtZmxhZ3MuZGF0YWJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbGFnJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwidGhpcy5jb3VudHJ5Q29kZVwiIFtzdHlsZV09XCJ0aGlzLnN0eWxlXCIgW25nQ2xhc3NdPVwiWyduZ3gtZmxhZycsIHRoaXMuY2xhc3NdXCI+PC9kaXY+YCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLm5neC1mbGFnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RmxhZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBhbnkgPSA0ODtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nO1xuICBwdWJsaWMgc3R5bGU7XG4gIHB1YmxpYyBkYXRhYmFzZSA9IGRhdGFiYXNlLmRiO1xuICBwdWJsaWMgY291bnRyeUNvZGU6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zZXRJbWFnZSgpO1xuICB9XG5cbiAgc2V0SW1hZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5pbWFnZVVybCA9IGBhc3NldHMvZmxhZ3MvJHt0aGlzLmdldEZsYWcodGhpcy5nZXRDb2RlKCkpfS5zdmdgO1xuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuZ2V0Rm9ybWF0KCkgPT0gRk9STUFULlJPVU5EID8gJzk5OTlweCcgOiAnMCUnLFxuICAgICAgd2lkdGg6IGAke3RoaXMuZ2V0U2l6ZSgpfXB4YCxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRGb3JtYXQoKSA9PSBGT1JNQVQuTk9ORSA/IGAke01hdGguZmxvb3IodGhpcy5nZXRTaXplKCkgLyAxLjUpfXB4YCA6IGAke3RoaXMuZ2V0U2l6ZSgpfXB4YCxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7dGhpcy5pbWFnZVVybH1cIilgLFxuICAgIH07XG4gIH1cblxuICBnZXRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGlzTmFOKCt0aGlzLnNpemUpID8gK1NJWkVbdGhpcy5zaXplLnRvVXBwZXJDYXNlKCldIDogdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0Rm9ybWF0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0ID8gdGhpcy5mb3JtYXQudG9Mb3dlckNhc2UoKSA6IEZPUk1BVC5OT05FO1xuICB9XG5cbiAgZ2V0Q29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvdW50cnkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGdldEZsYWcoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZVtjb2RlLnRvTG93ZXJDYXNlKCldO1xuICB9XG59XG5cbmVudW0gRk9STUFUIHtcbiAgTk9ORSA9ICdub25lJyxcbiAgUk9VTkQgPSAncm91bmQnLFxuICBTUVVBUkUgPSAnc3F1YXJlJyxcbn1cblxuZW51bSBTSVpFIHtcbiAgWFhTID0gOCxcbiAgWFMgPSAxNixcbiAgUyA9IDI0LFxuICBNID0gMzIsXG4gIEwgPSA0OCxcbiAgWEwgPSA2NCxcbiAgWFhMID0gOTYsXG59Il19