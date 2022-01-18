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
            if (str.length === 13 && str.includes('+')) {
                var tmp = str.slice(0, 3);
                var end = str.slice(3, str.length);
                str = tmp + '0' + end;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGO0lBSUk7SUFDQSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLHlDQUFTLEdBQWpCLFVBQWtCLEdBQVc7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ2xCLGtDQUFrQztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNyRjthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDbkIsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLENBQUM7YUFDakI7WUFDRCxJQUFLLEdBQUcsQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUN6QjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsZ0hBQWdIO1lBQ2hILDJGQUEyRjtZQUMzRixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNyRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFwQ1E7UUFBUixLQUFLLEVBQUU7O3lEQUFnQjtJQURmLHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLGlEQUE2Qzs7U0FFaEQsQ0FBQzs7T0FDVyxxQkFBcUIsQ0F1Q2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXZDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtcGhvbmUtZGlzcGxheScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Bob25lLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Bob25lLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQaG9uZURpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgbnVtYmVyOiBzdHJpbmc7XG4gICAgcHVibGljIGRpc3BsYXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLm5vcm1hbGl6ZSh0aGlzLm51bWJlcilcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vcm1hbGl6ZShzdHI6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhzdHIpO1xuICAgICAgICBzdHIgPSAoc3RyIHx8ICcnKS5yZXBsYWNlKC9bXlxcZF0vZywgXCJcIik7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09IDEwKSB7XG4gICAgICAgICAgICAvL3JlZm9ybWF0IGFuZCByZXR1cm4gcGhvbmUgbnVtYmVyXG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrMzMpICQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0ci5sZW5ndGggPiAxMCAmJiBzdHIubGVuZ3RoIDw9IDEzKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSAnMCcrc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBzdHIubGVuZ3RoID09PSAxMyAmJiBzdHIuaW5jbHVkZXMoJysnKSkge1xuICAgICAgICAgICAgICAgIGxldCB0bXAgPSBzdHIuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IHN0ci5zbGljZSgzLCBzdHIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzdHIgPSB0bXAgKyAnMCcgKyBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdHIpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdHIucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCspICQxLiQyLiQzLiQ0LiQ1XCIpLCBcIigrJDEpICQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgICAgICAgICAgLy9yZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCskMSkgJDIuJDMuJDQuJDUuJDZcIik7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrMzMpICQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG4iXX0=