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
        console.log(this.src);
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
            this.icon.nativeElement.style.font = "normal normal 900 " + this.textSize + "/20px 'nexa'";
            this.icon.nativeElement.style.color = '#171F26';
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
        template: "<div #avatar>\n    {{letter}}\n</div>\n",
        styles: ["div{align-items:center;justify-content:center;padding:0!important}"]
    }),
    __metadata("design:paramtypes", [TableService])
], NameAvatarComponent);
export { NameAvatarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25hbWUtYXZhdGFyL25hbWUtYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBYzVCLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFaakMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBR25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUN2QixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsRDtvR0FDd0Y7WUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxxQ0FBcUMsQ0FBQztZQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3pHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxjQUFjLENBQUM7WUFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDaEQsTUFBTSxHQUFHLEdBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzRjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUVSLENBQUM7Q0FFSixDQUFBOztZQXJDaUMsWUFBWTs7QUFiakM7SUFBUixLQUFLLEVBQUU7O2dEQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7O3FEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTs7cURBQW1CO0FBQ1U7SUFBcEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQzs4QkFBTyxVQUFVO2lEQUFjO0FBSjFELG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixtREFBMkM7O0tBRTlDLENBQUM7cUNBZWdDLFlBQVk7R0FkakMsbUJBQW1CLENBbUQvQjtTQW5EWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hbWUtYXZhdGFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmFtZS1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25hbWUtYXZhdGFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmFtZUF2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZm9udFNpemUgPSAnNDRweCc7XG4gICAgQElucHV0KCkgdGV4dFNpemUgPSAnMTRweCc7XG4gICAgQFZpZXdDaGlsZCgnYXZhdGFyJywge3N0YXRpYzogdHJ1ZX0pIGljb246IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHB1YmxpYyBsZXR0ZXI6IHN0cmluZztcbiAgICBwcml2YXRlIF9wYWRkaW5nID0gJzRweCc7XG4gICAgcHJpdmF0ZSBfZGlzcGxheSA9ICdmbGV4JztcbiAgICBwcml2YXRlIF9ib3JkZXJSYWRpdXMgPSAnNTBweCc7XG4gICAgcHJpdmF0ZSBfc2l6ZSA9ICdjb3Zlcic7XG4gICAgcHJpdmF0ZSBhZnRlckluaXQgPSBmYWxzZTtcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZSA9IDEyO1xuICAgIHByaXZhdGUgZGVmYXVsdERpbWVuc2lvbiA9IDI0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlIDogVGFibGVTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3JjKTtcbiAgICAgICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICAgICAgICBsZXQgZGVnOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpICogKDEwIC0gMzYwKSArIDEwO1xuICAgICAgICAgICAgLyp0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5uYW1lQXZhdGFyQmFja2dyb3VuZENvbG9yOyAvKmBsaW5lYXItZ3JhZGllbnQoJHtkZWd9ZGVnLCAjOWQxMDdkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICM4YjMzOTEsICM3NjQ3YTAsICM1ZjU2YTgsICM0ODYyYWIpYDsqL1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjQzJDOEQ1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSB0aGlzLl9ib3JkZXJSYWRpdXM7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzE2cHgnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2Rpc3BsYXk7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuZm9udFNpemU7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAocGFyc2VJbnQodGhpcy5mb250U2l6ZSwgMCkgLyAyKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gKHBhcnNlSW50KHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplLCAwKSAvIDMpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRXZWlnaHQgPSAnOTAwJztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnQgPSBcIm5vcm1hbCBub3JtYWwgOTAwIFwiK3RoaXMudGV4dFNpemUrXCIvMjBweCAnbmV4YSdcIjtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gJyMxNzFGMjYnO1xuICAgICAgICAgICAgY29uc3QgdG1wOiBzdHJpbmdbXSA9IHRoaXMuc3JjLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB0aGlzLmxldHRlciA9ICh0bXBbMF1bMF0gKyAodG1wWzFdICYmIHRtcFsxXVswXSA/IHRtcFsxXVswXSA6IHRtcFswXVsxXSkpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hZnRlckluaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVySW5pdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFmdGVySW5pdCkge1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmF0aW8oKSB7XG5cbiAgICB9XG5cbn1cbiJdfQ==