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
            width: "10px",
            height: '10px',
            marginRight: '5px',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFnQmpEO0lBV0U7UUFSUyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUlyQixhQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRWhCLHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFNLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2hFLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsS0FBSztZQUNsQixlQUFlLEVBQUUsV0FBUSxJQUFJLENBQUMsUUFBUSxRQUFJO1NBQzNDLENBQUM7SUFDSixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLE9BQU8sS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEUsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBekNRO1FBQVIsS0FBSyxFQUFFOztzREFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7O3FEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOzttREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7b0RBQW9CO0lBSmpCLGlCQUFpQjtRQWQ3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsa0dBQTRGO3FCQUVwRyxrTEFPQztTQUVKLENBQUM7O09BQ1csaUJBQWlCLENBMkM3QjtJQUFELHdCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0EzQ1ksaUJBQWlCO0FBNkM5QixJQUFLLE1BSUo7QUFKRCxXQUFLLE1BQU07SUFDVCx1QkFBYSxDQUFBO0lBQ2IseUJBQWUsQ0FBQTtJQUNmLDJCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKSSxNQUFNLEtBQU4sTUFBTSxRQUlWO0FBRUQsSUFBSyxJQVFKO0FBUkQsV0FBSyxJQUFJO0lBQ1AsNkJBQU8sQ0FBQTtJQUNQLDRCQUFPLENBQUE7SUFDUCwwQkFBTSxDQUFBO0lBQ04sMEJBQU0sQ0FBQTtJQUNOLDBCQUFNLENBQUE7SUFDTiw0QkFBTyxDQUFBO0lBQ1AsOEJBQVEsQ0FBQTtBQUNWLENBQUMsRUFSSSxJQUFJLEtBQUosSUFBSSxRQVFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRhdGFiYXNlIGZyb20gJy4vbmd4LWZsYWdzLmRhdGFiYXNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmxhZycsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwidGhpcy5jb3VudHJ5XCIgW3N0eWxlXT1cInRoaXMuc3R5bGVcIiBbbmdDbGFzc109XCJbJ25neC1mbGFnJywgdGhpcy5jbGFzc11cIj48L2Rpdj5gLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAubmd4LWZsYWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hGbGFnc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6IGFueSA9IDQ4O1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgcHVibGljIHN0eWxlO1xyXG4gIHB1YmxpYyBkYXRhYmFzZSA9IGRhdGFiYXNlLmRiO1xyXG4gIHB1YmxpYyBjb3VudHJ5Q29kZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW1hZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLmltYWdlVXJsID0gYGFzc2V0cy9mbGFncy8ke3RoaXMuZ2V0RmxhZyh0aGlzLmdldENvZGUoKSl9LnN2Z2A7XHJcbiAgICB0aGlzLnN0eWxlID0ge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuZ2V0Rm9ybWF0KCkgPT0gRk9STUFULlJPVU5EID8gJzk5OTlweCcgOiAnMCUnLFxyXG4gICAgICB3aWR0aDogYDEwcHhgLFxyXG4gICAgICBoZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke3RoaXMuaW1hZ2VVcmx9XCIpYCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTaXplKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gaXNOYU4oK3RoaXMuc2l6ZSkgPyArU0laRVt0aGlzLnNpemUudG9VcHBlckNhc2UoKV0gOiB0aGlzLnNpemU7XHJcbiAgfVxyXG5cclxuICBnZXRGb3JtYXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdCA/IHRoaXMuZm9ybWF0LnRvTG93ZXJDYXNlKCkgOiBGT1JNQVQuTk9ORTtcclxuICB9XHJcblxyXG4gIGdldENvZGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvdW50cnkudG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIGdldEZsYWcoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlW2NvZGUudG9Mb3dlckNhc2UoKV07XHJcbiAgfVxyXG59XHJcblxyXG5lbnVtIEZPUk1BVCB7XHJcbiAgTk9ORSA9ICdub25lJyxcclxuICBST1VORCA9ICdyb3VuZCcsXHJcbiAgU1FVQVJFID0gJ3NxdWFyZScsXHJcbn1cclxuXHJcbmVudW0gU0laRSB7XHJcbiAgWFhTID0gOCxcclxuICBYUyA9IDE2LFxyXG4gIFMgPSAyNCxcclxuICBNID0gMzIsXHJcbiAgTCA9IDQ4LFxyXG4gIFhMID0gNjQsXHJcbiAgWFhMID0gOTYsXHJcbn0iXX0=