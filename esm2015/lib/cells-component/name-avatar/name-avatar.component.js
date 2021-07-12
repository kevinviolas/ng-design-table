import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TableService } from "../../table.service";
let NameAvatarComponent = class NameAvatarComponent {
    constructor(service) {
        this.service = service;
        this.fontSize = '44px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    ngOnInit() {
        if (this.src) {
            let deg = Math.random() * (10 - 360) + 10;
            /*this.icon.nativeElement.style.backgroundImage = this.service.settingConfig.nameAvatarBackgroundColor; /*`linear-gradient(${deg}deg, #9d107d,
                                                             #8b3391, #7647a0, #5f56a8, #4862ab)`;*/
            this.icon.nativeElement.style.background = '#C2C8D5 0% 0% no-repeat padding-box';
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.color = 'white';
            const tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
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
    ViewChild('avatar', { static: true }),
    __metadata("design:type", ElementRef)
], NameAvatarComponent.prototype, "icon", void 0);
NameAvatarComponent = __decorate([
    Component({
        selector: 'name-avatar',
        template: "<div #avatar>\n    {{letter}}\n</div>\n",
        styles: ["div{align-items:center;justify-content:center;padding:0!important}"]
    }),
    __metadata("design:paramtypes", [TableService])
], NameAvatarComponent);
export { NameAvatarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25hbWUtYXZhdGFyL25hbWUtYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBYTVCLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFYakMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUduQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDdkIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUc5QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEQ7b0dBQ3dGO1lBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcscUNBQXFDLENBQUM7WUFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUN6RyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUM5QyxNQUFNLEdBQUcsR0FBYSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNGO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCxRQUFRO0lBRVIsQ0FBQztDQUVKLENBQUE7O1lBbkNpQyxZQUFZOztBQVpqQztJQUFSLEtBQUssRUFBRTs7Z0RBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTs7cURBQW1CO0FBQ1U7SUFBcEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQzs4QkFBTyxVQUFVO2lEQUFjO0FBSDFELG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixtREFBMkM7O0tBRTlDLENBQUM7cUNBY2dDLFlBQVk7R0FiakMsbUJBQW1CLENBZ0QvQjtTQWhEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hbWUtYXZhdGFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmFtZS1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25hbWUtYXZhdGFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmFtZUF2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZm9udFNpemUgPSAnNDRweCc7XG4gICAgQFZpZXdDaGlsZCgnYXZhdGFyJywge3N0YXRpYzogdHJ1ZX0pIGljb246IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHB1YmxpYyBsZXR0ZXI6IHN0cmluZztcbiAgICBwcml2YXRlIF9wYWRkaW5nID0gJzRweCc7XG4gICAgcHJpdmF0ZSBfZGlzcGxheSA9ICdmbGV4JztcbiAgICBwcml2YXRlIF9ib3JkZXJSYWRpdXMgPSAnNTBweCc7XG4gICAgcHJpdmF0ZSBfc2l6ZSA9ICdjb3Zlcic7XG4gICAgcHJpdmF0ZSBhZnRlckluaXQgPSBmYWxzZTtcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZSA9IDEyO1xuICAgIHByaXZhdGUgZGVmYXVsdERpbWVuc2lvbiA9IDI0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlIDogVGFibGVTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgICAgICAgbGV0IGRlZzogbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqICgxMCAtIDM2MCkgKyAxMDtcbiAgICAgICAgICAgIC8qdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcubmFtZUF2YXRhckJhY2tncm91bmRDb2xvcjsgLypgbGluZWFyLWdyYWRpZW50KCR7ZGVnfWRlZywgIzlkMTA3ZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjOGIzMzkxLCAjNzY0N2EwLCAjNWY1NmE4LCAjNDg2MmFiKWA7Ki9cbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnI0MyQzhENSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3gnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gdGhpcy5fYm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9ICcxNnB4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9kaXNwbGF5O1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5mb250U2l6ZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gKHBhcnNlSW50KHRoaXMuZm9udFNpemUsIDApIC8gMikgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUucGFkZGluZyA9IChwYXJzZUludCh0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250U2l6ZSwgMCkgLyAzKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gJzkwMCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBjb25zdCB0bXA6IHN0cmluZ1tdID0gdGhpcy5zcmMuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHRoaXMubGV0dGVyID0gKHRtcFswXVswXSArICh0bXBbMV0gJiYgdG1wWzFdWzBdID8gdG1wWzFdWzBdIDogdG1wWzBdWzFdKSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFmdGVySW5pdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJJbml0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYWZ0ZXJJbml0KSB7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSYXRpbygpIHtcblxuICAgIH1cblxufVxuIl19