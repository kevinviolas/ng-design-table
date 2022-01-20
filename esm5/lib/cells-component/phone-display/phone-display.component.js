import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { CountryISO } from 'ngx-intl-tel-input';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
var PhoneDisplayComponent = /** @class */ (function () {
    function PhoneDisplayComponent(fb) {
        this.fb = fb;
    }
    PhoneDisplayComponent.prototype.ngOnInit = function () {
        this.display = this.normalize(this.number);
        this.phoneForm = this.fb.group({
            phone: [this.number, []]
        });
        this.flag = (this.number && isValidPhoneNumber(this.number) ? parsePhoneNumber(this.number).country : CountryISO.France);
    };
    PhoneDisplayComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    PhoneDisplayComponent.prototype.normalize = function (str) {
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                //str = '0'+str;
            }
            //if ( str.length === 13 && str.includes('+')) {
            var tmp = str.slice(2, 3);
            var end = str.slice(3, str.length);
            str = '0' + tmp + end;
            //}
            //return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        return null;
    };
    PhoneDisplayComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PhoneDisplayComponent.prototype, "number", void 0);
    PhoneDisplayComponent = __decorate([
        Component({
            selector: 'app-phone-display',
            template: "<!--<strong>{{display || '-'}}</strong>-->\n\n<ngx-intl-tel-input\n    [cssClass]=\"'phone-collab'\"\n    [enableAutoCountrySelect]=\"false\"\n    [enablePlaceholder]=\"false\"\n    [selectFirstCountry]=\"false\"\n    [selectedCountryISO]=\"flag\"\n    [maxLength]=\"15\"\n    [phoneValidation]=\"true\"\n    formControlName=\"phone\"\n    disabled\n>\n</ngx-intl-tel-input>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], PhoneDisplayComponent);
    return PhoneDisplayComponent;
}());
export { PhoneDisplayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9yRTtJQU1JLCtCQUNZLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO0lBQzNCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUUxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzNCLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1NBQzNCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBZSxDQUFDO0lBQzNJLENBQUM7SUFFRCwyQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyx5Q0FBUyxHQUFqQixVQUFrQixHQUFXO1FBQ3pCLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDbEIsa0NBQWtDO1lBQ2xDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3JGO2FBQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUM1QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO2dCQUNuQixnQkFBZ0I7YUFDbkI7WUFDRCxnREFBZ0Q7WUFDNUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUMxQixHQUFHO1lBQ0gsMkZBQTJGO1lBQzNGLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3JGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Z0JBcENlLFdBQVc7O0lBTmxCO1FBQVIsS0FBSyxFQUFFOzt5REFBZ0I7SUFEZixxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixrWUFBNkM7O1NBRWhELENBQUM7eUNBUWtCLFdBQVc7T0FQbEIscUJBQXFCLENBNkNqQztJQUFELDRCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0E3Q1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VudHJ5SVNPIH0gZnJvbSAnbmd4LWludGwtdGVsLWlucHV0JztcbmltcG9ydCB7IHBhcnNlUGhvbmVOdW1iZXIsIGlzVmFsaWRQaG9uZU51bWJlciB9IGZyb20gJ2xpYnBob25lbnVtYmVyLWpzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1waG9uZS1kaXNwbGF5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGhvbmUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBob25lRGlzcGxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBudW1iZXI6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuICAgIGZsYWc6IENvdW50cnlJU087XG4gICAgcHVibGljIHBob25lRm9ybTogRm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMubm9ybWFsaXplKHRoaXMubnVtYmVyKVxuXG4gICAgICAgIHRoaXMucGhvbmVGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICBwaG9uZTogW3RoaXMubnVtYmVyLCBbXV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mbGFnID0gKHRoaXMubnVtYmVyICYmIGlzVmFsaWRQaG9uZU51bWJlcih0aGlzLm51bWJlcikgPyBwYXJzZVBob25lTnVtYmVyKHRoaXMubnVtYmVyKS5jb3VudHJ5IDogQ291bnRyeUlTTy5GcmFuY2UpIGFzIENvdW50cnlJU087XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBub3JtYWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgc3RyID0gKHN0ciB8fCAnJykucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PSAxMCkge1xuICAgICAgICAgICAgLy9yZWZvcm1hdCBhbmQgcmV0dXJuIHBob25lIG51bWJlclxuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgXCIoKzMzKSAkMS4kMi4kMy4kNC4kNVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHIubGVuZ3RoID4gMTAgJiYgc3RyLmxlbmd0aCA8PSAxMykge1xuICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDExKSB7XG4gICAgICAgICAgICAgICAgLy9zdHIgPSAnMCcrc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiAoIHN0ci5sZW5ndGggPT09IDEzICYmIHN0ci5pbmNsdWRlcygnKycpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IHN0ci5zbGljZSgyLCAzKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gc3RyLnNsaWNlKDMsIHN0ci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHN0ciA9ICcwJyArIHRtcCArIGVuZDtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgLy9yZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCskMSkgJDIuJDMuJDQuJDUuJDZcIik7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIigrMzMpICQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG4iXX0=