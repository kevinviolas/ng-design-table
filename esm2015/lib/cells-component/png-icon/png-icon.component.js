import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
let PngIconComponent = class PngIconComponent {
    constructor() {
        this.fontSize = '24px';
        this._padding = '5px';
        this._display = 'inline-flex';
        this._size = 'cover';
    }
    ngOnInit() {
        if (this.src) {
            this.icon.nativeElement.style.backgroundImage = `url(${this.src})`;
            this.icon.nativeElement.style.backgroundSize = this._size;
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = this._padding;
            if (this.color) {
                this.icon.nativeElement.style.color = this.color;
            }
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
        template: "<span #icon>\n\n</span>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], PngIconComponent);
export { PngIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG5nLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3BuZy1pY29uL3BuZy1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU85RSxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQVN6QjtRQVBTLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLFVBQUssR0FBRyxPQUFPLENBQUM7SUFHeEIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNwRDtTQUNKO0lBQ0wsQ0FBQztDQUVKLENBQUE7QUF6Qlk7SUFBUixLQUFLLEVBQUU7OzZDQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7O2tEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTs7K0NBQWU7QUFDWTtJQUFsQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDOzhCQUFPLFVBQVU7OENBQWM7QUFKeEQsZ0JBQWdCO0lBTDVCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLG1DQUF3Qzs7S0FFM0MsQ0FBQzs7R0FDVyxnQkFBZ0IsQ0EwQjVCO1NBMUJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BuZy1pY29uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcG5nLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BuZy1pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG5nSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZm9udFNpemUgPSAnMjRweCc7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgICBAVmlld0NoaWxkKCdpY29uJywge3N0YXRpYzogdHJ1ZX0pIGljb246IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgX3BhZGRpbmcgPSAnNXB4JztcbiAgICBwcml2YXRlIF9kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgICBwcml2YXRlIF9zaXplID0gJ2NvdmVyJztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLnNyY30pYDtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gdGhpcy5fc2l6ZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9kaXNwbGF5O1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5mb250U2l6ZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSB0aGlzLl9wYWRkaW5nO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==