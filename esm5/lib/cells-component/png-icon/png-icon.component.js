import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
var PngIconComponent = /** @class */ (function () {
    function PngIconComponent() {
        this.fontSize = '24px';
        this._padding = '5px 13px';
        this._display = 'inline-flex';
        this._size = 'cover';
    }
    PngIconComponent.prototype.ngOnInit = function () {
        if (this.src) {
            this.icon.nativeElement.style.backgroundImage = "url(" + this.src + ")";
            this.icon.nativeElement.style.backgroundSize = this._size;
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = this._padding;
            if (this.color) {
                this.icon.nativeElement.style.color = this.color;
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PngIconComponent.prototype, "src", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PngIconComponent.prototype, "fontSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PngIconComponent.prototype, "color", void 0);
    __decorate([
        ViewChild('icon', { static: true }),
        __metadata("design:type", ElementRef)
    ], PngIconComponent.prototype, "icon", void 0);
    PngIconComponent = __decorate([
        Component({
            selector: 'png-icon',
            template: "<span #icon>\r\n\r\n</span>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], PngIconComponent);
    return PngIconComponent;
}());
export { PngIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG5nLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3BuZy1pY29uL3BuZy1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU85RTtJQVNJO1FBUFMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUduQixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsVUFBSyxHQUFHLE9BQU8sQ0FBQztJQUd4QixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBTyxJQUFJLENBQUMsR0FBRyxNQUFHLENBQUM7WUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0RCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3BEO1NBQ0o7SUFDTCxDQUFDO0lBdkJRO1FBQVIsS0FBSyxFQUFFOztpREFBYTtJQUNaO1FBQVIsS0FBSyxFQUFFOztzREFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7O21EQUFlO0lBQ1k7UUFBbEMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztrQ0FBTyxVQUFVO2tEQUFjO0lBSnhELGdCQUFnQjtRQUw1QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQix1Q0FBd0M7O1NBRTNDLENBQUM7O09BQ1csZ0JBQWdCLENBMEI1QjtJQUFELHVCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG5nLWljb24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BuZy1pY29uLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BuZy1pY29uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBuZ0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgc3JjOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBmb250U2l6ZSA9ICcyNHB4JztcclxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBAVmlld0NoaWxkKCdpY29uJywge3N0YXRpYzogdHJ1ZX0pIGljb246IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBfcGFkZGluZyA9ICc1cHggMTNweCc7XHJcbiAgICBwcml2YXRlIF9kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuICAgIHByaXZhdGUgX3NpemUgPSAnY292ZXInO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNyYykge1xyXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5zcmN9KWA7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gdGhpcy5fc2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2Rpc3BsYXk7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5mb250U2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5mb250U2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUucGFkZGluZyA9IHRoaXMuX3BhZGRpbmc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==