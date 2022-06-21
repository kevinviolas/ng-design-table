import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TableService } from "../../table.service";
let NameAvatarComponent = class NameAvatarComponent {
    constructor(service) {
        this.service = service;
        this.fontSize = '44px';
        this.textSize = '14px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    ngOnInit() {
        if (this.src && !this.src.includes('assets')) {
            let deg = Math.random() * (10 - 360) + 10;
            /*this.icon.nativeElement.style.backgroundImage = this.service.settingConfig.nameAvatarBackgroundColor; /*`linear-gradient(${deg}deg, #9d107d,
                                                             #8b3391, #7647a0, #5f56a8, #4862ab)`;*/
            this.icon.nativeElement.style.background = '#C2C8D5 0% 0% no-repeat padding-box';
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize || '44px';
            this.icon.nativeElement.style.height = this.fontSize || '44px';
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.font = "normal normal 900 " + this.textSize + "/20px 'nexa'";
            this.icon.nativeElement.style.color = '#171F26';
            const tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        }
        else if (this.src && this.src.includes('assets')) {
            //this.icon.nativeElement.style.backgroundImage = this.src;
            /*this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';*/
        }
        else if (this.afterInit === false) {
            this.afterInit = true;
        }
    }
    ngAfterViewInit() {
        if (this.afterInit) {
            this.ngOnInit();
        }
    }
    getRatio() {
    }
};
NameAvatarComponent.ctorParameters = () => [
    { type: TableService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], NameAvatarComponent.prototype, "src", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NameAvatarComponent.prototype, "fontSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NameAvatarComponent.prototype, "textSize", void 0);
__decorate([
    ViewChild('avatar', { static: true }),
    __metadata("design:type", ElementRef)
], NameAvatarComponent.prototype, "icon", void 0);
NameAvatarComponent = __decorate([
    Component({
        selector: 'name-avatar',
        template: "<div [ngStyle]=\"src && src.includes('assets') && {'display': 'none'}\" #avatar>\r\n    {{letter}}\r\n</div>\r\n\r\n<img [src]=\"src\" [ngStyle]=\"{'width': fontSize || '44px', 'height': fontSize || '44px',  'vertical-align': 'middle', 'border-radius': _borderRadius}\" *ngIf=\"src && src.includes('assets')\" />",
        styles: ["div{align-items:center;justify-content:center;padding:0!important}"]
    }),
    __metadata("design:paramtypes", [TableService])
], NameAvatarComponent);
export { NameAvatarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25hbWUtYXZhdGFyL25hbWUtYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBYzVCLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFaakMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBR25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNuQixrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUN0QixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsRDtvR0FDd0Y7WUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxxQ0FBcUMsQ0FBQztZQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEs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WTtHQWRqQyxtQkFBbUIsQ0EwRC9CO1NBMURZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYW1lLWF2YXRhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmFtZS1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbmFtZS1hdmF0YXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmFtZUF2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBASW5wdXQoKSBzcmM6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGZvbnRTaXplID0gJzQ0cHgnO1xyXG4gICAgQElucHV0KCkgdGV4dFNpemUgPSAnMTRweCc7XHJcbiAgICBAVmlld0NoaWxkKCdhdmF0YXInLCB7c3RhdGljOiB0cnVlfSkgaWNvbjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcbiAgICBwdWJsaWMgbGV0dGVyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9wYWRkaW5nID0gJzRweCc7XHJcbiAgICBwcml2YXRlIF9kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgcHVibGljIF9ib3JkZXJSYWRpdXMgPSAnNTBweCc7XHJcbiAgICBwcml2YXRlIF9zaXplID0gJ2NvdmVyJztcclxuICAgIHByaXZhdGUgYWZ0ZXJJbml0ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZSA9IDEyO1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0RGltZW5zaW9uID0gMjQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlIDogVGFibGVTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3JjICYmICF0aGlzLnNyYy5pbmNsdWRlcygnYXNzZXRzJykpIHtcclxuICAgICAgICAgICAgbGV0IGRlZzogbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqICgxMCAtIDM2MCkgKyAxMDtcclxuICAgICAgICAgICAgLyp0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5uYW1lQXZhdGFyQmFja2dyb3VuZENvbG9yOyAvKmBsaW5lYXItZ3JhZGllbnQoJHtkZWd9ZGVnLCAjOWQxMDdkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIzhiMzM5MSwgIzc2NDdhMCwgIzVmNTZhOCwgIzQ4NjJhYilgOyovXHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnI0MyQzhENSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3gnO1xyXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSB0aGlzLl9ib3JkZXJSYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAnMTZweCc7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuZm9udFNpemUgfHwgJzQ0cHgnO1xyXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmZvbnRTaXplIHx8ICc0NHB4JztcclxuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAocGFyc2VJbnQodGhpcy5mb250U2l6ZSwgMCkgLyAyKSArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAocGFyc2VJbnQodGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUsIDApIC8gMykgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gJzkwMCc7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnQgPSBcIm5vcm1hbCBub3JtYWwgOTAwIFwiK3RoaXMudGV4dFNpemUrXCIvMjBweCAnbmV4YSdcIjtcclxuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSAnIzE3MUYyNic7XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcDogc3RyaW5nW10gPSB0aGlzLnNyYy5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICB0aGlzLmxldHRlciA9ICh0bXBbMF1bMF0gKyAodG1wWzFdICYmIHRtcFsxXVswXSA/IHRtcFsxXVswXSA6IHRtcFswXVsxXSkpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYy5pbmNsdWRlcygnYXNzZXRzJykpIHtcclxuICAgICAgICAgICAgLy90aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzLnNyYztcclxuICAgICAgICAgICAgLyp0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSB0aGlzLl9ib3JkZXJSYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAnMTZweCc7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuZm9udFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZm9udFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAocGFyc2VJbnQodGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUsIDApIC8gMykgKyAncHgnOyovXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFmdGVySW5pdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hZnRlckluaXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWZ0ZXJJbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmF0aW8oKSB7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=