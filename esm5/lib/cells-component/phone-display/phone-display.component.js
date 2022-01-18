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
        console.log(str);
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                str = '0' + str;
            }
            /*if ( str.length === 13 && str.includes('+')) {
                let tmp = str.slice(0, 3);
                let end = str.slice(3, str.length);
                str = tmp + '0' + end;
            }*/
            console.log(str);
            console.log(str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5"), "(+$1) $1.$2.$3.$4.$5");
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
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
            template: "<strong>{{display || '-'}}</strong>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], PhoneDisplayComponent);
    return PhoneDisplayComponent;
}());
export { PhoneDisplayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGO0lBSUk7SUFDQSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLHlDQUFTLEdBQWpCLFVBQWtCLEdBQVc7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ2xCLGtDQUFrQztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNyRjthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDbkIsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLENBQUM7YUFDakI7WUFDRDs7OztlQUlHO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2hILE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyw0Q0FBNEMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1NBQzVGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQW5DUTtRQUFSLEtBQUssRUFBRTs7eURBQWdCO0lBRGYscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsaURBQTZDOztTQUVoRCxDQUFDOztPQUNXLHFCQUFxQixDQXNDakM7SUFBRCw0QkFBQztDQUFBLEFBdENELElBc0NDO1NBdENZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1waG9uZS1kaXNwbGF5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBob25lRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBudW1iZXI6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMubm9ybWFsaXplKHRoaXMubnVtYmVyKVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbm9ybWFsaXplKHN0cjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XG4gICAgICAgIHN0ciA9IChzdHIgfHwgJycpLnJlcGxhY2UoL1teXFxkXS9nLCBcIlwiKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT0gMTApIHtcbiAgICAgICAgICAgIC8vcmVmb3JtYXQgYW5kIHJldHVybiBwaG9uZSBudW1iZXJcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCszMykgJDEuJDIuJDMuJDQuJDVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyLmxlbmd0aCA+IDEwICYmIHN0ci5sZW5ndGggPD0gMTMpIHtcbiAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID09PSAxMSkge1xuICAgICAgICAgICAgICAgIHN0ciA9ICcwJytzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKmlmICggc3RyLmxlbmd0aCA9PT0gMTMgJiYgc3RyLmluY2x1ZGVzKCcrJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG1wID0gc3RyLnNsaWNlKDAsIDMpO1xuICAgICAgICAgICAgICAgIGxldCBlbmQgPSBzdHIuc2xpY2UoMywgc3RyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgc3RyID0gdG1wICsgJzAnICsgZW5kO1xuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrMzMpICQxLiQyLiQzLiQ0LiQ1XCIpLCBcIigrJDEpICQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrJDEpICQyLiQzLiQ0LiQ1LiQ2XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG4iXX0=