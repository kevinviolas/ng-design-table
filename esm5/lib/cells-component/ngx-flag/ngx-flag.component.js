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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25neC1mbGFnL25neC1mbGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFnQmpEO0lBV0U7UUFSUyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUlyQixhQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRWhCLHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQU0sQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDaEUsS0FBSyxFQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBSTtZQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFJLENBQUMsQ0FBQyxDQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBSTtZQUN6RyxlQUFlLEVBQUUsV0FBUSxJQUFJLENBQUMsUUFBUSxRQUFJO1NBQzNDLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLE9BQU8sS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEUsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBMUNRO1FBQVIsS0FBSyxFQUFFOztzREFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7O3FEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOzttREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7b0RBQW9CO0lBSmpCLGlCQUFpQjtRQWQ3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsa0dBQTRGO3FCQUVwRyxrTEFPQztTQUVKLENBQUM7O09BQ1csaUJBQWlCLENBNEM3QjtJQUFELHdCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0E1Q1ksaUJBQWlCO0FBOEM5QixJQUFLLE1BSUo7QUFKRCxXQUFLLE1BQU07SUFDVCx1QkFBYSxDQUFBO0lBQ2IseUJBQWUsQ0FBQTtJQUNmLDJCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKSSxNQUFNLEtBQU4sTUFBTSxRQUlWO0FBRUQsSUFBSyxJQVFKO0FBUkQsV0FBSyxJQUFJO0lBQ1AsNkJBQU8sQ0FBQTtJQUNQLDRCQUFPLENBQUE7SUFDUCwwQkFBTSxDQUFBO0lBQ04sMEJBQU0sQ0FBQTtJQUNOLDBCQUFNLENBQUE7SUFDTiw0QkFBTyxDQUFBO0lBQ1AsOEJBQVEsQ0FBQTtBQUNWLENBQUMsRUFSSSxJQUFJLEtBQUosSUFBSSxRQVFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkYXRhYmFzZSBmcm9tICcuL25neC1mbGFncy5kYXRhYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZsYWcnLFxuICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJ0aGlzLmNvdW50cnlcIiBbc3R5bGVdPVwidGhpcy5zdHlsZVwiIFtuZ0NsYXNzXT1cIlsnbmd4LWZsYWcnLCB0aGlzLmNsYXNzXVwiPjwvZGl2PmAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5uZ3gtZmxhZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEZsYWdzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogYW55ID0gNDg7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcblxuICBwdWJsaWMgaW1hZ2VVcmw6IHN0cmluZztcbiAgcHVibGljIHN0eWxlO1xuICBwdWJsaWMgZGF0YWJhc2UgPSBkYXRhYmFzZS5kYjtcbiAgcHVibGljIGNvdW50cnlDb2RlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0SW1hZ2UoKTtcbiAgfVxuXG4gIHNldEltYWdlKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0Q29kZSgpKTtcbiAgICB0aGlzLmltYWdlVXJsID0gYGFzc2V0cy9mbGFncy8ke3RoaXMuZ2V0RmxhZyh0aGlzLmdldENvZGUoKSl9LnN2Z2A7XG4gICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5nZXRGb3JtYXQoKSA9PSBGT1JNQVQuUk9VTkQgPyAnOTk5OXB4JyA6ICcwJScsXG4gICAgICB3aWR0aDogYCR7dGhpcy5nZXRTaXplKCl9cHhgLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEZvcm1hdCgpID09IEZPUk1BVC5OT05FID8gYCR7TWF0aC5mbG9vcih0aGlzLmdldFNpemUoKSAvIDEuNSl9cHhgIDogYCR7dGhpcy5nZXRTaXplKCl9cHhgLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHt0aGlzLmltYWdlVXJsfVwiKWAsXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0eWxlKTtcbiAgfVxuXG4gIGdldFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gaXNOYU4oK3RoaXMuc2l6ZSkgPyArU0laRVt0aGlzLnNpemUudG9VcHBlckNhc2UoKV0gOiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXRGb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQgPyB0aGlzLmZvcm1hdC50b0xvd2VyQ2FzZSgpIDogRk9STUFULk5PTkU7XG4gIH1cblxuICBnZXRDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY291bnRyeS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgZ2V0RmxhZyhjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlW2NvZGUudG9Mb3dlckNhc2UoKV07XG4gIH1cbn1cblxuZW51bSBGT1JNQVQge1xuICBOT05FID0gJ25vbmUnLFxuICBST1VORCA9ICdyb3VuZCcsXG4gIFNRVUFSRSA9ICdzcXVhcmUnLFxufVxuXG5lbnVtIFNJWkUge1xuICBYWFMgPSA4LFxuICBYUyA9IDE2LFxuICBTID0gMjQsXG4gIE0gPSAzMixcbiAgTCA9IDQ4LFxuICBYTCA9IDY0LFxuICBYWEwgPSA5Nixcbn0iXX0=