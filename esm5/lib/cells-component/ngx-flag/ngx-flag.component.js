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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFnQmpEO0lBV0U7UUFSUyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUlyQixhQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRWhCLHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFNLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2hFLEtBQUssRUFBSyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQUk7WUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBSSxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQUk7WUFDekcsZUFBZSxFQUFFLFdBQVEsSUFBSSxDQUFDLFFBQVEsUUFBSTtTQUMzQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxPQUFPLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hFLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsSUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQXpDUTtRQUFSLEtBQUssRUFBRTs7c0RBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFOztxREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7bURBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7O29EQUFvQjtJQUpqQixpQkFBaUI7UUFkN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLGtHQUE0RjtxQkFFcEcsa0xBT0M7U0FFSixDQUFDOztPQUNXLGlCQUFpQixDQTJDN0I7SUFBRCx3QkFBQztDQUFBLEFBM0NELElBMkNDO1NBM0NZLGlCQUFpQjtBQTZDOUIsSUFBSyxNQUlKO0FBSkQsV0FBSyxNQUFNO0lBQ1QsdUJBQWEsQ0FBQTtJQUNiLHlCQUFlLENBQUE7SUFDZiwyQkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSkksTUFBTSxLQUFOLE1BQU0sUUFJVjtBQUVELElBQUssSUFRSjtBQVJELFdBQUssSUFBSTtJQUNQLDZCQUFPLENBQUE7SUFDUCw0QkFBTyxDQUFBO0lBQ1AsMEJBQU0sQ0FBQTtJQUNOLDBCQUFNLENBQUE7SUFDTiwwQkFBTSxDQUFBO0lBQ04sNEJBQU8sQ0FBQTtJQUNQLDhCQUFRLENBQUE7QUFDVixDQUFDLEVBUkksSUFBSSxLQUFKLElBQUksUUFRUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0YWJhc2UgZnJvbSAnLi9uZ3gtZmxhZ3MuZGF0YWJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbGFnJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwidGhpcy5jb3VudHJ5XCIgW3N0eWxlXT1cInRoaXMuc3R5bGVcIiBbbmdDbGFzc109XCJbJ25neC1mbGFnJywgdGhpcy5jbGFzc11cIj48L2Rpdj5gLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAubmd4LWZsYWcge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hGbGFnc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IGFueSA9IDQ4O1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XG5cbiAgcHVibGljIGltYWdlVXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBzdHlsZTtcbiAgcHVibGljIGRhdGFiYXNlID0gZGF0YWJhc2UuZGI7XG4gIHB1YmxpYyBjb3VudHJ5Q29kZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBzZXRJbWFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLmltYWdlVXJsID0gYGFzc2V0cy9mbGFncy8ke3RoaXMuZ2V0RmxhZyh0aGlzLmdldENvZGUoKSl9LnN2Z2A7XG4gICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5nZXRGb3JtYXQoKSA9PSBGT1JNQVQuUk9VTkQgPyAnOTk5OXB4JyA6ICcwJScsXG4gICAgICB3aWR0aDogYCR7dGhpcy5nZXRTaXplKCl9cHhgLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEZvcm1hdCgpID09IEZPUk1BVC5OT05FID8gYCR7TWF0aC5mbG9vcih0aGlzLmdldFNpemUoKSAvIDEuNSl9cHhgIDogYCR7dGhpcy5nZXRTaXplKCl9cHhgLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHt0aGlzLmltYWdlVXJsfVwiKWAsXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0eWxlKTtcbiAgfVxuXG4gIGdldFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaXNOYU4oK3RoaXMuc2l6ZSkgPyArU0laRVt0aGlzLnNpemUudG9VcHBlckNhc2UoKV0gOiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXRGb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQgPyB0aGlzLmZvcm1hdC50b0xvd2VyQ2FzZSgpIDogRk9STUFULk5PTkU7XG4gIH1cblxuICBnZXRDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY291bnRyeS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgZ2V0RmxhZyhjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlW2NvZGUudG9Mb3dlckNhc2UoKV07XG4gIH1cbn1cblxuZW51bSBGT1JNQVQge1xuICBOT05FID0gJ25vbmUnLFxuICBST1VORCA9ICdyb3VuZCcsXG4gIFNRVUFSRSA9ICdzcXVhcmUnLFxufVxuXG5lbnVtIFNJWkUge1xuICBYWFMgPSA4LFxuICBYUyA9IDE2LFxuICBTID0gMjQsXG4gIE0gPSAzMixcbiAgTCA9IDQ4LFxuICBYTCA9IDY0LFxuICBYWEwgPSA5Nixcbn0iXX0=