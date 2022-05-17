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
        template: "<div #avatar>\r\n    {{letter}}\r\n</div>\r\n",
        styles: ["div{align-items:center;justify-content:center;padding:0!important}"]
    }),
    __metadata("design:paramtypes", [TableService])
], NameAvatarComponent);
export { NameAvatarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25hbWUtYXZhdGFyL25hbWUtYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBYzVCLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFaakMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBR25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUN2QixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsRDtvR0FDd0Y7WUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxxQ0FBcUMsQ0FBQztZQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3pHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxjQUFjLENBQUM7WUFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDaEQsTUFBTSxHQUFHLEdBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzRjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUVSLENBQUM7Q0FFSixDQUFBOztZQXBDaUMsWUFBWTs7QUFiakM7SUFBUixLQUFLLEVBQUU7O2dEQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7O3FEQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTs7cURBQW1CO0FBQ1U7SUFBcEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQzs4QkFBTyxVQUFVO2lEQUFjO0FBSjFELG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2Qix5REFBMkM7O0tBRTlDLENBQUM7cUNBZWdDLFlBQVk7R0FkakMsbUJBQW1CLENBa0QvQjtTQWxEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmFtZS1hdmF0YXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL25hbWUtYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL25hbWUtYXZhdGFyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hbWVBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgQElucHV0KCkgc3JjOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBmb250U2l6ZSA9ICc0NHB4JztcclxuICAgIEBJbnB1dCgpIHRleHRTaXplID0gJzE0cHgnO1xyXG4gICAgQFZpZXdDaGlsZCgnYXZhdGFyJywge3N0YXRpYzogdHJ1ZX0pIGljb246IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHVibGljIGxldHRlcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfcGFkZGluZyA9ICc0cHgnO1xyXG4gICAgcHJpdmF0ZSBfZGlzcGxheSA9ICdmbGV4JztcclxuICAgIHByaXZhdGUgX2JvcmRlclJhZGl1cyA9ICc1MHB4JztcclxuICAgIHByaXZhdGUgX3NpemUgPSAnY292ZXInO1xyXG4gICAgcHJpdmF0ZSBhZnRlckluaXQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZGVmYXVsdEZvbnRTaXplID0gMTI7XHJcbiAgICBwcml2YXRlIGRlZmF1bHREaW1lbnNpb24gPSAyNDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2UgOiBUYWJsZVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zcmMpIHtcclxuICAgICAgICAgICAgbGV0IGRlZzogbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqICgxMCAtIDM2MCkgKyAxMDtcclxuICAgICAgICAgICAgLyp0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5uYW1lQXZhdGFyQmFja2dyb3VuZENvbG9yOyAvKmBsaW5lYXItZ3JhZGllbnQoJHtkZWd9ZGVnLCAjOWQxMDdkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIzhiMzM5MSwgIzc2NDdhMCwgIzVmNTZhOCwgIzQ4NjJhYilgOyovXHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnI0MyQzhENSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3gnO1xyXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSB0aGlzLl9ib3JkZXJSYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAnMTZweCc7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuZm9udFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZm9udFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gKHBhcnNlSW50KHRoaXMuZm9udFNpemUsIDApIC8gMikgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gKHBhcnNlSW50KHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplLCAwKSAvIDMpICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xyXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250ID0gXCJub3JtYWwgbm9ybWFsIDkwMCBcIit0aGlzLnRleHRTaXplK1wiLzIwcHggJ25leGEnXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gJyMxNzFGMjYnO1xyXG4gICAgICAgICAgICBjb25zdCB0bXA6IHN0cmluZ1tdID0gdGhpcy5zcmMuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgdGhpcy5sZXR0ZXIgPSAodG1wWzBdWzBdICsgKHRtcFsxXSAmJiB0bXBbMV1bMF0gPyB0bXBbMV1bMF0gOiB0bXBbMF1bMV0pKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hZnRlckluaXQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJJbml0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmFmdGVySW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJhdGlvKCkge1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19