import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var PhoneDisplayComponent = /** @class */ (function () {
    function PhoneDisplayComponent() {
    }
    PhoneDisplayComponent.prototype.ngOnInit = function () {
        this.display = this.normalize(this.number);
    };
    PhoneDisplayComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    PhoneDisplayComponent.prototype.normalize = function (str) {
        str = (str || '').replace(/[^\d]/g, '');
        if (str.length == 10) {
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '(+33) $1.$2.$3.$4.$5');
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                str = '0' + str;
            }
            if (str.length === 12 && str.includes('+')) {
                var tmp = str.slice(0, 3);
                var end = str.slice(3, str.length);
                str = tmp + end;
            }
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '(+$1) $2.$3.$4.$5.$6');
        }
        return null;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PhoneDisplayComponent.prototype, "number", void 0);
    PhoneDisplayComponent = __decorate([
        Component({
            selector: 'app-phone-display',
            template: "<strong>{{display || '-'}}</strong>\r\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], PhoneDisplayComponent);
    return PhoneDisplayComponent;
}());
export { PhoneDisplayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGO0lBSUU7SUFDQSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLHlDQUFTLEdBQWpCLFVBQWtCLEdBQVc7UUFDM0IsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNwQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNuRjthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDckIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDakI7WUFDRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFDLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLDRDQUE0QyxFQUFFLHNCQUFzQixDQUFDLENBQUM7U0FDMUY7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUEvQlE7UUFBUixLQUFLLEVBQUU7O3lEQUFnQjtJQURiLHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLG1EQUE2Qzs7U0FFOUMsQ0FBQzs7T0FDVyxxQkFBcUIsQ0FrQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBob25lLWRpc3BsYXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBob25lRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBudW1iZXI6IHN0cmluZztcclxuICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5ub3JtYWxpemUodGhpcy5udW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3JtYWxpemUoc3RyOiBzdHJpbmcpIHtcclxuICAgIHN0ciA9IChzdHIgfHwgJycpLnJlcGxhY2UoL1teXFxkXS9nLCAnJyk7XHJcbiAgICBpZiAoc3RyLmxlbmd0aCA9PSAxMCkge1xyXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCAnKCszMykgJDEuJDIuJDMuJDQuJDUnKTtcclxuICAgIH0gZWxzZSBpZiAoc3RyLmxlbmd0aCA+IDEwICYmIHN0ci5sZW5ndGggPD0gMTMpIHtcclxuICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDExKSB7XHJcbiAgICAgICAgc3RyID0gJzAnICsgc3RyO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdHIubGVuZ3RoID09PSAxMiAmJiBzdHIuaW5jbHVkZXMoJysnKSkge1xyXG4gICAgICAgIGNvbnN0IHRtcCA9IHN0ci5zbGljZSgwLCAzKTtcclxuICAgICAgICBjb25zdCBlbmQgPSBzdHIuc2xpY2UoMywgc3RyLmxlbmd0aCk7XHJcbiAgICAgICAgc3RyID0gdG1wICsgZW5kO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgJygrJDEpICQyLiQzLiQ0LiQ1LiQ2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=