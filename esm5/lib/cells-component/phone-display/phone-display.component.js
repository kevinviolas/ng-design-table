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
                //str = '0'+str;
            }
            if (str.includes('+')) {
                var tmp = str.slice(2, 3);
                var end = str.slice(3, str.length);
                str = '0' + tmp + end;
            }
            console.log(str);
            //console.log(str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+) $1.$2.$3.$4.$5"), "(+$1) $1.$2.$3.$4.$5");
            //return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGO0lBSUk7SUFDQSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLHlDQUFTLEdBQWpCLFVBQWtCLEdBQVc7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ2xCLGtDQUFrQztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNyRjthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDbkIsZ0JBQWdCO2FBQ25CO1lBQ0QsSUFBSyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDekI7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLGdIQUFnSDtZQUNoSCwyRkFBMkY7WUFDM0YsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLHNCQUFzQixDQUFDLENBQUM7U0FDckY7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBcENRO1FBQVIsS0FBSyxFQUFFOzt5REFBZ0I7SUFEZixxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixpREFBNkM7O1NBRWhELENBQUM7O09BQ1cscUJBQXFCLENBdUNqQztJQUFELDRCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2Q1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXBob25lLWRpc3BsYXknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGhvbmVEaXNwbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIG51bWJlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5ub3JtYWxpemUodGhpcy5udW1iZXIpXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBub3JtYWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcbiAgICAgICAgc3RyID0gKHN0ciB8fCAnJykucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PSAxMCkge1xuICAgICAgICAgICAgLy9yZWZvcm1hdCBhbmQgcmV0dXJuIHBob25lIG51bWJlclxuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgXCIoKzMzKSAkMS4kMi4kMy4kNC4kNVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHIubGVuZ3RoID4gMTAgJiYgc3RyLmxlbmd0aCA8PSAxMykge1xuICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDExKSB7XG4gICAgICAgICAgICAgICAgLy9zdHIgPSAnMCcrc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBzdHIuaW5jbHVkZXMoJysnKSkge1xuICAgICAgICAgICAgICAgIGxldCB0bXAgPSBzdHIuc2xpY2UoMiwgMyk7XG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IHN0ci5zbGljZSgzLCBzdHIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzdHIgPSAnMCcgKyB0bXAgKyBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdHIucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCspICQxLiQyLiQzLiQ0LiQ1XCIpLCBcIigrJDEpICQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgICAgICAgICAgLy9yZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCskMSkgJDIuJDMuJDQuJDUuJDZcIik7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrMzMpICQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG4iXX0=