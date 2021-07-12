import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TableService } from "../../table.service";
var NameAvatarComponent = /** @class */ (function () {
    function NameAvatarComponent(service) {
        this.service = service;
        this.fontSize = '24px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    NameAvatarComponent.prototype.ngOnInit = function () {
        if (this.src) {
            var deg = Math.random() * (10 - 360) + 10;
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
            var tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        }
        else if (this.afterInit === false) {
            this.afterInit = true;
        }
    };
    NameAvatarComponent.prototype.ngAfterViewInit = function () {
        if (this.afterInit) {
            this.ngOnInit();
        }
    };
    NameAvatarComponent.prototype.getRatio = function () {
    };
    NameAvatarComponent.ctorParameters = function () { return [
        { type: TableService }
    ]; };
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
    return NameAvatarComponent;
}());
export { NameAvatarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25hbWUtYXZhdGFyL25hbWUtYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pEO0lBYUksNkJBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFYakMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUduQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDdkIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUc5QixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEQ7b0dBQ3dGO1lBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcscUNBQXFDLENBQUM7WUFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUN6RyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUM5QyxJQUFNLEdBQUcsR0FBYSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNGO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBRUEsQ0FBQzs7Z0JBakM2QixZQUFZOztJQVpqQztRQUFSLEtBQUssRUFBRTs7b0RBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTs7eURBQW1CO0lBQ1U7UUFBcEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztrQ0FBTyxVQUFVO3FEQUFjO0lBSDFELG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixtREFBMkM7O1NBRTlDLENBQUM7eUNBY2dDLFlBQVk7T0FiakMsbUJBQW1CLENBZ0QvQjtJQUFELDBCQUFDO0NBQUEsQUFoREQsSUFnREM7U0FoRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYW1lLWF2YXRhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25hbWUtYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uYW1lLWF2YXRhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZvbnRTaXplID0gJzI0cHgnO1xuICAgIEBWaWV3Q2hpbGQoJ2F2YXRhcicsIHtzdGF0aWM6IHRydWV9KSBpY29uOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwdWJsaWMgbGV0dGVyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFkZGluZyA9ICc0cHgnO1xuICAgIHByaXZhdGUgX2Rpc3BsYXkgPSAnZmxleCc7XG4gICAgcHJpdmF0ZSBfYm9yZGVyUmFkaXVzID0gJzUwcHgnO1xuICAgIHByaXZhdGUgX3NpemUgPSAnY292ZXInO1xuICAgIHByaXZhdGUgYWZ0ZXJJbml0ID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkZWZhdWx0Rm9udFNpemUgPSAxMjtcbiAgICBwcml2YXRlIGRlZmF1bHREaW1lbnNpb24gPSAyNDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZSA6IFRhYmxlU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgICAgICAgIGxldCBkZWc6IG51bWJlciA9IE1hdGgucmFuZG9tKCkgKiAoMTAgLSAzNjApICsgMTA7XG4gICAgICAgICAgICAvKnRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLm5hbWVBdmF0YXJCYWNrZ3JvdW5kQ29sb3I7IC8qYGxpbmVhci1ncmFkaWVudCgke2RlZ31kZWcsICM5ZDEwN2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIzhiMzM5MSwgIzc2NDdhMCwgIzVmNTZhOCwgIzQ4NjJhYilgOyovXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDMkM4RDUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMuX2JvcmRlclJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAnMTZweCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fZGlzcGxheTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5mb250U2l6ZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZm9udFNpemU7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IChwYXJzZUludCh0aGlzLmZvbnRTaXplLCAwKSAvIDIpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAocGFyc2VJbnQodGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUsIDApIC8gMykgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgY29uc3QgdG1wOiBzdHJpbmdbXSA9IHRoaXMuc3JjLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB0aGlzLmxldHRlciA9ICh0bXBbMF1bMF0gKyAodG1wWzFdICYmIHRtcFsxXVswXSA/IHRtcFsxXVswXSA6IHRtcFswXVsxXSkpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hZnRlckluaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVySW5pdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFmdGVySW5pdCkge1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmF0aW8oKSB7XG5cbiAgICB9XG5cbn1cbiJdfQ==